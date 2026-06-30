import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const WA_BASE = "https://wa.me/5548999923506?text=";

const SERVICOS = [
  {
    kicker: "Site institucional",
    nome: "Alpha Presença Local",
    desc: "Site institucional compacto para negócios que precisam sair do improviso, apresentar seus serviços com clareza e facilitar o contato pelo WhatsApp.",
    msg: "Olá! Tenho interesse no Alpha Presença Local (site institucional).",
  },
  {
    kicker: "Landing page",
    nome: "Alpha Conversão",
    desc: "Landing page estratégica para apresentar uma oferta específica, reduzir dúvidas do visitante e conduzir para uma ação clara, como uma conversa pelo WhatsApp.",
    msg: "Olá! Tenho interesse no Alpha Conversão (landing page).",
  },
  {
    kicker: "Estrutura completa",
    nome: "Alpha Estrutura Premium",
    desc: "Estrutura digital completa para empresas que querem unir site institucional, landing page, WhatsApp organizado, SEO local e rastreamento básico em uma presença mais profissional.",
    msg: "Olá! Tenho interesse no Alpha Estrutura Premium (estrutura completa).",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="border-t border-linha bg-offwhite py-28 text-preto md:py-40"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        {/* Eyebrow + título */}
        <Reveal
          as="div"
          className="mb-10 flex items-center gap-3 text-[12px] tracking-[0.22em] text-preto/55 uppercase"
        >
          <span className="h-px w-8 bg-dourado" />
          Serviços
        </Reveal>

        <Reveal
          as="h2"
          delay={0.05}
          className="max-w-[20ch] font-display font-semibold text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em] text-preto"
        >
          Três pacotes para estruturar sua presença digital.
        </Reveal>

        <Reveal
          as="p"
          delay={0.1}
          className="mt-6 mb-16 max-w-[58ch] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-preto/60 md:mb-20"
        >
          Do site institucional à estrutura completa, cada pacote foi pensado
          para apresentar melhor sua empresa, transmitir mais confiança e
          facilitar o contato pelo WhatsApp.
        </Reveal>

        {/* Lista editorial — fecha embaixo com filete */}
        <div className="border-b border-preto/10">
          {SERVICOS.map((s, i) => (
            <Reveal as="div" key={s.nome} delay={i * 0.06}>
              <a
                href={WA_BASE + encodeURIComponent(s.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 items-baseline gap-y-4 border-t border-preto/10 py-10 transition-colors duration-300 md:grid-cols-12 md:gap-x-10 md:py-14"
              >
                {/* Esquerda — kicker + nome */}
                <div className="md:col-span-6 lg:col-span-5">
                  <span className="mb-3 block text-[12px] tracking-[0.2em] text-preto/55 uppercase">
                    {s.kicker}
                  </span>
                  <h3 className="flex items-center gap-3 font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-preto transition-transform duration-300 ease-out group-hover:translate-x-1">
                    {s.nome}
                  </h3>
                </div>

                {/* Direita — descrição + seta */}
                <div className="flex items-start justify-between gap-6 md:col-span-6 md:col-start-7 lg:col-start-8 lg:col-span-5">
                  <p className="max-w-[46ch] text-[clamp(0.98rem,1.2vw,1.1rem)] leading-[1.7] text-preto/60 transition-colors duration-300 group-hover:text-preto">
                    {s.desc}
                  </p>
                  <ArrowUpRight
                    size={26}
                    strokeWidth={1.4}
                    className="mt-1 shrink-0 text-preto/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-dourado"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
