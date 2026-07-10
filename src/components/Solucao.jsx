import Reveal from "./Reveal";
import BrowserMockup from "./visual/BrowserMockup";
import solMockup from "../assets/sol-mockup.jpg";
import solSite from "../assets/sol-site.jpg";
import solLanding from "../assets/sol-landing.jpg";
import solWhats from "../assets/sol-whats.jpg";

const CARDS = [
  { label: "Site institucional", img: solSite },
  { label: "Landing page", img: solLanding },
  { label: "WhatsApp estratégico", img: solWhats },
];

export default function Solucao() {
  return (
    <section
      id="solucao"
      className="relative overflow-hidden bg-offwhite py-28 text-preto md:py-40"
    >
      {/* Marca d'água sutil — triângulo Alpha */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-24 w-[340px] text-preto/[0.04] md:w-[460px]"
      >
        <svg viewBox="0 0 600 540" className="w-full" fill="none">
          <path d="M300 40 L560 500 L40 500 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M300 220 L385 500 L215 500 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10">
        {/* Título + parágrafo */}
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-7">
            <Reveal
              as="div"
              className="mb-10 flex items-center gap-3 text-[12px] tracking-[0.22em] text-preto/55 uppercase md:mb-14"
            >
              <span className="h-px w-8 bg-dourado" />
              A Solução
            </Reveal>
            <Reveal
              as="h2"
              delay={0.05}
              className="max-w-[20ch] font-display font-semibold text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em] text-preto"
            >
              <span className="text-preto/45">A Alpha</span> organiza a presença
              digital <span className="text-preto/45">de negócios locais.</span>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-2">
            <Reveal
              as="p"
              delay={0.12}
              className="text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.75] text-preto/70"
            >
              Criamos sites institucionais, landing pages e estruturas digitais
              conectadas ao WhatsApp.{" "}
              <span className="font-medium text-preto">
                Cada projeto começa com diagnóstico — não com template.
              </span>{" "}
              Cada página é construída para a realidade específica do seu
              negócio.
            </Reveal>
          </div>
        </div>

        {/* Mockup de prova de trabalho */}
        <Reveal className="mx-auto mt-16 max-w-[860px] md:mt-24">
          <BrowserMockup src={solMockup} alt="Projeto Alpha — mockup de site" />
        </Reveal>

        {/* Trio: site · landing · WhatsApp */}
        <div className="mt-16 md:mt-24">
          <Reveal
            as="div"
            className="mb-8 flex items-center gap-3 text-[11px] tracking-[0.22em] text-preto/45 uppercase"
          >
            <span className="h-px w-6 bg-dourado/70" />
            Diagnóstico · Estratégia · Estrutura
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {CARDS.map(({ label, img }, i) => (
              <Reveal
                as="div"
                key={label}
                delay={i * 0.08}
                className="group overflow-hidden rounded-lg border border-preto/10 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(5,5,5,0.35)]"
              >
                <img
                  src={img}
                  alt={label}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex items-center gap-2.5 border-t border-preto/10 px-5 py-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-dourado" />
                  <span className="text-[12px] font-medium tracking-[0.14em] text-preto/70 uppercase">
                    {label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
