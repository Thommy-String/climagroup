import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__container">
        {/* Brand + claim */}
        <div className="ft__col">
          <a href="/" className="ft__brand" aria-label="Clima Group - Home">
            <img
              src="https://www.climagroup.info/wp-content/uploads/2025/04/cropped-logo-nuovo-climagroup-impianti.png"
              alt="Clima Group"
              className="ft__logo"
              loading="lazy"
            />
          </a>
          <p className="ft__claim">
            Vendita, installazione e <strong>assistenza</strong> per caldaie e
            climatizzatori a <strong>Roma e provincia</strong>. Tecnici
            certificati F-GAS, ricambi originali, interventi rapidi.
          </p>

          <ul className="ft__badges" aria-label="Certificazioni e punti di forza">
            <li className="ft__chip">F-GAS</li>
            <li className="ft__chip">Ricambi originali</li>
            <li className="ft__chip">20+ anni</li>
          </ul>
        </div>

        {/* Contatti */}
        <div className="ft__col">
          <h3 className="ft__h">Contatti</h3>
          <ul className="ft__list">
            <li>
              <a className="ft__link" href="tel:066622151" aria-label="Chiama 06 6622151">
                📞 06 6622151
              </a>
            </li>
            <li>
              <a
                className="ft__link"
                href="https://wa.me/393421056120"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scrivi su WhatsApp 342 1056120"
              >
                💬 342 1056120 (WhatsApp)
              </a>
            </li>
            <li>
              <a className="ft__link" href="mailto:tempestaspa@libero.it">
                📧 tempestaspa@libero.it
              </a>
            </li>
          </ul>
          <div className="ft__cta">
            <a className="ft__btn ft__btn--primary" href="tel:066622151">Chiama ora</a>
            <a
              className="ft__btn ft__btn--ghost"
              href="https://wa.me/393421056120"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Link rapidi */}
        <div className="ft__col">
          <h3 className="ft__h">Servizi</h3>
          <ul className="ft__list">
            <li><a className="ft__link" href="#assistenza-caldaie">Assistenza Caldaie</a></li>
            <li><a className="ft__link" href="#assistenza-condizionatori">Assistenza Condizionatori</a></li>
            <li><a className="ft__link" href="#installazioni">Installazione & Sostituzione</a></li>
            <li><a className="ft__link" href="#manutenzione-programmata">Manutenzione Programmata</a></li>
          </ul>
        </div>

        {/* Info utili */}
        <div className="ft__col">
          <h3 className="ft__h">Info utili</h3>
          <ul className="ft__list">
            <li><a className="ft__link" href="#zone-coperte">Zone coperte (Roma & Provincia)</a></li>
            <li><a className="ft__link" href="#marchi">Marchi trattati</a></li>
            <li><a className="ft__link" href="#faq">FAQ</a></li>
            <li><a className="ft__link" href="#contatti">Contatti</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft__bottom">
        <div className="ft__container ft__bottomWrap">
          <p className="ft__legal">
            © {new Date().getFullYear()} Clima Group Impianti SRLS — P.IVA 17771951005
          </p>
          <nav className="ft__policies" aria-label="Link legali">
            <a className="ft__link" href="#privacy">Privacy</a>
            <span aria-hidden="true">·</span>
            <a className="ft__link" href="#cookies">Cookie</a>
            <span aria-hidden="true">·</span>
            <button className="ft__consent" type="button">Gestisci consenso</button>
          </nav>
        </div>
      </div>
    </footer>
  );
}