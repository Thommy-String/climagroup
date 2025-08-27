import React, { useRef, useState, useEffect } from "react";
import "./ServicesAssistance.css";

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
    id: "riparazione-clima",
    image: "https://www.idraulico-difrancesco.com/roma/wp-content/uploads/2023/07/assistenza-condizionatori.jpg",
    imageAlt: "Tecnico che ripara uno split a parete",
    eyebrow: "Riparazione",
    title: "Riparazione climatizzatori.",
    body:
      "Guasti elettrici e meccanici, blocchi, errori a display. Interveniamo su tutte le marche."
  },
  {
    id: "installazione-sostituzione",
    image: "https://idraulicapoint.com/store/2861-home_default/baxi-nuova-caldaia-a-condensazione-duo-tec-compact-e-24-kw-caldaia-modello-duo-tec-compact-e-24-kw-baxi-mago-di-serie-per-il-mod.jpg",
    imageAlt: "Installazione di uno split a parete",
    eyebrow: "Installazione",
    title: "Nuova installazione e sostituzione.",
    body:
      "Mono, dual e multi‑split, canalizzati. Rilascio dichiarazioni di conformità e pratiche F‑GAS."
  },
  {
    id: "ricarica-gas",
    image: "https://idroboss.it/wp-content/uploads/2024/05/Ricarica-gas.webp",
    imageAlt: "Tecnico misura pressione del gas refrigerante",
    eyebrow: "Ricarica",
    title: "Ricarica gas (R32, R410A…).",
    body:
      "Ricerca perdite, vuoto impianto, ricarica a norma F‑GAS. Solo quando realmente necessaria."
  },
  {
    id: "manutenzione-filtri",
    image: "https://media.gqitalia.it/photos/5ef3621ac2eaff307d5e4f85/16:9/w_2111,h_1187,c_limit/GettyImages-1168365074.jpg",
    imageAlt: "Pulizia dei filtri del climatizzatore",
    eyebrow: "Manutenzione",
    title: "Pulizia filtri & check.",
    body:
      "Lavaggio filtri, controllo resa e consumi, verifica perdite e componenti soggetti a usura."
  },
  {
    id: "sanificazione-legionella",
    image: "https://hydrohome.it/wp-content/uploads/2025/05/10308-430x430.jpg",
    imageAlt: "Sanificazione professionale dell'unità interna",
    eyebrow: "Sanificazione",
    title: "Anti‑Legionella & igienizzazione.",
    body:
      "Trattamenti antibatterici professionali per split e canalizzati. Migliora salubrità e qualità dell’aria."
  },
  
  {
    id: "diagnosi-elettronica",
    image: "https://www.ricambipercaldaie.it/8464-thickbox_default/scheda-caldaia-savio-biasi-bi2445100.jpg",
    imageAlt: "Tecnico diagnostica scheda elettronica",
    eyebrow: "Diagnosi",
    title: "Schede & componenti.",
    body:
      "Verifica e sostituzione di schede, ventilatori, sonde, compressori e telecomandi."
  },
  {
    id: "canalizzati-multisplit",
    image: "https://gimli.freetls.fastly.net/tavolla/fs-n/product/217379/850x850/daikin-multi-sistema-per-raffrescamento-riscaldamento-e-acqua-calda-sanitaria-con-serbatoio-da-120-l.jpg",
    imageAlt: "Bocchetta di impianto canalizzato",
    eyebrow: "Impianti",
    title: "Canalizzati & multi‑split.",
    body:
      "Progettazione, posa e bilanciamento per uffici, negozi e abitazioni con più ambienti."
  },
  {
    id: "post-installazione",
    image: "https://www.climagroup.info/wp-content/webp-express/webp-images/uploads/2025/08/asssistenza-climatizzatori.jpg.webp",
    imageAlt: "Tecnico che collauda l'impianto",
    eyebrow: "Post‑installazione",
    title: "Collaudo & assistenza.",
    body:
      "Verifica funzionale, taratura e assistenza post‑montaggio su impianti nuovi o esistenti."
  },
  {
    id: "progettazione-impianto",
    image: "https://baldina.it/wp-content/uploads/Utilizzo-del-climatizzatore-alcuni-luoghi-comuni-da-sfatare.jpg",
    imageAlt: "Planimetria con progetto impianto clima",
    eyebrow: "Progettazione",
    title: "Sopralluogo & progetto.",
    body:
      "Rilievo in loco e consulenza sulla soluzione più efficiente per resa, silenziosità e consumi."
  },
  {
    id: "manutenzione-programmata",
    image: "https://vivienergia.imgix.net/uploads/2024/10/30094831/Manutenzione-condizionatore.jpg?width=930&auto=format",
    imageAlt: "Tecnico compila la scheda manutenzione",
    eyebrow: "Programmi",
    title: "Manutenzione programmata.",
    body:
      "Piani stagionali per evitare guasti, mantenere l’efficienza e allungare la vita dell’impianto."
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

export default function AssistanceGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const PEEK = 16; // lascia un piccolo margine a sinistra
  const scrollToIndex = (idx: number) => {
    const scroller = scrollRef.current; if (!scroller) return;
    const cards = Array.from(scroller.querySelectorAll<HTMLElement>(".ag-card"));
    if (!cards.length) return;
    const clamped = Math.max(0, Math.min(idx, cards.length - 1));
    const left = Math.max(0, cards[clamped].offsetLeft - PEEK);
    scroller.scrollTo({ left, behavior: "smooth" });
    setActive(clamped);
  };

  useEffect(() => { scrollToIndex(0); }, []);

  return (
    <section className="ag-section" aria-label="Assistenza impianti">
      <div className="ag-container">
        <header className="ag-head">
          <h2 className="ag-h2">Servizi Climatizzatori.</h2>
          <p className="ag-sub">
            Riparazioni, sanificazione, ricarica gas e installazioni. Tecnici certificati F‑GAS in tutta Roma e provincia.
          </p>
        </header>

        <div
          className="ag-grid"
          ref={scrollRef}
          onScroll={() => {
            const scroller = scrollRef.current; if (!scroller) return;
            const cards = Array.from(scroller.querySelectorAll<HTMLElement>(".ag-card"));
            if (!cards.length) return;
            const sl = scroller.scrollLeft;
            let nearest = 0; let best = Infinity;
            for (let i = 0; i < cards.length; i++) {
              const d = Math.abs(cards[i].offsetLeft - sl);
              if (d < best) { best = d; nearest = i; }
            }
            setActive(nearest);
          }}
        >
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