export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  displayOrder: number;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  displayOrder: number;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiencyLevel: number;
}

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}
