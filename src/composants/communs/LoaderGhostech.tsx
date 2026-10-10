export default function LoaderGhostech() {
  const words = ["Ghostech", "Construire", "Impacter", "Conquérir", "Ghostech"];

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-white px-8"
      role="status"
      aria-label="Chargement en cours"
    >
      <div className="rounded-2xl p-4">
        <div className="flex h-15 items-center rounded-lg p-2.5 font-sans text-[25px] font-medium text-black">
          <span>loading</span>
          <div className="relative h-10 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-white via-transparent via-30% to-white to-90%" />
            <div className="animate-loader-words">
              {words.map((word, index) => (
                <span
                  className="block h-10 pl-1.5 font-bold leading-10 text-[#fd800a]"
                  key={`${word}-${index}`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
