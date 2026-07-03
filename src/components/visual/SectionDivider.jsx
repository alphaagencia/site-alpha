export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-12" aria-hidden="true">
      <span className="h-px w-24 bg-[#C8A45D]/60" />
      <svg width="24" height="24" viewBox="0 0 24 24" className="mx-4">
        <polygon points="12,4 20,18 4,18" fill="none" stroke="#C8A45D" strokeWidth="1.2" />
      </svg>
      <span className="h-px w-24 bg-[#C8A45D]/60" />
    </div>
  );
}
