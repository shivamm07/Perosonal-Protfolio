import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent, title: 'Shivamkumar Prasad | Introduction' },
  { path: 'about', component: AboutComponent, title: 'Shivamkumar Prasad | About' },
  { path: 'skills', component: SkillsComponent, title: 'Shivamkumar Prasad | Skills' },
  { path: 'projects', component: ProjectsComponent, title: 'Shivamkumar Prasad | Projects' },
  { path: 'experience', component: ExperienceComponent, title: 'Shivamkumar Prasad | Experience' },
  { path: 'contact', component: ContactComponent, title: 'Shivamkumar Prasad | Contact' },
  { path: '**', redirectTo: '' }
];