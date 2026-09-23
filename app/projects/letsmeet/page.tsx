import Link from "next/link";

export default function LetsMeetPage() {
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
            Full-Stack Web Application
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
            LetsMeet
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
            A platform designed to help organizations manage events,
            partnerships, and collaboration.
          </p>
        </div>

       
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-800">
          <img
            src="/letsmeet.png"
            alt="LetsMeet project screenshot"
            className="w-full object-cover"
          />
        </div>
        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Overview
          </h2>

          <p className="mt-4 leading-relaxed text-slate-400">
            LetsMeet is a web application developed to support
            collaboration between organizations and corporations.
            The platform includes functionality for events,
            partnerships, profiles, and organization matching.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            My Contribution
          </h2>

          <p className="mt-4 leading-relaxed text-slate-400">
            I was responsible for developing the Dashboard interface.
            My work focused on creating a clear and organized user
            interface for displaying relevant information from the backend.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Why This Project?
          </h2>

          <p className="mt-4 leading-relaxed text-slate-400">
            This project gave me the opportunity to gain experience
            working with modern web development technologies and
            understand how frontend interfaces connect with backend
            services.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Technologies
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Prisma",
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
            Through this project, I gained experience working with
            React and TypeScript while learning how to structure
            frontend components and how to integrate gemini AI into an application.
          </p>
        </section>

        <div className="mt-16 flex gap-4">
          <a
            href="https://github.com/jeremzhg/LetsMeet/tree/master"
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