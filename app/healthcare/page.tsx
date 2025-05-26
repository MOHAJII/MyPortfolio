import { HealthcareLayout } from "@/components/layouts/healthcare-layout";
import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { ResumeSection } from "@/components/shared/resume-section";
import { ContactSection } from "@/components/shared/contact-section";
import { Project } from "@/lib/types";
import { Activity, Clock, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import { PageTransition } from '@/components/page-transition';
import { PROJECTS } from "@/lib/constants";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Mohammed HAJI - Healthcare Portfolio",
  description: "Software Engineer portfolio showcasing projects with a healthcare focus",
};

export default function HealthcarePage() {
  const CARD_HEIGHT = 450; // px, adjust as needed for your design
  const IMAGE_HEIGHT = 180; // px, adjust as needed for your design

  const renderProject = (project: Project) => (
    <div
      key={project.id}
      className="bg-card rounded-xl shadow-sm overflow-hidden border border-border hover:shadow-md transition-all flex flex-col"
      style={{ height: CARD_HEIGHT, minHeight: CARD_HEIGHT, maxHeight: CARD_HEIGHT }}
    >
      <div
        className="w-full overflow-hidden"
        style={{ height: IMAGE_HEIGHT, minHeight: IMAGE_HEIGHT, maxHeight: IMAGE_HEIGHT }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={480}
          height={180}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          style={{ display: 'block' }}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
              {project.tags[0]}
            </span>
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="h-3 w-3 mr-1" />
              <span>{project.year}</span>
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[2.5rem]">{project.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3 min-h-[3.6em]">{project.description}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
          <div className="flex items-center text-sm">
            <Activity className="h-4 w-4 mr-1 text-primary" />
            <span className="text-muted-foreground">Case Study</span>
          </div>
          <span className="flex items-center text-primary text-sm font-medium">
            <CheckCircle className="h-4 w-4 mr-1" />
            Completed
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <HealthcareLayout>
        <section className="pt-10 pb-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <HeroSection 
                  titleClassName="text-3xl md:text-5xl font-bold text-primary tracking-tight" 
                  subtitleClassName="text-xl md:text-2xl font-medium mt-3 text-primary/70"
                  descriptionClassName="mt-4 text-muted-foreground max-w-md"
                  buttonClassName="rounded-full"
                />
              </div>
              <div className="relative order-first md:order-last">
                <div className="aspect-square overflow-hidden rounded-full border-8 border-background shadow-xl max-w-md mx-auto">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Mohammed HAJI" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold">5+</div>
                    <div className="text-xs">Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <AboutSection 
                titleClassName="text-2xl font-bold text-primary"
                textClassName="mt-6 space-y-4"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Case Studies</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Explore my portfolio of healthcare technology solutions designed to improve patient care and clinical workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <div key={project.id} className="group">
                  {renderProject(project)}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-primary">Experience & Skills</h2>
                <p className="text-muted-foreground mt-3">
                  My professional background and technical expertise in healthcare software development.
                </p>
                
                <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center">
                      <Activity className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Technical Proficiency</h3>
                      <p className="text-sm text-muted-foreground">Advanced coding skills</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m4.93 4.93 4.24 4.24"></path>
                        <path d="m14.83 9.17 4.24-4.24"></path>
                        <path d="m14.83 14.83 4.24 4.24"></path>
                        <path d="m9.17 14.83-4.24 4.24"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Problem Solving</h3>
                      <p className="text-sm text-muted-foreground">Creative solutions expert</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 6.1H3"></path>
                        <path d="M21 12.1H3"></path>
                        <path d="M15.1 18H3"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Project Management</h3>
                      <p className="text-sm text-muted-foreground">Agile methodologies</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <ResumeSection 
                  titleClassName="sr-only"
                  experienceClassName="mb-8"
                  experienceItemClassName="mb-6 p-5 bg-card rounded-lg shadow-sm border border-border"
                  skillsClassName="mt-8"
                  skillItemClassName="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  separatorClassName="hidden"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary">Get In Touch</h2>
                <p className="text-muted-foreground mt-3">
                  Let&apos;s discuss how we can collaborate on your next healthcare technology project.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
                <ContactSection 
                  titleClassName="sr-only"
                  separatorClassName="hidden"
                  formClassName="space-y-5"
                  buttonClassName="w-full bg-primary hover:bg-primary/90 mt-2"
                />
              </div>
            </div>
          </div>
        </section>
      </HealthcareLayout>
    </PageTransition>
  );
}