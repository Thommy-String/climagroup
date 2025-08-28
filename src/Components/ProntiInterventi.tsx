import "./ProntiInterventi.css";

import assistenzaCaldaia from "../images/interventoCaldaia.png";
import assistenzaCondizionatore from "../images/assistenzaCondizionatore.png";
import tecnicoClimaGroup from "../images/tecnicoClimaGroup.png";
import { useRef } from "react";

interface CardProps {
  eyebrow: string;
  title: string;
  image: string;
}

const CARDS: CardProps[] = [
  {
    eyebrow: "EMERGENZA H24",
    title: "Tecnici certificati",
    image: tecnicoClimaGroup,
  },
  {
    eyebrow: "PRONTO INTERVENTO",
    title: "Assistenza Caldaie in 24h",
    image: assistenzaCaldaia,
  },
  {
    eyebrow: "ASSISTENZA RAPIDA",
    title: "Condizionatori bloccati? Interveniamo subito",
    image: assistenzaCondizionatore,
  },
];

export default function ProntiInterventi() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".pi__card");
    const step = card ? card.offsetWidth + 16 /* gap */ : el.clientWidth;
    el.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="pi" aria-label="Pronto Intervento">
      <div className="pi__container" ref={scrollRef}>
        {CARDS.map((card, i) => (
          <article className="pi__card" key={i} aria-labelledby={`pi-title-${i}`}>
            {/* TESTO IN ALTO */}
            <header className="pi__copy">
              <p className="pi__eyebrow">{card.eyebrow}</p>
              <h3 id={`pi-title-${i}`} className="pi__title">
                {card.title}
              </h3>
            </header>

            {/* IMMAGINE IN BASSO + OVERLAY & CTA */}
            <div className="pi__media">
              <img src={card.image} alt={card.title} className="pi__image" />
              {/* overlay sfumata per leggere il bottone */}
              <div className="pi__overlay" aria-hidden="true"></div>
              {/* CTA in basso a destra */}
              <a
                href="tel:066622151"
                className="pi__cta"
                aria-label="Chiama Clima Group al numero 06 6622151"
                title="Chiama 06 6622151"
              >
                Chiama
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="pi__controls" aria-hidden="true">
        <button className="pi__nav pi__nav--prev" onClick={() => scroll("prev")} aria-label="Indietro">
          ◀
        </button>
        <button className="pi__nav pi__nav--next" onClick={() => scroll("next")} aria-label="Avanti">
          ▶
        </button>
      </div>
    </section>
  );
}