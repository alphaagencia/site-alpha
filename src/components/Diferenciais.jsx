import { Check } from "lucide-react";
import Reveal from "./Reveal";

// main = afirmação (off-white) · tail = contraste/detalhe (apagado)
const ITENS = [
  {
    main: "Cada projeto começa com diagnóstico específico,",
    tail: " não com template.",
  },
  {
    main: "Copy estratégica",
    tail: " baseada na realidade do seu negócio.",
  },
  {
    main: "Design focado em conversão,",
    tail: " não só em estética.",
  },
  {
    main: "Estrutura conectada ao WhatsApp",
    tail: " para captação imediata.",
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="border-t border-linha bg-preto py-28 md:py-40"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-y-14 px-6 md:grid-cols-12 md:gap-x-10 md:px-10">
        {/* Coluna esquerda — eyebrow + título */}
        <div className="md:col-span-4">
          <Reveal
            as="div"
            className="mb-10 flex items-center gap-3 text-[12px] tracking-[0.22em] text-texto-medio uppercase md:mb-12"
          >
            <span className="h-px w-8 bg-dourado" />
            Diferenciais
          </Reveal>

          <Reveal
            as="h2"
            delay={0.05}
            className="font-display font-semibold text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em] text-offwhite"
          >
            Por que a Alpha?
          </Reveal>
        </div>

        {/* Coluna direita — lista editorial */}
        <ul className="md:col-span-7 md:col-start-6">
          {ITENS.map((item, i) => (
            <Reveal
              as="li"
              key={item.main}
              delay={i * 0.07}
              className="flex items-start gap-3 py-5 first:pt-0 last:pb-0 md:gap-4 md:py-6"
            >
              <Check
                size={26}
                strokeWidth={1.6}
                aria-hidden="true"
                className="mt-[0.35em] shrink-0 text-dourado"
              />
              <p className="font-display text-[clamp(1.25rem,2.1vw,1.7rem)] font-medium leading-[1.3] tracking-[-0.01em] text-offwhite">
                {item.main}
                <span className="text-texto-medio">{item.tail}</span>
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
