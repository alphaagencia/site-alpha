import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Solucao from "./components/Solucao";
import Servicos from "./components/Servicos";
import Processo from "./components/Processo";
import Diferenciais from "./components/Diferenciais";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problema />
        <Solucao />
        <Servicos />
        <Processo />
        <Diferenciais />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}

export default App;
