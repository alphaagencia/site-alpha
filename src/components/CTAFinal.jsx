import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "../lib/site";
import TriangleBackground from "./visual/TriangleBackground";

const EASE = [0.22, 1, 0.36, 1];

export default function CTAFinal() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-linha bg-preto py-32 md:py-48"
    >
      {/* Triângulo Alpha + halo — bookend do hero, centralizado */}
      <AmbientMark reduce={reduce} />
      <TriangleBackground variant="corner" className="right-0 bottom-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 text-center md:px-10">
        <Reveal
          as="h2"
          className="max-w-[20ch] font-display font-semibold text-[clamp(2rem,5vw,3.9rem)] leading-[1.08] tracking-[-0.02em] text-offwhite"
        >
          Sua empresa merece uma presença digital{" "}
          <span className="underline-dourado text-dourado">
            à altura da qualidade do seu trabalho.
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={0.08}
          className="mt-7 max-w-[52ch] text-[clamp(1.02rem,1.4vw,1.22rem)] leading-[1.65] text-texto-claro"
        >
          Se o seu negócio entrega valor, mas ainda não comunica isso com
          clareza no digital, a Alpha pode ajudar a organizar esse caminho.
        </Reveal>

        <Reveal
          as="div"
          delay={0.16}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir análise pelo WhatsApp"
            className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 bg-dourado px-8 py-4 text-[1.02rem] font-medium tracking-[0.01em] text-preto transition-all duration-300 hover:bg-champagne"
          >
            Pedir análise pelo WhatsApp
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#servicos"
            className="group inline-flex items-center justify-center gap-2 px-3 py-4 text-[1rem] font-medium text-texto-claro transition-colors duration-300 hover:text-offwhite"
          >
            Conhecer os serviços
            <span className="h-px w-6 bg-texto-medio transition-all duration-300 group-hover:w-9 group-hover:bg-dourado" />
          </a>
        </Reveal>

        <Reveal
          as="p"
          delay={0.22}
          className="mt-7 text-[13px] tracking-[0.02em] text-texto-medio"
        >
          Diagnóstico inicial gratuito, sem compromisso.
        </Reveal>
      </div>
    </section>
  );
}

function AmbientMark({ reduce }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.6, ease: EASE }}
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[150vw] max-w-[820px] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={reduce ? {} : { y: [0, -14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 600 540" className="w-full" fill="none">
          <defs>
            <radialGradient id="halo-cta" cx="50%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.14" />
              <stop offset="55%" stopColor="#C8A45D" stopOpacity="0.035" />
              <stop offset="100%" stopColor="#C8A45D" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="290" fill="url(#halo-cta)" />
          <path d="M300 60 L540 480 L60 480 Z" stroke="#C8A45D" strokeOpacity="0.18" strokeWidth="1" strokeLinejoin="round" />
          <path d="M300 200 L420 480 L180 480 Z" stroke="#C8A45D" strokeOpacity="0.28" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
