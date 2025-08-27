import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero__grid">
                {/* LEFT */}
                
                <div className="hero__left">
                    <h1 className="hero__title">
                        <span className="eyebrow"> VENDITA - ASSISTENZA - INSTALLAZIONE</span>
                        <br />Caldaie e Climatizzatori
                    </h1>
                     <p className="subtle-info">📍ROMA</p>
                    <p className="hero__subtitle">
                        Interventi rapidi, tecnici certificati F-GAS. Da oltre 20 anni al servizio di impianti civili, commerciali e industriali.
                    </p>
                    

                    <div className="hero__certs">
                        <img src="https://www.climagroup.info/wp-content/uploads/2020/06/clima-group-impianti-certificazioni.new_-768x188.png" alt="" />
                    </div>

                    <div className="hero__cta">
                        <a href="#appuntamento" className="btn btn--primary">Richiedi Intervento</a>
                        <a href="#servizi" className="btn btn--secondary">
                            Chiama Ora
                            <span className="btn__icon" aria-hidden="true">📞</span>
                        </a>
                    </div>

                    
                </div>

                {/* RIGHT */}
                <div className="hero__right">
                    <div className="image-card">
                        <img
                            className="hero__image"
                            src="https://quifinanza.it/wp-content/uploads/sites/5/2023/05/Ue-stop-caldaie-gas-gasolio.jpg"
                            alt="Tecnico Climagroup in intervento"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}