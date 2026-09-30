import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { Symbol, Wordmark } from "@/components/Logo";
import { site, contactHref } from "@/lib/site";
export function Social() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-12">
      <Reveal>
        <div className="glass relative flex flex-col items-start justify-between gap-10 rounded-2xl p-10 md:flex-row md:items-end md:p-16">
          <div className="prism opacity-50" />
          <div><p className="eyebrow mb-6">GALI / SOCIAL</p><p className="display text-[clamp(1.6rem,3.4vw,3rem)]">{site.handle}</p></div>
          <Magnetic href={site.instagram}>EXPLORE GALI</Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
export function Final() {
  return (
    <section id="contact" className="px-6 py-48 text-center md:px-12">
      <Reveal><h2 className="display mb-16 text-[clamp(2.2rem,5vw,4.5rem)]">THINK<br />LONG TERM.</h2></Reveal>
      <div className="flex flex-wrap justify-center gap-4"><Magnetic href={contactHref}>START A CONVERSATION</Magnetic><Magnetic href={site.instagram} ghost>EXPLORE GALI</Magnetic></div>
    </section>
  );
}
export function Footer() {
  const l = "text-[#8b9098] hover:text-white transition-colors";
  return (
    <footer className="border-t border-white/5 px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-[1500px] flex-wrap items-start justify-between gap-10 text-[11px] tracking-[.2em]">
        <div className="flex items-center gap-4"><Symbol size={32} /><div><Wordmark height={12} /><p className="mt-2 text-[#8b9098]">CAPITAL / INVESTMENTS</p></div></div>
        <div className="flex flex-wrap gap-8"><a className={l} href={site.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM</a><a className={l} href={contactHref}>CONTACT</a><a className={l} href="#legal">LEGAL</a><a className={l} href="#privacy">PRIVACY</a><a className={l} href="#terms">TERMS</a></div>
      </div>
      <div id="legal" className="mx-auto mt-12 max-w-[1500px] text-[11px] leading-relaxed text-[#6d7278]">
        {site.regulatory ? site.regulatory.map((r) => <p key={r}>{r}</p>) : <p>Regulatory notices reserved. This site is a brand concept prototype; no registration, authorization, performance or client data is represented here.</p>}
      </div>
    </footer>
  );
}
