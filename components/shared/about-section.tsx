import { Separator } from "@/components/ui/separator";

interface AboutSectionProps {
  className?: string;
  titleClassName?: string;
  textClassName?: string;
  separatorClassName?: string;
}

export function AboutSection({
  className = "",
  titleClassName = "text-2xl font-bold",
  textClassName = "mt-4",
  separatorClassName = "my-4",
}: AboutSectionProps) {
  return (
    <section id="about" className={className}>
      <h2 className={titleClassName}>About Me</h2>
      <Separator className={separatorClassName} />
      <div className={textClassName}>
        <h3 className="text-xl font-semibold mb-2">Mohammed HAJI</h3>
        <p className="text-muted-foreground mb-4">A passionate Software Engineer from Morocco</p>
        
        <p className="mb-4">
          I&apos;m a Software Engineering and Computer Systems Integration student with a strong foundation in software engineering.
        </p>
        
        <p>
          I&apos;m passionate about innovation and love exploring blockchain and artificial intelligence. Join me in creating exceptional software experiences and embracing the potential of technology.
        </p>
      </div>
    </section>
  );
}