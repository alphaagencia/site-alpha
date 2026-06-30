import Reveal from "./Reveal";

export default function Problema() {
  return (
    <section
      id="problema"
      className="relative border-t border-linha bg-preto py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        {/* Eyebrow — mesmo sistema do hero */}
        <Reveal
          as="div"
          className="mb-10 flex items-center gap-3 text-[12px] tracking-[0.22em] text-texto-medio uppercase md:mb-14"
        >
          <span className="h-px w-8 bg-dourado" />
          O Problema
        </Reveal>

        {/* Statement — tipografia dominando a seção */}
        <Reveal
          as="h2"
          delay={0.05}
          className="max-w-[18ch] font-display font-semibold text-[clamp(2rem,5.5vw,4rem)] leading-[1.08] tracking-[-0.03em] text-offwhite"
        >
          Antes de chamar,
          <br className="hidden sm:block" /> o cliente{" "}
          <span className="text-dourado">já decidiu.</span>
        </Reveal>

        {/* Parágrafo — coluna estreita, deslocada à direita, com filete dourado */}
        <Reveal
          as="div"
          delay={0.12}
          className="mt-14 flex md:mt-20 md:justify-end"
        >
          <p className="max-w-[58ch] border-l border-linha pl-6 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.75] text-texto-claro md:pl-8">
            Antes de mandar mensagem no WhatsApp, o cliente já formou uma
            percepção sobre o seu negócio. Essa percepção vem do que ele
            encontra online — ou do que não encontra. Quando a presença
            digital não acompanha a qualidade real da empresa, uma parte do
            valor se perde{" "}
            <span className="text-offwhite">antes da primeira conversa.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
