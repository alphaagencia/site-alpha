import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "../lib/site";

const EASE = [0.22, 1, 0.36, 1];

const FAQS = [
  {
    q: "Como sei qual solução é ideal para o meu negócio?",
    a: [
      "A escolha depende do momento da sua empresa. Se você precisa se apresentar melhor e transmitir mais confiança, o site institucional pode ser o caminho ideal. Se deseja divulgar uma oferta, serviço ou campanha específica, a landing page é mais indicada. Para uma estrutura mais completa, com site, landing page, WhatsApp, SEO local básico e rastreamento inicial, recomendamos a Alpha Estrutura Premium.",
    ],
  },
  {
    q: "Qual a diferença entre site institucional e landing page?",
    a: [
      "O site institucional apresenta sua empresa, seus serviços, diferenciais e canais de contato. Ele funciona como uma base oficial de confiança.",
      "A landing page é uma página focada em uma oferta ou ação específica, como solicitar orçamento, agendar uma avaliação ou chamar no WhatsApp.",
    ],
  },
  {
    q: "O que está incluído no desenvolvimento do projeto?",
    a: [
      "Cada projeto inclui diagnóstico inicial, organização das informações, estrutura da página, copy estratégica, direção visual, desenvolvimento responsivo, CTAs para WhatsApp e SEO básico. O escopo exato varia conforme o pacote contratado.",
    ],
  },
  {
    q: "Eu preciso enviar os textos e imagens prontos?",
    a: [
      "Não precisa enviar tudo pronto. A Alpha ajuda a organizar a mensagem, estruturar os textos e transformar as informações do seu negócio em uma apresentação mais clara e profissional. Materiais como logotipo, fotos, cores, referências e informações da empresa ajudam a deixar o projeto mais fiel à sua marca.",
    ],
  },
  {
    q: "Em quanto tempo o projeto fica pronto?",
    a: [
      "O prazo varia conforme o pacote contratado, complexidade do projeto, envio das informações e velocidade de aprovação. Em média, os projetos são entregues entre 10 e 27 dias úteis, seguindo as etapas de briefing, criação, ajustes e entrega final.",
    ],
  },
  {
    q: "O projeto garante mais vendas?",
    a: [
      "Não prometemos vendas garantidas, leads garantidos ou resultados comerciais imediatos. O que a Alpha entrega é uma estrutura digital mais profissional, clara e preparada para apresentar melhor sua empresa, transmitir confiança, reduzir dúvidas e facilitar o contato de potenciais clientes pelo WhatsApp.",
    ],
  },
];

function Item({ faq, index, open, onToggle, reduce }) {
  const isOpen = open === index;
  const triggerId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-dourado/20">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
        >
          <span className="font-display text-[clamp(1.1rem,1.7vw,1.35rem)] font-medium leading-[1.35] tracking-[-0.01em] text-preto">
            {faq.q}
          </span>
          <ChevronDown
            size={22}
            strokeWidth={1.6}
            aria-hidden="true"
            className={`shrink-0 text-dourado transition-transform duration-300 ease-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.38, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="max-w-[64ch] space-y-4 pr-8 pb-7 text-[clamp(0.98rem,1.2vw,1.08rem)] leading-[1.7] text-preto/70">
              {faq.a.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();
  const toggle = (i) => setOpen((cur) => (cur === i ? null : i));

  return (
    <section
      id="faq"
      className="border-t border-linha bg-offwhite py-28 text-preto md:py-40"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-y-12 px-6 md:grid-cols-12 md:gap-x-10 md:px-10">
        {/* Coluna esquerda — eyebrow + título + ajuda */}
        <div className="md:col-span-4">
          <Reveal
            as="div"
            className="mb-10 flex items-center gap-3 text-[12px] tracking-[0.22em] text-preto/55 uppercase md:mb-12"
          >
            <span className="h-px w-8 bg-dourado" />
            Dúvidas
          </Reveal>

          <Reveal
            as="h2"
            delay={0.05}
            className="font-display font-semibold text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] tracking-[-0.02em] text-preto"
          >
            Dúvidas comuns.
          </Reveal>

          <Reveal as="p" delay={0.1} className="mt-6 max-w-[34ch] text-preto/60">
            Não encontrou o que procurava?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-dourado font-medium text-preto transition-colors hover:text-dourado"
            >
              Fale com a gente no WhatsApp.
            </a>
          </Reveal>
        </div>

        {/* Coluna direita — accordion */}
        <Reveal as="div" delay={0.12} className="md:col-span-7 md:col-start-6">
          {FAQS.map((faq, i) => (
            <Item
              key={faq.q}
              faq={faq}
              index={i}
              open={open}
              onToggle={toggle}
              reduce={reduce}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
