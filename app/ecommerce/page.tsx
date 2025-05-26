import { EcommerceLayout } from "@/components/layouts/ecommerce-layout";
import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { ProjectsSection } from "@/components/shared/projects-section";
import { ResumeSection } from "@/components/shared/resume-section";
import { ContactSection } from "@/components/shared/contact-section";
import { Project } from "@/lib/types";
import { Metadata } from "next";
import { PageTransition } from '@/components/page-transition';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Mohammed HAJI - E-commerce Portfolio",
  description: "Software Engineer portfolio showcasing projects as e-commerce products",
};

export default function EcommercePage() {
  const renderProject = (project: Project) => (
    <div key={project.id} className="group cursor-pointer relative overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition-all">
      <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-full">
        New
      </div>
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={480}
            height={270}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{project.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
              View Details
            </button>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <EcommerceLayout>
        <div className="min-h-screen">
          <section id="hero" className="py-16">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <HeroSection 
                  titleClassName="text-4xl md:text-5xl font-bold text-primary" 
                  subtitleClassName="text-xl md:text-2xl font-medium mt-3 text-primary/80"
                  descriptionClassName="mt-4 text-muted-foreground max-w-md"
                  buttonClassName="rounded-full px-6"
                />
                <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden bg-muted p-4">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Mohammed HAJI"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="container py-16">
            <AboutSection 
              className="bg-card rounded-xl shadow-sm p-8 border"
              titleClassName="text-2xl font-bold text-primary"
            />
          </section>

          <section id="projects" className="py-16">
            <div className="container">
              <ProjectsSection
                titleClassName="text-3xl font-bold text-center text-primary"
                gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                separatorClassName="max-w-[100px] mx-auto my-4"
                renderProject={renderProject}
              />
            </div>
          </section>

          <section id="resume" className="container py-16">
            <ResumeSection 
              className="bg-card rounded-xl shadow-sm p-8 border"
              titleClassName="text-2xl font-bold text-primary"
              skillItemClassName="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            />
          </section>

          <section id="contact" className="py-16">
            <div className="container max-w-2xl mx-auto">
              <ContactSection 
                titleClassName="text-3xl font-bold text-center text-primary"
                separatorClassName="max-w-[100px] mx-auto my-4"
                formClassName="space-y-5 mt-8 bg-card p-8 rounded-xl shadow-sm border"
                buttonClassName="w-full bg-primary hover:bg-primary/90"
              />
            </div>
          </section>
        </div>
      </EcommerceLayout>
    </PageTransition>
  );
}