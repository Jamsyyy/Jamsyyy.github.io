export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-10 pt-6 pb-24">
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold text-white">
          Get In Touch
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Interested in connecting or discussing opportunities?
          Feel free to reach out through my social platforms.
        </p>

        <div className="mt-8 flex justify-start gap-2">
          <a
            href="https://www.linkedin.com/in/oliver-wiryateja-herlianto-967185326/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-500"
          >
            LinkedIn
          </a>
        <div/>
          <a
            href="https://github.com/Jamsyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}