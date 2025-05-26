import { EXPERIENCES, SKILLS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

interface ResumeSectionProps {
  className?: string;
  titleClassName?: string;
  experienceClassName?: string;
  experienceItemClassName?: string;
  skillsClassName?: string;
  skillItemClassName?: string;
  separatorClassName?: string;
}

export function ResumeSection({
  className = "",
  titleClassName = "text-2xl font-bold",
  experienceClassName = "mt-6",
  experienceItemClassName = "mb-6",
  skillsClassName = "mt-8",
  skillItemClassName = "px-3 py-1 rounded-full text-sm",
  separatorClassName = "my-4",
}: ResumeSectionProps) {
  return (
    <section id="resume" className={className}>
      <h2 className={titleClassName}>Resume</h2>
      <Separator className={separatorClassName} />
      
      <div className={experienceClassName}>
        <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
        
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className={experienceItemClassName}>
            <div className="flex justify-between items-start">
              <h4 className="font-semibold">{exp.title}</h4>
              <span className="text-sm text-muted-foreground">{exp.duration}</span>
            </div>
            <p className="text-sm text-muted-foreground">{exp.company}</p>
            <p className="mt-2 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
      
      <div className={skillsClassName}>
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((tech) => (
            <span key={tech.id} className={skillItemClassName}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}