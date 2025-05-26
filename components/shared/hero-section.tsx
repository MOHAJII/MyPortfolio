import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  className?: string;
  buttonClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}

export function HeroSection({
  className = "",
  buttonClassName = "",
  titleClassName = "text-3xl md:text-5xl font-bold",
  subtitleClassName = "text-xl md:text-2xl font-semibold mt-2",
  descriptionClassName = "mt-4 max-w-md",
}: HeroSectionProps) {
  return (
    <section className={`${className}`}>
      <h1 className={titleClassName}>
        Hi, I&apos;m Mohammed HAJI
      </h1>
      <h2 className={subtitleClassName}>
        Software Engineer
      </h2>
      <p className={descriptionClassName}>
        Join me in creating exceptional software experiences and embracing the potential of technology.
      </p>
      <div className="flex flex-wrap gap-4 mt-6">
        <Button asChild className={buttonClassName}>
          <Link href="#resume">Resume</Link>
        </Button>
        <Button asChild variant="outline" className={buttonClassName}>
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}