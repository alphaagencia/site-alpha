import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { WHATSAPP_URL } from "../lib/site";
import TriangleBackground from "./visual/TriangleBackground";
import mockupHero from "../assets/mockup-hero.webp";

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
      {/* Camada de triângulos de fundo */}
      <TriangleBackground variant="hero" className="z-0" />

      {/* Mockup — notebook + smartphone + cards, lado direito (desktop) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
        className="pointer-events-none absolute top-[56%] right-[2%] z-[5] hidden w-[min(44vw,860px)] -translate-y-1/2 select-none xl:block"
      >
        {/* Glow dourado sutil atrás do mockup */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 scale-110 bg-[radial-gradient(circle,rgba(200,164,93,0.10)_0%,rgba(200,164,93,0.03)_35%,transparent_70%)] blur-2xl"
        />
        <img
          src={mockupHero}
          alt="Mockup responsivo de site institucional e landing page da Alpha Agência Digital"
          width="1448"
          height="1086"
          loading="eager"
          fetchPriority="high"
          className="h-auto w-full [filter:drop-shadow(0_28px_50px_rgba(0,0,0,0.45))]"
        />
      </motion.div>

      {/* Vinheta para foco no texto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_30%,transparent_40%,rgba(5,5,5,0.85)_100%)]"
      />

      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
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
          Criamos sites institucionais e landing pages que ajudam empresas
          locais a transmitir mais confiança, reduzir dúvidas e conduzir
          visitantes para conversas pelo WhatsApp.
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

        {/* Mockup — mobile/tablet (abaixo da copy) */}
        <motion.div variants={rise} className="mt-14 xl:hidden">
          <img
            src={mockupHero}
            alt="Mockup responsivo de site institucional e landing page da Alpha Agência Digital"
            width="1448"
            height="1086"
            loading="eager"
            className="pointer-events-none mx-auto h-auto w-full max-w-[680px] select-none [filter:drop-shadow(0_24px_44px_rgba(0,0,0,0.5))]"
          />
        </motion.div>
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
