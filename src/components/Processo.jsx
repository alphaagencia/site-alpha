import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const EASE = [0.22, 1, 0.36, 1];

const ETAPAS = [
  {
    n: "01",
    nome: "Diagnóstico",
    desc: "Entendimento do negócio, do público e do momento comercial.",
  },
  {
    n: "02",
    nome: "Estratégia",
    desc: "Definição da estrutura, copy e jornada do visitante.",
  },
  {
    n: "03",
    nome: "Construção",
    desc: "Criação do site/landing com design responsivo e foco em conversão.",
  },
  {
    n: "04",
    nome: "Entrega",
    desc: "Publicação, testes e orientação para uso.",
  },
];

export default function Processo() {
  const reduce = useReducedMotion();

  return (
    <section
      id="processo"
      className="border-t border-linha bg-preto py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        {/* Eyebrow + título */}
        <Reveal
          as="div"
          className="mb-10 flex items-center gap-3 text-[12px] tracking-[0.22em] text-texto-medio uppercase"
        >
          <span className="h-px w-8 bg-dourado" />
          O Processo
        </Reveal>

        <Reveal
          as="h2"
          delay={0.05}
          className="mb-16 max-w-[16ch] font-display font-semibold text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em] text-offwhite md:mb-24"
        >
          Diagnóstico antes do layout.
        </Reveal>

        {/* Sequência — conector em fluxo, com nós luminosos */}
        <div className="md:pl-2">
          {ETAPAS.map((e, i) => {
            const last = i === ETAPAS.length - 1;
            return (
              <Reveal
                as="div"
                key={e.n}
                delay={i * 0.08}
                className="flex gap-6 md:gap-10"
              >
                {/* Número (nó) + conector */}
                <div className="flex w-12 shrink-0 flex-col items-center md:w-16">
                  <Node n={e.n} highlight={last} reduce={reduce} />
                  {!last && <Connector dir={i % 2 === 0} reduce={reduce} />}
                </div>

                {/* Conteúdo */}
                <div className={last ? "pb-0" : "pb-14 md:pb-20"}>
                  <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-offwhite">
                    {e.nome}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[clamp(0.98rem,1.2vw,1.1rem)] leading-[1.7] text-texto-medio">
                    {e.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Nó luminoso: número dourado sobre um halo. O destino (último) pulsa. */
function Node({ n, highlight, reduce }) {
  return (
    <span className="relative flex h-10 items-center justify-center md:h-12">
      {/* halo */}
      <span
        aria-hidden="true"
        className={`absolute h-12 w-12 rounded-full blur-md md:h-14 md:w-14 ${
          highlight ? "bg-dourado/30" : "bg-dourado/12"
        }`}
      />
      {/* anel pulsante no destino */}
      {highlight && !reduce && (
        <motion.span
          aria-hidden="true"
          className="absolute h-7 w-7 rounded-full border border-dourado/50 md:h-8 md:w-8"
          initial={{ opacity: 0.6, scale: 0.7 }}
          animate={{ opacity: [0.6, 0, 0.6], scale: [0.7, 1.6, 0.7] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <span className="relative z-10 font-display text-[clamp(1.5rem,3vw,2.4rem)] font-semibold leading-none text-dourado tabular-nums">
        {n}
      </span>
    </span>
  );
}

/* Conector em curva suave (S alternado), traço fino com glow que se desenha no scroll. */
function Connector({ dir, reduce }) {
  const d = dir
    ? "M20 2 C 4 34, 36 66, 20 98"
    : "M20 2 C 36 34, 4 66, 20 98";

  return (
    <svg
      aria-hidden="true"
      className="my-2 w-10 flex-1 overflow-visible"
      viewBox="0 0 40 100"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* linha de profundidade, bem fraca */}
      <path
        d={d}
        transform="translate(4 0)"
        stroke="#C8A45D"
        strokeOpacity="0.08"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* traço principal, desenha no scroll */}
      <motion.path
        d={d}
        stroke="#C8A45D"
        strokeWidth="1.4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ filter: "drop-shadow(0 0 2.5px rgba(200,164,93,0.55))" }}
        initial={reduce ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0.85 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.1, ease: EASE }}
      />
    </svg>
  );
}
