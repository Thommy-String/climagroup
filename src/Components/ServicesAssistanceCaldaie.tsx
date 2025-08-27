import React, { useRef, useState, useEffect } from "react";
import "./ServicesAssistance.css"; // riuso identico

type Item = {
  id: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  body: string;
};

const ITEMS: Item[] = [
  {
    id: "riparazione-caldaie",
    image: "https://www.caldaietorino.info/wp-content/uploads/2022/03/CALDAIEaGAS-1024x683.jpg",
    imageAlt: "Tecnico ripara una caldaia",
    eyebrow: "Riparazione",
    title: "Riparazione caldaie.",
    body:
      "Blocchi, perdite, mancata accensione e anomalie di pressione. Intervento rapido su tutte le marche."
  },
  {
    id: "installazione-sostituzione-caldaie",
    image: "https://expobiomasa.com/wp-content/uploads/2025/02/ignisdom.png",
    imageAlt: "Installazione caldaia a condensazione",
    eyebrow: "Installazione",
    title: "Nuova installazione & sostituzione.",
    body:
      "Caldaie a condensazione, murali e a basamento. Montaggio certificato, pratiche e collaudo."
  },
  {
    id: "manutenzione-bollino",
    image: "https://innovasol.it/wp-content/uploads/2023/04/controllo-fumi-caldaia-bollino-blu.jpg",
    imageAlt: "Manutenzione con rilascio bollino",
    eyebrow: "Manutenzione",
    title: "Manutenzione & bollino.",
    body:
      "Tagliando annuale, pulizia, controlli di sicurezza e rilascio bollino blu/verde secondo normativa."
  },
  {
    id: "analisi-fumi",
    image: "https://arwmisure.it/corporate/wp-content/uploads/2017/09/analizzatore-di-combustione-K425-1.jpg",
    imageAlt: "Analizzatore fumi caldaia",
    eyebrow: "Controlli",
    title: "Analisi fumi & emissioni.",
    body:
      "Verifica rendimento, combustione ed emissioni per efficienza e conformità alle norme regionali."
  },

  {
    id: "ricambi-originali-caldaie",
    image: "https://www.ricambipercaldaie.it/img/ybc_blog/post/marche-caldaie.jpg",
    imageAlt: "Ricambi originali per caldaie",
    eyebrow: "Ricambi",
    title: "Ricambi originali.",
    body:
      "Sostituzione componenti (valvole, scambiatori, circolatori, guarnizioni) con pezzi originali."
  },
  {
    id: "diagnosi-elettronica-caldaie",
    image: "https://www.smricambi.com/public/blog/thumbs/sonda-ntc-caldaia-a-cosa-serve-e-come-sostituirla-it-000.jpg",
    imageAlt: "Diagnosi scheda elettronica",
    eyebrow: "Diagnosi",
    title: "Schede & componenti.",
    body:
      "Controllo e sostituzione di schede, bruciatori, pressostati, sonde NTC e valvole gas."
  },
  {
    id: "collaudo-conformita",
    image: "https://vivalosconto.it/public/prodotti/1746708796.png",
    imageAlt: "Collaudo impianto",
    eyebrow: "Conformità",
    title: "Collaudo & certificazioni.",
    body:
      "Prove di funzionamento, documentazione e dichiarazioni di conformità a fine lavoro."
  },
  {
    id: "sopralluogo-consulenza",
    image: "https://www.gualandrismariovaillant.com/images/img-sopralluogo2.jpg",
    imageAlt: "Progetto e sopralluogo",
    eyebrow: "Progetto",
    title: "Sopralluogo & consulenza.",
    body:
      "Rilievo in loco e scelta del modello più efficiente. Supporto a bonus fiscali ed ecobonus."
  },
  {
    id: "manutenzione-programmata-caldaie",
    image: "https://www.misterplumber.it/wp-content/uploads/2020/02/manutanzione-caldaie.jpg",
    imageAlt: "Scheda manutenzione",
    eyebrow: "Programmi",
    title: "Manutenzione programmata.",
    body:
      "Piani periodici per evitare guasti, ottimizzare i consumi e prolungare la vita dell’impianto."
  },
  {
    id: "pronto-intervento-caldaie",
    image: "https://www.assistenza-caldaieroma.com/wp-content/uploads/2020/02/Fotolia_59941095_Subscription_Monthly_M.jpg",
    imageAlt: "Furgone pronto intervento",
    eyebrow: "Urgenze",
    title: "Pronto intervento.",
    body:
      "Disponibilità rapida a Roma e provincia. Gestione emergenze e ripristino in tempi brevi."
  }
];

const Card: React.FC<{ item: Item }> = ({ item }) => (
  <article className="ag-card" aria-labelledby={`${item.id}-title`}>
    <div className="ag-frame">
      <img className="ag-image" src={item.image} alt={item.imageAlt} loading="lazy" />
    </div>

    <div className="ag-copy">
      <p className="ag-eyebrow">{item.eyebrow}</p>
      <h3 id={`${item.id}-title`} className="ag-title">
        {item.title}
      </h3>
      <p className="ag-body">{item.body}</p>
    </div>
  </article>
);

export default function ServicesAssistanceCaldaie() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const PEEK = 16;

  const scrollToIndex = (index: number) => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const cards = Array.from(scroller.querySelectorAll<HTMLElement>(".ag-card"));
    if (index < 0) index = 0;
    if (index > cards.length - 1) index = cards.length - 1;
    const targetLeft = Math.max(0, cards[index].offsetLeft - PEEK);
    scroller.scrollTo({ left: targetLeft, behavior: "smooth" });
    setActive(index);
  };

  const onScroll = () => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const cards = Array.from(scroller.querySelectorAll<HTMLElement>(".ag-card"));
    if (cards.length === 0) return;

    const scrollLeft = scroller.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardLeft = card.offsetLeft - PEEK;
      const distance = Math.abs(cardLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== active) {
      setActive(closestIndex);
    }
  };

  useEffect(() => {
    scrollToIndex(0);
  }, []);

  return (
    <section
      className="ag-section"
      aria-label="Assistenza caldaie"
      style={{ background: "#f7f8fa" }}  // grigio chiarissimo per differenziarla
    >
      <div className="ag-container">
        <header className="ag-head">
          <h2 className="ag-h2">Servizi Caldaie.</h2>
          <p className="ag-sub">
            Interventi certificati con bollino, analisi fumi e ricambi originali. Operativi a Roma e provincia.
          </p>
        </header>

        <div className="ag-grid" ref={scrollRef} onScroll={onScroll}>
          {ITEMS.map((it) => (
            <Card key={it.id} item={it} />
          ))}
        </div>

        <div className="ag-controls" aria-hidden="true">
          <button className="ag-nav ag-nav-prev" onClick={() => scrollToIndex(active - 1)} aria-label="Indietro">◀</button>
          <button className="ag-nav ag-nav-next" onClick={() => scrollToIndex(active + 1)} aria-label="Avanti">▶</button>
        </div>
      </div>
    </section>
  );
}