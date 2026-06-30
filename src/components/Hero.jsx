import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { WHATSAPP_URL } from "../lib/site";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  // Reveal sequencial sutil no load.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.15 },
    },
  };
  const rise = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Elemento de assinatura: triângulo Alpha + halo, lado direito */}
      <AmbientMark reduce={reduce} />

      {/* Vinheta para foco no texto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_30%,transparent_40%,rgba(5,5,5,0.85)_100%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pt-32 pb-20 md:px-10 md:pt-28"
      >
        {/* Eyebrow / meta */}
        <motion.div
          variants={rise}
          className="mb-8 flex items-center gap-3 text-[12px] tracking-[0.22em] text-texto-medio uppercase"
        >
          <span className="h-px w-8 bg-dourado" />
          Agência Digital
        </motion.div>

        {/* Headline — assinatura tipográfica */}
        <h1 className="max-w-[16ch] font-display font-semibold text-[clamp(2.5rem,8vw,5rem)] leading-[1.04] tracking-[-0.03em]">
          <motion.span variants={rise} className="block text-offwhite">
            Seu negócio é bom.
          </motion.span>
          <motion.span variants={rise} className="block text-offwhite">
            Sua presença digital
          </motion.span>
          <motion.span variants={rise} className="block">
            <span className="underline-dourado text-dourado">mostra isso</span>
            <span className="text-dourado">?</span>
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          variants={rise}
          className="mt-8 max-w-[52ch] text-[clamp(1rem,1.4vw,1.18rem)] leading-[1.7] text-texto-claro"
        >
          A Alpha cria sites institucionais e landing pages para negócios
          locais que precisam transmitir mais confiança e conduzir clientes
          interessados direto para o WhatsApp.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={rise}
          className="mt-11 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir análise pelo WhatsApp"
            className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 bg-dourado px-7 py-4 font-medium tracking-[0.01em] text-preto transition-all duration-300 hover:bg-champagne"
          >
            Pedir análise pelo WhatsApp
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="#processo"
            className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 px-2 py-4 font-medium tracking-[0.01em] text-texto-claro transition-colors duration-300 hover:text-offwhite sm:min-h-0"
          >
            Conhecer o processo
            <span className="h-px w-6 bg-texto-medio transition-all duration-300 group-hover:w-9 group-hover:bg-dourado" />
          </a>
        </motion.div>

        {/* Prova rápida — linha discreta de confiança */}
        <motion.p
          variants={rise}
          className="mt-8 text-[13px] leading-relaxed tracking-[0.02em] text-texto-medio"
        >
          Sites profissionais
          <span className="mx-2 text-dourado/70" aria-hidden="true">
            •
          </span>
          Landing pages
          <span className="mx-2 text-dourado/70" aria-hidden="true">
            •
          </span>
          WhatsApp estratégico
        </motion.p>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#problema"
        aria-label="Rolar para o conteúdo"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-texto-medio md:block"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}

/* Triângulos aninhados da marca + halo dourado ambiente */
function AmbientMark({ reduce }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
      className="pointer-events-none absolute top-1/2 right-[-12%] z-0 w-[80vw] max-w-[760px] -translate-y-1/2 md:right-[-4%] md:w-[55vw] lg:right-[2%]"
    >
      <motion.div
        animate={reduce ? {} : { y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 md:opacity-100"
      >
        <svg viewBox="0 0 600 540" className="w-full" fill="none">
          <defs>
            <radialGradient id="halo" cx="50%" cy="55%" r="50%">
              <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.16" />
              <stop offset="55%" stopColor="#C8A45D" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#C8A45D" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* halo */}
          <circle cx="300" cy="300" r="290" fill="url(#halo)" />
          {/* triângulos aninhados */}
          <path d="M300 40 L560 500 L40 500 Z" stroke="#C8A45D" strokeOpacity="0.32" strokeWidth="1" strokeLinejoin="round" />
          <path d="M300 130 L470 500 L130 500 Z" stroke="#C8A45D" strokeOpacity="0.22" strokeWidth="1" strokeLinejoin="round" />
          <path d="M300 220 L385 500 L215 500 Z" stroke="#C8A45D" strokeOpacity="0.5" strokeWidth="1.25" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
