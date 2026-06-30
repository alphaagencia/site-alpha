// Marca Alpha — triângulos aninhados (detalhe da identidade).
// Usada no nav e no rodapé. Tamanho controlado por className/props.
export default function AlphaMark({ className = "", title = "Alpha" }) {
  return (
    <svg
      viewBox="0 0 32 28"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* triângulo externo */}
      <path
        d="M16 2 L30 26 L2 26 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* triângulo interno */}
      <path
        d="M16 11 L23.2 26 L8.8 26 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}
