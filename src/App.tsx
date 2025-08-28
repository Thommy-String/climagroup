import Hero from "./Components/Hero";
import Header from "./Components/Header"
import "./App.css";
import ServicesAssistance from "./Components/ServicesAssistance";
import ServicesAssistanceCaldaie from "./Components/ServicesAssistanceCaldaie";
import Footer from "./Components/Footer";
import StorePromo from "./Components/StorePromo";
import Brands from "./Components/Brands";
import Benefits from "./Components/Benefits";
import ProntiInterventi from "./Components/ProntiInterventi";

function App() {
  return (
    <>
    <Header />
      <Hero/>
      <Benefits></Benefits>
      <Brands></Brands>
      <ProntiInterventi></ProntiInterventi>
      <StorePromo></StorePromo>
      <ServicesAssistanceCaldaie></ServicesAssistanceCaldaie>
      <ServicesAssistance ></ServicesAssistance>
      <Footer></Footer>
    </>
  );
}

export default App;