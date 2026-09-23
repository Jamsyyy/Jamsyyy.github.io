import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-10 pt-6 pb-18">
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold text-white">
          Projects
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          A selection of projects I have worked on.
        </p>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
          <ProjectCard
            title="LetsMeet"
            description="A platform for organizations to manage events, partnerships, and collaboration."
            technologies={[
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
            ]}
            href="/projects/letsmeet"
            image="/letsmeet.png"
          />

          <ProjectCard
            title="STROMEN"
            description="Video streaming platform."
            technologies={[
              "Next.js",
              "NestJS",
              "PostgreSQL",
              "RabbitMQ",
              "MinIO",
            ]}
            href="/projects/stromen"
            image="/stromen.png"
          />

            <ProjectCard
            title="Harvest2Day"
            description="Harvesting Prediction AI"
            technologies={[
              "Python",
              "FastAPI",
              "HTML",
              "CSS",
              "JavaScript",
            ]}
            href="/projects/harvest2day"
            image="/harvest2day.png"
          />

          <ProjectCard
            title="Wukwembege"
            description="Wukwembege is a mobile app designed to connect
            event organizers with food stall vendors"
            technologies={[
              "Flutter",
              "Firebase",
              "MySQL",
              "Javascript",
              "Dart",
            ]}
            href="/projects/wukwukembege"
            image="/wukwembege.png"
          />
        </div>
      </div>
    </section>
  );
}