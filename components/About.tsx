export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-10 pt-8 pb-18"
    >
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold text-white">
          About Me
        </h2>

        <p className="mt-6 max-w-3xl leading-relaxed text-slate-400">
          I am a Computer Science student specializing in Software
          Engineering at BINUS University. I am interested in
          full-stack web development and enjoy learning how
          applications are designed, developed, and maintained.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-white">
          Technical Skills
        </h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-slate-400">
          Programming Languages: C, C++, Java, Javascript, Typescript, SQL, Python, Dart, Kotlin
        </p>
        <p className="mt-2 max-w-3xl leading-relaxed text-slate-400">
          Frameworks: React, Next.js, Node.js, Express.js, NestJS, Flutter, Prisma, Tailwind CSS
        </p>
        <p className="mt-2 max-w-3xl leading-relaxed text-slate-400">
          Database/Infrastructure: PostgreSQL, MySQL, MariaDB, Firebase, RabbitMQ, MinIO
        </p>
        <p className="mt-2 max-w-3xl leading-relaxed text-slate-400">
          Tools: Git, GitHub, Docker, Swagger/OpenAPI 
        </p>
      </div>
    </section>
  );
}