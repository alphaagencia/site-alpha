import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../lib/utils";

const WA_BASE = "https://wa.me/5548999923506?text=";

const SERVICOS = [
  {
    kicker: "Site institucional",
    nome: "Alpha Presença Local",
    desc: "Site institucional compacto para negócios que precisam se apresentar melhor, organizar seus serviços e facilitar o contato pelo WhatsApp.",
    msg: "Olá! Tenho interesse no Alpha Presença Local (site institucional).",
  },
  {
    kicker: "Landing page",
    nome: "Alpha Conversão",
    desc: "Landing page estratégica para apresentar uma oferta específica, reduzir dúvidas e conduzir o visitante para uma ação.",
    msg: "Olá! Tenho interesse no Alpha Conversão (landing page).",
  },
  {
    kicker: "Estrutura completa",
    nome: "Alpha Estrutura Premium",
    desc: "Site institucional + landing page + WhatsApp + SEO local básico + rastreamento inicial para empresas que precisam de uma estrutura mais completa.",
    msg: "Olá! Tenho interesse no Alpha Estrutura Premium (estrutura completa).",
    destaque: true,
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="border-t border-linha bg-offwhite py-28 text-preto md:py-40"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
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
          className="mt-6 mb-14 max-w-[58ch] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-preto/60 md:mb-20"
        >
          Do site institucional à estrutura completa, cada pacote foi pensado
          para apresentar melhor sua empresa, transmitir mais confiança e
          facilitar o contato pelo WhatsApp.
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICOS.map((s, i) => (
            <Reveal
              as="a"
              key={s.nome}
              delay={i * 0.08}
              href={WA_BASE + encodeURIComponent(s.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative flex flex-col rounded-lg border p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 md:p-9",
                s.destaque
                  ? "border-dourado/50 bg-white shadow-[0_20px_50px_-30px_rgba(200,164,93,0.5)] hover:shadow-[0_28px_60px_-28px_rgba(200,164,93,0.6)]"
                  : "border-preto/10 bg-white hover:border-preto/20 hover:shadow-[0_24px_48px_-30px_rgba(5,5,5,0.35)]",
              )}
            >
              {s.destaque && (
                <span className="absolute -top-3 left-8 rounded-full border border-dourado/50 bg-offwhite px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-dourado uppercase">
                  Mais completo
                </span>
              )}

              <span className="text-[12px] tracking-[0.2em] text-preto/50 uppercase">
                {s.kicker}
              </span>
              <h3 className="mt-3 font-display text-[clamp(1.4rem,2vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-preto">
                {s.nome}
              </h3>
              <p className="mt-4 flex-1 text-[0.98rem] leading-[1.65] text-preto/60">
                {s.desc}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.02em] text-preto transition-colors duration-300 group-hover:text-dourado">
                Falar sobre este pacote
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
