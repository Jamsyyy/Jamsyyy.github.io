export default function Me() {
  return (
    <section
      id="home"
      className="flex min-h-[75vh] items-start justify-start px-10 pt-18">
      <div className="max-w-7xl text-left">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-500">
          Computer Science Student from Bina Nusantara University
        </p>

        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Hi, My name is Oliver Wiryateja Herlianto.
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
          Software Engineer
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-justify leading-relaxed text-slate-400">
          Studying Computer Science - Software Engineering track at BINUS University @Alam Sutera. Interested in all things related to technology, 
          passionate in studying full-stack web development, 
          experienced in building academic and personal projects using technologies such as Typescript, Node.js, React, SQL, and Docker. Currently looking to strengthen my software engineering skills and contribute to real world projects.
        </p>

        <div className="mt-8 flex justify-start gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-500"
          >
            View Projects
          </a>

          <a
            href="/personalcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-white transition-colors hover:bg-slate-800"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}