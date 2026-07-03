export default function BrowserMockup({ src, alt, children, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[#C8A45D]/30 bg-[#101010] shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-[#C8A45D]/20 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#D8D8D8]/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#D8D8D8]/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#D8D8D8]/20" />
        <span className="ml-3 h-4 flex-1 rounded bg-[#D8D8D8]/[0.06]" />
      </div>
      {src ? (
        <img src={src} alt={alt} className="w-full" />
      ) : children ? (
        <div className="p-6">{children}</div>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-[#101010] to-[#0a0a0a] text-sm text-[#D8D8D8]/40">
          Screenshot do projeto
        </div>
      )}
    </div>
  );
}
