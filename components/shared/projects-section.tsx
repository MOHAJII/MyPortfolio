import { PROJECTS } from "@/lib/constants";
import { Project } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagsClassName?: string;
}

export function ProjectCard({
  project,
  className = "",
  imageClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagsClassName = "",
}: ProjectCardProps) {
  return (
    <div className={className}>
      <div className={`aspect-video overflow-hidden rounded-lg ${imageClassName}`}>
        <Image
          src={project.image}
          alt={project.title}
          width={480}
          height={270}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className={titleClassName}>{project.title}</h3>
      <p className={descriptionClassName}>{project.description}</p>
      <div className={tagsClassName}>
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ProjectsSectionProps {
  className?: string;
  titleClassName?: string;
  gridClassName?: string;
  separatorClassName?: string;
  renderProject?: (project: Project) => React.ReactNode;
}

export function ProjectsSection({
  className = "",
  titleClassName = "text-2xl font-bold",
  gridClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6",
  separatorClassName = "my-4",
  renderProject,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className={className}>
      <h2 className={titleClassName}>Projects</h2>
      <Separator className={separatorClassName} />
      <div className={gridClassName}>
        {PROJECTS.map((project) =>
          renderProject ? (
            renderProject(project)
          ) : (
            <ProjectCard
              key={project.id}
              project={project}
              className="group"
              titleClassName="font-semibold mt-2"
              descriptionClassName="text-sm text-muted-foreground mt-1"
              tagsClassName="flex flex-wrap gap-2 mt-3"
            />
          )
        )}
      </div>
    </section>
  );
}