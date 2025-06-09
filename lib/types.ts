export type Profession = 'ecommerce' | 'real-estate' | 'healthcare' | 'education' | 'default';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  year?: string;
  try: any;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  location: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export type Education = {
  id: number;
  title: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
};
