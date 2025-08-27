import Hero from "./Components/Hero";
import Header from "./Components/Header"
import "./App.css";
import ServicesAssistance from "./Components/ServicesAssistance";
import ServicesAssistanceCaldaie from "./Components/ServicesAssistanceCaldaie";
import Footer from "./Components/Footer";
import StorePromo from "./Components/StorePromo";

function App() {
  return (
    <>
    <Header />
      <Hero/>
      <StorePromo></StorePromo>
      <ServicesAssistanceCaldaie></ServicesAssistanceCaldaie>
      <ServicesAssistance ></ServicesAssistance>
      <Footer></Footer>
    </>
  );
}

export default App;