import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "../lib/site";

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

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 text-center md:px-10">
        <Reveal
          as="h2"
          className="font-display font-semibold text-[clamp(2.75rem,9vw,6rem)] leading-[1.02] tracking-[-0.03em] text-offwhite"
        >
          Vamos{" "}
          <span className="underline-dourado text-dourado">conversar</span>
          <span className="text-dourado">?</span>
        </Reveal>

        <Reveal
          as="p"
          delay={0.08}
          className="mt-7 max-w-[40ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.6] text-texto-claro"
        >
          Diagnóstico inicial gratuito. Sem compromisso.
        </Reveal>

        <Reveal as="div" delay={0.16} className="mt-11">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-dourado px-8 py-4 text-[1.05rem] font-medium tracking-[0.01em] text-preto transition-all duration-300 hover:bg-champagne"
          >
            Chamar no WhatsApp
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
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
