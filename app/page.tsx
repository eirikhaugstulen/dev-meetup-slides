export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Developer Meetup
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Build, learn, and share better dev slides.
        </h1>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-slate-300 sm:text-xl">
          Start crafting your presentation inside `app/page.tsx` and grow this
          project into a polished slide deck with the components you need.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-full border border-slate-200/20 bg-slate-200/10 px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-200/20">
            Create a slide
          </button>
          <a
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-slate-50 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            View starter on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
