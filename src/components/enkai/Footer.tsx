export function Footer() {
  return (
    <footer className="relative bg-black text-parchment/70">
      <div className="hairline-gold h-px w-full opacity-40" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-gold font-heading">
              E
            </span>
            <span className="font-heading text-xl tracking-[0.18em] text-parchment">
              ENKAI · SOCIAL
            </span>
          </div>
          <p className="justify-pretty mt-6 max-w-md text-sm text-parchment/60">
            India's Real-Time Event Media Company. We transform every event into a
            living, breathing, social-first experience — captured, published and
            amplified as it unfolds.
          </p>
          <p className="mt-8 font-ui text-[11px] tracking-[0.3em] uppercase text-gold/80">
            A Subsidiary of Echelon Media
          </p>
        </div>

        <div>
          <h4 className="font-ui text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-gold" href="#home">Home</a></li>
            <li><a className="hover:text-gold" href="#about">About</a></li>
            <li><a className="hover:text-gold" href="/portfolio">Portfolio</a></li>
            <li><a className="hover:text-gold" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-ui text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
            Reach us
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-gold" href="mailto:hello@enkaisocial.in">hello@enkaisocial.in</a></li>
            <li><a className="hover:text-gold" href="https://instagram.com/enkaisocial">@enkaisocial</a></li>
            <li><a className="hover:text-gold" href="#">+91 · Delhi NCR</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-parchment/40">
          <span>© {new Date().getFullYear()} Enkai Social</span>
          <span className="font-script text-lg gold-text normal-case tracking-normal leading-[1.4] py-1">
            Where Every Event Goes Social
          </span>
          <span>Crafted with intent</span>
        </div>
      </div>
    </footer>
  );
}
