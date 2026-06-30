import { AtSign, MessageCircle, ArrowUp } from "lucide-react";
import AlphaMark from "./AlphaMark";
import { NAV_LINKS, WHATSAPP_URL, INSTAGRAM_URL } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-linha bg-preto">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Marca */}
          <div className="md:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 text-offwhite"
              aria-label="Alpha Agência Digital — voltar ao topo"
            >
              <AlphaMark className="h-6 w-6 text-dourado" />
              <span className="font-display text-[15px] font-semibold tracking-[0.18em]">
                ALPHA
              </span>
            </a>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.7] text-texto-medio">
              Presença digital que gera confiança para negócios locais.
            </p>
          </div>

          {/* Navegação */}
          <nav className="md:col-span-3" aria-label="Rodapé">
            <h2 className="mb-5 text-[11px] tracking-[0.22em] text-texto-medio uppercase">
              Navegação
            </h2>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-texto-claro transition-colors duration-300 hover:text-dourado"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="md:col-span-4">
            <h2 className="mb-5 text-[11px] tracking-[0.22em] text-texto-medio uppercase">
              Contato
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] text-texto-claro transition-colors duration-300 hover:text-dourado"
                >
                  <MessageCircle size={16} strokeWidth={1.6} className="text-dourado" />
                  (48) 99992-3506
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] text-texto-claro transition-colors duration-300 hover:text-dourado"
                >
                  <AtSign size={16} strokeWidth={1.6} className="text-dourado" />
                  @alphaagencia.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-linha pt-7 sm:flex-row sm:items-center md:mt-20">
          <p className="text-[13px] text-texto-medio">
            © 2026 Alpha Agência Digital. Todos os direitos reservados.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[13px] text-texto-medio transition-colors duration-300 hover:text-offwhite"
          >
            Voltar ao topo
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
