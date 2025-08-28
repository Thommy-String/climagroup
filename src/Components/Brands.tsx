import "./Brands.css";

const BRANDS = [
  { id: "vaillant", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Q3o-JFsSNBp5avmoon2F50iK_0eyRQW01g&s", alt: "Vaillant" },
  { id: "ariston", image: "https://www.airclimastore.com/wp-content/uploads/2023/11/Ariston-Logo.png", alt: "Ariston" },
  { id: "daikin", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/DAIKIN_logo.svg/2560px-DAIKIN_logo.svg.png", alt: "Daikin" },
  { id: "mitsubishi", image: "https://www.climadiqualita.it/img/cms/Loghi%20Fornitori/Logo-Mitstubishi-870x230.jpg", alt: "Mitsubishi Electric" },
  { id: "samsung", image: "https://www.airclimastore.com/wp-content/uploads/2017/06/logo-samsung.png", alt: "Samsung" },
  { id: "lg", image: "https://isolclima.it/wp-content/uploads/2020/09/LG-Logo.jpg", alt: "LG" },
  { id: "baxi", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/BAXI_logo.svg/2560px-BAXI_logo.svg.png", alt: "Baxi" },
  { id: "rinnai", image: "https://images.seeklogo.com/logo-png/11/1/rinnai-logo-png_seeklogo-118619.png", alt: "Rinnai" },
  { id: "clivet", image: "https://www.clivet.com/o/clivet-liferay-nuance-theme/images/clivet/logo-home.png", alt: "Clivet" },
  { id: "fujitsu", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fujitsu-Logo.svg/1200px-Fujitsu-Logo.svg.png", alt: "Fujitsu" },
];

export default function Brands() {
  return (
    <section className="brands">
      <div className="brands__track">
        {[...BRANDS, ...BRANDS].map((brand, i) => (
          <div className="brands__item" key={`${brand.id}-${i}`}>
            <img src={brand.image} alt={brand.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}