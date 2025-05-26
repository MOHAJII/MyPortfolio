import { RealEstateLayout } from "@/components/layouts/real-estate-layout";
import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { ResumeSection } from "@/components/shared/resume-section";
import { ContactSection } from "@/components/shared/contact-section";
import { Project } from "@/lib/types";
import { MapPin, Bed, Bath, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { PageTransition } from '@/components/page-transition';
import { PROJECTS } from "@/lib/constants";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Mohammed HAJI - Real Estate Portfolio",
  description: "Software Engineer portfolio showcasing projects as real estate listings",
};

export default function RealEstatePage() {
  const renderProject = (project: Project) => (
    <div key={project.id} className="group cursor-pointer overflow-hidden rounded-lg shadow-md border hover:shadow-lg transition-all">
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={480}
            height={270}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded">
          Featured
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Morocco</span>
            </div>
          </div>
          <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
            New
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-3">{project.description}</p>
        
        <div className="border-t my-4"></div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 text-sm">
            <span className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              4
            </span>
            <span className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              2
            </span>
          </div>
          <div className="flex items-center text-primary font-medium">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <RealEstateLayout>
        <section className="relative h-[90vh] flex items-center">
          <div 
            className="absolute inset-0 z-0" 
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <HeroSection 
                titleClassName="text-4xl md:text-6xl font-bold text-white" 
                subtitleClassName="text-xl md:text-2xl font-medium mt-3 text-white/90"
                descriptionClassName="mt-4 text-white/80 max-w-md"
                buttonClassName="mt-2"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Mohammed HAJI" 
                  width={400}
                  height={400}
                  className="w-full rounded-lg object-cover h-full max-h-[400px]"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center">
                <AboutSection 
                  titleClassName="text-3xl font-bold text-primary border-b pb-2"
                  separatorClassName="hidden"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b pb-4">
              <div>
                <h2 className="text-3xl font-bold text-primary">Featured Projects</h2>
                <p className="text-muted-foreground mt-2">Explore my featured development work</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <button className="text-primary font-medium flex items-center">
                  All Projects
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map(project => renderProject(project))}           
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <ResumeSection 
              titleClassName="text-3xl font-bold text-primary border-b pb-2 mb-6"
              separatorClassName="hidden"
              skillItemClassName="bg-primary/10 text-primary px-3 py-1 rounded text-sm"
            />
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-primary">Let&apos;s Connect</h2>
                <p className="text-muted-foreground mt-2 mb-6">Reach out and let&apos;s discuss your next project</p>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">email@example.com</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+212 600 000 000</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Morocco</p>
                  </div>
                </div>
              </div>
              
              <ContactSection 
                titleClassName="sr-only"
                separatorClassName="hidden"
                formClassName="space-y-5 bg-background p-6 rounded-lg shadow-sm"
                buttonClassName="bg-primary hover:bg-primary/90 w-full"
              />
            </div>
          </div>
        </section>
      </RealEstateLayout>
    </PageTransition>
  );
}