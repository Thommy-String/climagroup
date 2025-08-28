import { FaUserShield, FaTruck, FaTools, FaBuilding, FaTag } from "react-icons/fa";
import "./Benefits.css";

const BENEFITS = [
  {
    id: "certificati",
    icon: <FaUserShield />,
    title: "Tecnici certificati",
  },
  {
    id: "rapidi",
    icon: <FaTruck />,
    title: "Interventi rapidi",
  },
  {
    id: "ricambi",
    icon: <FaTools />,
    title: "Ricambi originali",
  },
  
];

export default function Benefits() {
  return (
    <section className="benefits" aria-label="Perché scegliere ClimaGroup">
      <div className="benefits__container">
        {BENEFITS.map((b) => (
          <div key={b.id} className="benefits__card">
            <div className="benefits__icon">{b.icon}</div>
            <h3 className="benefits__title">{b.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}