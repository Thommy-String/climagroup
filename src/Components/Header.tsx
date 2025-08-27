import "./Header.css";
import { useState } from "react";

type MenuItem = { label: string; href?: string };
type MegaItem = {
  label: string;
  items: MenuItem[];
  image: { src: string; alt: string };
};

const NAV: MegaItem[] = [
  {
    label: "Caldaie",
    items: [
      { label: "Assistenza caldaie", href: "#assistenza-caldaie" },
      { label: "Installazione nuova caldaia", href: "#installazione-caldaia" },
      { label: "Compra caldaie", href: "https://www.venditacaldaieonline.it/" },
    ],
    image: {
      src: "https://www.radiant.it/wp-content/uploads/2020/04/R2K-r14-600x600.jpg",
      alt: "Tecnico caldaie",
    },
  },
  {
    label: "Climatizzatori",
    items: [
      { label: "Assistenza climatizzatori", href: "#assistenza-condizionatori" },
      { label: "Installazione clima", href: "#installazione-clima" },
      { label: "Compra climatizzatori", href: "#shop-clima" },
    ],
    image: {
      src: "https://www.greentech22.com/wp-content/uploads/2019/05/MITSUBISHI-ELECTRIC-MSZ-DM-HJ.jpg",
      alt: "Climatizzatore",
    },
  },
  {
    label: "Contatti",
    items: [
      { label: "Sedi & recapiti", href: "#contatti" },
      { label: "WhatsApp", href: "https://wa.me/393889922137" },
      { label: "Orari & urgenze", href: "#urgenze" },
    ],
    image: {
      src: "https://www.climagroup.info/wp-content/uploads/2025/08/pronto-intervento-caldaie-1024x683.jpg",
      alt: "Assistenza clienti",
    },
  },
  {
    label: "Punto vendita",
    items: [
      { label: "Indirizzo e mappa", href: "#store" },
      { label: "Ritiro in sede", href: "#ritiro" },
      { label: "Parcheggio & accesso", href: "#parcheggio" },
    ],
    image: {
      src: "https://www.climagroupimpianti.it/wp-content/uploads/2025/06/sede-clima-group.png",
      alt: "Showroom e Punto vendita Clima Group",
    },
  },
];

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isOpen = openIndex !== null;
  const current = isOpen ? NAV[openIndex!] : null;

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="Main"
      onMouseLeave={() => setOpenIndex(null)}
    >
      <div className="container navbar__inner">
        {/* Brand */}
        <a className="navbar__brand" href="/" aria-label="Climagroup Home">
          <img
            className="navbar__logo"
            src="https://www.climagroup.info/wp-content/uploads/2025/04/cropped-logo-nuovo-climagroup-impianti.png"
            alt="Climagroup Impianti"
            height={40}
          />
        </a>

        {/* Menu */}
        <ul className="navbar__menu" role="menubar" aria-label="Sezioni principali">
          {NAV.map((mega, idx) => (
            <li key={mega.label} className="menu__item">
              <button
                className="menu__trigger"
                aria-haspopup="true"
                aria-expanded={openIndex === idx}
                onMouseEnter={() => setOpenIndex(idx)}
                onFocus={() => setOpenIndex(idx)}
              >
                <span>{mega.label}</span>
                <ChevronDown className={`chev ${openIndex === idx ? "chev--up" : ""}`} />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA call */}
        <div className="navbar__cta">
          <a className="btn btn--primary btn--call" href="tel:066622151" aria-label="Chiama Climagroup">
            CHIAMA
          </a>
        </div>

        {/* Mobile hamburger (shown only under 880px via CSS) */}
        <button
          className="navbar__toggle"
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu-panel"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Single full-width mega panel under the navbar */}
      <div
        className={`mega ${isOpen ? "is-open" : ""}`}
        onMouseEnter={() => {/* keep open while hovering panel */}}
        onMouseLeave={() => setOpenIndex(null)}
        role="region"
        aria-label="Sottomenu"
      >
        {current ? (
          <>
            <div className="mega__col">
              <ul className="mega__list">
                {current.items.map((it) => (
                  <li key={it.label}>
                    <a className="mega__link" href={it.href} role="menuitem">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mega__media" aria-hidden="true">
              <img src={current.image.src} alt={current.image.alt} />
            </div>
          </>
        ) : null}
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-overlay ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
        <button
          className="mobile-overlay__backdrop"
          aria-label="Chiudi menu"
          onClick={() => setMobileOpen(false)}
        />
        <aside id="mobile-menu-panel" className="mobile-overlay__panel" role="dialog" aria-modal="true" aria-label="Menu mobile">
          <div className="mobile-overlay__header">
            <a className="navbar__brand" href="/" onClick={() => setMobileOpen(false)}>
              <img
                className="navbar__logo"
                src="https://www.climagroup.info/wp-content/uploads/2025/04/cropped-logo-nuovo-climagroup-impianti.png"
                alt="Climagroup Impianti"
                height={34}
              />
            </a>
            <button className="mobile-overlay__close" aria-label="Chiudi" onClick={() => setMobileOpen(false)}>
              <span />
              <span />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Navigazione mobile">
            <ul className="mobile-nav__list">
              {NAV.map((group) => (
                <li key={group.label} className="mobile-nav__group">
                  <details open>
                    <summary>{group.label}</summary>
                    <ul>
                      {group.items.map((it) => (
                        <li key={it.label}>
                          <a href={it.href} onClick={() => setMobileOpen(false)}>{it.label}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-overlay__footer">
            <a className="btn btn--primary btn--call" href="tel:066622151" onClick={() => setMobileOpen(false)}>
              CHIAMA
            </a>
          </div>
        </aside>
      </div>
    </nav>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}