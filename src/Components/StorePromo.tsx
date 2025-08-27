import "./StorePromo.css";

export default function StorePromo() {
  return (
    <section className="sp" aria-label="Promo store">
      <div className="sp__container">
        <header className="sp__head">
        </header>

        <a
          className="sp__card"
          href="https://www.venditacaldaieonline.it/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vai allo store VenditaCaldaieOnline.it"
        >
          {/* immagine “edge-to-edge” */}
          <div className="sp__media" aria-hidden="true">
            <img
              className="sp__img"
              src="https://www.vaillant.it/images/campagne/ottobre-2022/ecotec-plus-1920x1080-ott22-2509673-format-16-9@1440@desktop.jpg"
              alt=""
              loading="lazy"
            />
            {/* lieve gradiente per leggibilità del testo */}
            <div className="sp__scrim" />
          </div>

          {/* copy sovrapposto */}
          <div className="sp__copy">
            
            <h3 className="sp__h">
              Caldaie
            
            </h3>

            <ul className="sp__badges" aria-label="Punti di forza">
              <li className="sp__chip">Installazione certificata</li>
              <li className="sp__chip">Bollino blu</li>
              <li className="sp__chip">Ricambi originali</li>
            </ul>

            <span className="sp__cta">Vai allo store <span className="sp__chev" aria-hidden="true">›</span></span>
          </div>
        </a>

        <a
          className="sp__card"
          href="https://www.venditacaldaieonline.it/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vai allo store VenditaCaldaieOnline.it"
        >
          {/* immagine “edge-to-edge” */}
          <div className="sp__media" aria-hidden="true">
            <img
              className="sp__img"
              src="https://www.yeppon.it/guide-acquisti/wp-content/uploads/2025/04/image_dd4c63f7feed6b021b3601dcddaeb15f-1200x660.jpg"
              alt=""
              loading="lazy"
            />
            {/* lieve gradiente per leggibilità del testo */}
            <div className="sp__scrim" />
          </div>

          {/* copy sovrapposto */}
          <div className="sp__copy">
            
            <h3 className="sp__h">
              Condizionatori
              
            </h3>

            <ul className="sp__badges" aria-label="Punti di forza">
              <li className="sp__chip">F-GAS</li>
              <li className="sp__chip">Installazione professionale</li>
            </ul>

            <span className="sp__cta">Vai allo store <span className="sp__chev" aria-hidden="true">›</span></span>
          </div>
        </a>

        <a
          className="sp__card"
          href="https://www.venditacaldaieonline.it/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vai allo store VenditaCaldaieOnline.it"
        >
          {/* immagine “edge-to-edge” */}
          <div className="sp__media" aria-hidden="true">
            <img
              className="sp__img"
              src="https://www.masiconditioners.com/file/800x0/Argomenti/ricambi%201200x900.jpg"
              alt=""
              loading="lazy"
            />
            {/* lieve gradiente per leggibilità del testo */}
            <div className="sp__scrim" />
          </div>

          {/* copy sovrapposto */}
          <div className="sp__copy">
           
            <h3 className="sp__h">
              Ricambi 
              <span className="sp__hSub">caldaie e condizionatori</span>
            </h3>

            <ul className="sp__badges" aria-label="Punti di forza">
              <li className="sp__chip">Originali</li>
              <li className="sp__chip">Multi-marca</li>
            </ul>

            <span className="sp__cta">Vai allo store <span className="sp__chev" aria-hidden="true">›</span></span>
          </div>
        </a>
      </div>
    </section>
  );
}