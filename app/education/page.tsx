import { EducationLayout } from "@/components/layouts/education-layout";
import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { ResumeSection } from "@/components/shared/resume-section";
import { ContactSection } from "@/components/shared/contact-section";
import { Project } from "@/lib/types";
import { BookOpen, Clock, Star, Users, BadgeCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Metadata } from "next";
import { PageTransition } from '@/components/page-transition';
import { PROJECTS } from "@/lib/constants";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Mohammed HAJI - Education Portfolio",
  description: "Software Engineer portfolio showcasing projects as educational courses",
};

// Deterministic pseudo-random generator based on project id and key
function seededRandom(seed: number, key: string, min: number, max: number) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash |= 0;
  }
  const x = Math.sin(seed * 1000 + hash) * 10000;
  return Math.floor(Math.abs(x) % (max - min + 1)) + min;
}

function seededRandomFloat(seed: number, key: string, min: number, max: number, decimals = 1) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash |= 0;
  }
  const x = Math.abs(Math.sin(seed * 1000 + hash));
  const value = min + (max - min) * x;
  return parseFloat(value.toFixed(decimals));
}

export default function EducationPage() {
  const renderProject = (project: Project) => {
    const students = seededRandom(project.id, "students", 100, 5000);
    const hours = seededRandom(project.id, "hours", 1, 40);
    const progress = seededRandom(project.id, "progress", 0, 100);
    const difficulties = ["Beginner", "Intermediate", "Advanced"];
    const difficultyIdx = seededRandom(project.id, "difficulty", 0, difficulties.length - 1);
    const difficulty = difficulties[difficultyIdx];
    const rating = seededRandomFloat(project.id, "rating", 3.9, 4.9, 1);

    return (
      <div
        key={project.id}
        className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all flex flex-col h-[430px]"
        style={{ minHeight: 560 }}
      >
        <div className="relative">
          <div className="w-full aspect-video overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              width={480}
              height={270}
              className="w-full h-full object-cover object-center"
              style={{ minHeight: 170, maxHeight: 160 }}
            />
          </div>
          <div className="absolute top-3 right-3 bg-background/90 text-foreground px-3 py-1 rounded-full text-xs flex items-center">
            <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between p-5">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium">Course</span>
              </div>
              <span className="text-xs text-muted-foreground">{difficulty}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Course progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-primary/20" />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center text-sm mb-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">{students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">{hours} hours</span>
              </div>
            </div>
            <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 rounded-md transition-colors">
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageTransition>
      <EducationLayout>
        <section className="relative py-16 overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Welcome to my learning portfolio
                </div>
                <HeroSection 
                  titleClassName="text-4xl md:text-5xl font-bold" 
                  subtitleClassName="text-xl md:text-2xl font-medium mt-3 text-primary"
                  descriptionClassName="mt-4 text-muted-foreground max-w-md"
                  buttonClassName="mt-2"
                />
              </div>
              
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden border-8 border-background shadow-xl">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Mohammed HAJI" 
                    width={320}
                    height={320}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                
                <div className="absolute -right-4 -bottom-4 bg-card rounded-lg p-4 shadow-lg border z-20 w-32">
                  <div className="flex flex-col items-center">
                    <BadgeCheck className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-semibold">Certified Educator</span>
                  </div>
                </div>
                
                <div className="absolute top-1/4 -left-16 rounded-lg h-24 w-40 bg-card shadow-lg border p-3 hidden md:block">
                  <div className="flex items-center h-full">
                    <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                      <div className="font-bold text-lg">10+</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 left-1/4 rounded-lg h-24 w-40 bg-card shadow-lg border p-3 hidden md:block z-30">
                  <div className="flex items-center h-full">
                    <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Students</div>
                      <div className="font-bold text-lg">1,200+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16" id="about">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold">About Me</h2>
                <div className="h-1 w-20 bg-primary mt-2"></div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg min-w-[100px]">
                  <span className="text-2xl font-bold">1+</span>
                  <span className="text-xs text-muted-foreground">Years Exp.</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg min-w-[100px]">
                  <span className="text-2xl font-bold">10+</span>
                  <span className="text-xs text-muted-foreground">Projects</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-8 border">
              <AboutSection 
                className=""
                titleClassName="sr-only"
                separatorClassName="hidden"
              />
            </div>
          </div>
        </section>
        
        <section className="py-16" id="projects">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Featured Courses
              </span>
              <h2 className="text-3xl font-bold">My Latest Projects</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Browse through my portfolio of educational projects presented as interactive courses and learning modules.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map(project => renderProject(project))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-primary/10 hover:bg-primary/20 text-primary font-medium px-6 py-2 rounded-md transition-colors">
                View All Courses
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-16" id="resume">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="sticky top-20">
                  <h2 className="text-3xl font-bold mb-6">My Experience</h2>
                  <p className="text-muted-foreground mb-6">
                    With a strong foundation in software engineering, I&apos;ve developed expertise across various domains and technologies.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="flex items-center">
                        <BadgeCheck className="h-6 w-6 text-primary mr-3" />
                        <div>
                          <h3 className="font-semibold">Technical Proficiency</h3>
                          <p className="text-sm text-muted-foreground">Advanced skills in multiple languages</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="flex items-center">
                        <Users className="h-6 w-6 text-primary mr-3" />
                        <div>
                          <h3 className="font-semibold">Teaching Experience</h3>
                          <p className="text-sm text-muted-foreground">Mentored 50+ students</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="flex items-center">
                        <BookOpen className="h-6 w-6 text-primary mr-3" />
                        <div>
                          <h3 className="font-semibold">Course Creation</h3>
                          <p className="text-sm text-muted-foreground">Developed 10+ educational modules</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <ResumeSection 
                  titleClassName="sr-only"
                  experienceClassName="space-y-6"
                  experienceItemClassName="p-6 bg-card rounded-lg shadow-sm border"
                  skillsClassName="mt-12"
                  skillItemClassName="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  separatorClassName="hidden"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16" id="contact">
          <div className="container">
            <div className="text-center mb-10">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl font-bold">Contact Me</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Have a question or interested in working together? Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto bg-card rounded-xl shadow-sm p-8 border">
              <ContactSection 
                titleClassName="sr-only"
                separatorClassName="hidden"
                formClassName="space-y-5"
                buttonClassName="w-full bg-primary hover:bg-primary/90 mt-2"
              />
            </div>
          </div>
        </section>
      </EducationLayout>
    </PageTransition>
  );
}