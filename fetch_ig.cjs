const https = require('https');
const urls = [
  'https://www.instagram.com/p/DavDBHlz38f/?hl=en',
  'https://www.instagram.com/p/DaiTPvbTEtq/?hl=en',
  'https://www.instagram.com/p/Dba4wkcTjvw/?hl=en',
  'https://www.instagram.com/p/DakNfDuTZWP/?hl=en'
];
urls.forEach(url => {
  https.get(url, { headers: { 'User-Agent': 'WhatsApp/2.21.12.21 A' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/<meta property="og:image" content="([^"]+)"/);
      console.log(url, match ? match[1] : 'not found');
    });
  }).on('error', console.error);
});
