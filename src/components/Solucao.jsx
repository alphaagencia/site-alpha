import Reveal from "./Reveal";

export default function Solucao() {
  return (
    <section
      id="solucao"
      className="relative overflow-hidden bg-offwhite py-28 text-preto md:py-40"
    >
      {/* Marca d'água sutil — triângulo Alpha, canto inferior direito */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-24 w-[340px] text-preto/[0.04] md:w-[460px]"
      >
        <svg viewBox="0 0 600 540" className="w-full" fill="none">
          <path d="M300 40 L560 500 L40 500 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M300 220 L385 500 L215 500 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-y-12 px-6 md:grid-cols-12 md:gap-x-10 md:px-10">
        {/* Coluna esquerda — eyebrow + título */}
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

        {/* Coluna direita — parágrafo, alinhado ao topo */}
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
    </section>
  );
}
