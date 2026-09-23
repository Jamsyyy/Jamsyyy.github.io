import Link from "next/link";

export default function harvest2dayPage() {
  return (
    <main className="min-h-screen bg-black px-10 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="text-sm text-blue-500 hover:text-blue-400"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
            WebApp with a python backend
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
            Harvest2Day
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
            Harvesting Prediction App
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-slate-800">
          <img
            src="/harvest2day.png"
            alt="harvest2day project screenshot"
            className="w-full object-cover"
          />
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Overview
          </h2>

          <p className="mt-4 leading-relaxed text-slate-400">
            Harvest2Day is a harvesting prediction app using machine learning methodology
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            My Contribution
          </h2>

          <p className="mt-4 leading-relaxed text-slate-400">
            I was responsible for both the frontend and the python machine learning backend.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Why This Project?
          </h2>

          <p className="mt-4 leading-relaxed text-slate-400">
            This project gave me the opportunity to learn about Python, FastAPI, and how API connects the backend to the frontend
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Technologies
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Python",
              "FastAPI",
              "HTML",
              "CSS",
              "JavaScript",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-slate-800 px-3 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            What I Learned
          </h2>

          <p className="mt-4 leading-relaxed text-slate-400">
            Python, FastAPI, pure HTML, CSS, and JavaScript
          </p>
        </section>

        <div className="mt-16 flex gap-4">
          <a
            href="https://github.com/Jamsyyy/AIAOL"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-500"
          >
            GitHub Repository
          </a>

          <Link
            href="/#projects"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium hover:bg-slate-800"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}