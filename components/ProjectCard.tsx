import Image from "next/image";
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  href: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  href,
  image,
}: ProjectCardProps) {
  return (
    <a
  href={href}
  className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-colors hover:border-blue-500"
>
  <div className="flex-1 p-6">
    <h3 className="text-xl font-semibold text-white">
      {title}
    </h3>

    <p className="mt-3 text-slate-400">
      {description}
    </p>

    <div className="mt-4 flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300"
        >
          {technology}
        </span>
      ))}
    </div>

    <p className="mt-5 text-sm font-medium text-blue-500">
      View Project →
    </p>
  </div>

  <div className="relative h-48 w-full">
    <Image
      src={image}
      alt={`${title} screenshot`}
      fill
      className="object-cover"
    />
  </div>
</a>
  );
}