import { DefaultLayout } from "@/components/layouts/default-layout";
import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { ResumeSection } from "@/components/shared/resume-section";
import { ContactSection } from "@/components/shared/contact-section";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/lib/types";
import { Metadata } from "next";
import { PageTransition } from '@/components/page-transition';
import { PROJECTS } from "@/lib/constants";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Mohammed HAJI - Developer Portfolio",
  description: "Software Engineer portfolio showcasing projects and skills",
};

export default function DefaultPage() {
  const renderProject = (project: Project) => (
    <div key={project.id} className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={480}
          height={270}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 min-h-[60px]">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a
              href={project.link}
              className="text-primary hover:underline text-sm font-medium"
            >
              View Project
            </a>
            {project.try && (
              <a
                href={project.try}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold shadow-sm transition-all duration-200 hover:bg-green-200 hover:scale-105 cursor-pointer inline-block"
                style={{ minWidth: '70px', textAlign: 'center' }}
              >
                Try the App
              </a>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <DefaultLayout>
        <section id="hero" className="min-h-[90vh] flex items-center py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <HeroSection
                  titleClassName="text-4xl md:text-6xl font-bold"
                  subtitleClassName="text-xl md:text-3xl font-medium mt-3 text-primary"
                  descriptionClassName="mt-4 text-muted-foreground max-w-md text-lg"
                />
              </div>
              <div className="order-first md:order-last flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 animate-pulse"></div>
                  <Image
                    src="/images/profile.jpg"
                    alt="Mohammed HAJI"
                    width={320}
                    height={320}
                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover border-2 border-background z-10"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <div className="flex items-center text-muted-foreground animate-bounce">
                <span className="mr-2">Scroll Down</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 mx-10">
          <div className="container">
            <div className="flex flex-col items-center mb-10 text-center">
              <h2 className="text-3xl font-bold">About Me</h2>
              <Separator className="w-20 my-4" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-lg"></div>
                  <Image
                    src="/images/profile.jpg"
                    alt="Mohammed HAJI"
                    width={320}
                    height={320}
                    className="relative z-10 rounded-lg object-cover w-full max-w-md"
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <AboutSection
                  titleClassName="sr-only"
                  separatorClassName="hidden"
                  textClassName="space-y-4"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border text-center">
                    <span className="text-3xl font-bold text-primary">1+</span>
                    <span className="mt-1 text-sm text-muted-foreground">Years Experience</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border text-center">
                    <span className="text-3xl font-bold text-primary">10+</span>
                    <span className="mt-1 text-sm text-muted-foreground">Completed Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="container">
            <div className="flex flex-col items-center mb-10 text-center">
              <h2 className="text-3xl font-bold">My Works</h2>
              <Separator className="w-20 my-4" />
              <p className="text-muted-foreground max-w-2xl">
                Here are some of the projects I&apos;ve worked on. Each project showcases different skills and technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (renderProject(project)))}
            </div>
          </div>
        </section>

        <section id="resume" className="py-16">
          <div className="container">
            <div className="flex flex-col items-center mb-10 text-center">
              <h2 className="text-3xl font-bold">Resume</h2>
              <Separator className="w-20 my-4" />
              <p className="text-muted-foreground max-w-2xl">
                My professional experience and technical skills in software development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <ResumeSection
                  titleClassName="text-2xl font-bold mb-6"
                  experienceClassName="space-y-6"
                  experienceItemClassName="p-6 bg-card rounded-lg border"
                  separatorClassName="hidden"
                  skillsClassName="hidden"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">JavaScript / TypeScript</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">React / Next.js</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Node.js</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Database Design</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">CSS / Tailwind CSS</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container">
            <div className="flex flex-col items-center mb-10 text-center">
              <h2 className="text-3xl font-bold">Get In Touch</h2>
              <Separator className="w-20 my-4" />
              <p className="text-muted-foreground max-w-2xl">
                Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground mt-1">+212 608 537 301</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground mt-1">mohammedhaji9991@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground mt-1">Morocco</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/mohammedhaji9991" className="bg-card hover:bg-muted p-3 rounded-full border transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="https://github.com/MOHAJII" className="bg-card hover:bg-muted p-3 rounded-full border transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border">
                <ContactSection
                  titleClassName="text-xl font-semibold mb-6"
                  separatorClassName="hidden"
                  formClassName="space-y-5"
                  buttonClassName="w-full bg-primary hover:bg-primary/90"
                />
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </PageTransition>
  );
}