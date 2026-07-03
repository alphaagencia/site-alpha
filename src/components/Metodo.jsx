import {
  ClipboardList,
  PenTool,
  Smartphone,
  AlignLeft,
  MessageCircle,
  LineChart,
} from "lucide-react";
import Reveal from "./Reveal";

const ITENS = [
  {
    icon: ClipboardList,
    titulo: "Diagnóstico antes da criação",
    desc: "Entendemos o negócio, o público e o objetivo antes de definir a estrutura.",
  },
  {
    icon: PenTool,
    titulo: "Projeto sob medida",
    desc: "Cada página é construída para a realidade do cliente, não adaptada de um modelo pronto.",
  },
  {
    icon: Smartphone,
    titulo: "Mobile first",
    desc: "A experiência no celular é prioridade, porque grande parte dos contatos acontece pelo WhatsApp.",
  },
  {
    icon: AlignLeft,
    titulo: "Copy com clareza comercial",
    desc: "Organizamos as informações para facilitar entendimento, confiança e decisão.",
  },
  {
    icon: MessageCircle,
    titulo: "WhatsApp integrado",
    desc: "O contato aparece nos momentos certos, com uma mensagem inicial mais preparada.",
  },
  {
    icon: LineChart,
    titulo: "SEO básico",
    desc: "A estrutura já nasce com cuidados de título, descrição e organização para o Google.",
  },
];

export default function Metodo() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden border-t border-linha bg-preto py-28 md:py-40"
    >
      {/* grid quase invisível */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(200,164,93,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(200,164,93,0.5)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <Reveal
          as="div"
          className="mb-10 flex items-center gap-3 text-[12px] tracking-[0.22em] text-texto-medio uppercase"
        >
          <span className="h-px w-8 bg-dourado" />
          Nossa forma de trabalhar
        </Reveal>

        <Reveal
          as="h2"
          delay={0.05}
          className="mb-16 max-w-[18ch] font-display font-semibold text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em] text-offwhite md:mb-20"
        >
          Por que a Alpha não começa{" "}
          <span className="text-dourado">pelo layout.</span>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {ITENS.map(({ icon: Icon, titulo, desc }, i) => (
            <Reveal as="div" key={titulo} delay={(i % 3) * 0.06} className="group">
              <Icon
                size={28}
                strokeWidth={1.4}
                className="text-dourado transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <h3 className="mt-5 font-display text-[1.2rem] font-semibold leading-snug tracking-[-0.01em] text-offwhite">
                {titulo}
              </h3>
              <p className="mt-3 max-w-[36ch] text-[0.98rem] leading-[1.65] text-texto-medio">
                {desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
