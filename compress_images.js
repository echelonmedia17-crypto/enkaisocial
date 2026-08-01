import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const MAX_FILE_SIZE = 1024 * 1024; // 1MB

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const stats = await fs.stat(fullPath);
        if (stats.size > MAX_FILE_SIZE) {
          console.log(`Compressing: ${fullPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
          const tempPath = fullPath + '.tmp';
          try {
            await sharp(fullPath)
              .resize({ width: 1920, withoutEnlargement: true })
              .jpeg({ quality: 80, progressive: true })
              .toFile(tempPath);
            
            await fs.rename(tempPath, fullPath);
            const newStats = await fs.stat(fullPath);
            console.log(`  -> Done: ${(newStats.size / 1024 / 1024).toFixed(2)} MB`);
          } catch (e) {
            console.error(`  -> Failed to compress ${fullPath}:`, e);
            try { await fs.unlink(tempPath); } catch (e2) {}
          }
        }
      }
    }
  }
}

async function main() {
  console.log('Starting image compression...');
  await processDirectory(ASSETS_DIR);
  console.log('Compression complete.');
}

main().catch(console.error);
