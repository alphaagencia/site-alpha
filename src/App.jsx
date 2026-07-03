import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Metodo from "./components/Metodo";
import Solucao from "./components/Solucao";
import Servicos from "./components/Servicos";
import Processo from "./components/Processo";
import Diferenciais from "./components/Diferenciais";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import SectionDivider from "./components/visual/SectionDivider";

function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <Problema />
        <SectionDivider />
        <Metodo />
        <Solucao />
        <Servicos />
        <Processo />
        <SectionDivider />
        <Diferenciais />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}

export default App;
