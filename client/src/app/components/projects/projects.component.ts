import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2>Projects</h2>
      <div *ngFor="let project of projects" style="margin-bottom:2rem; padding:1rem; border:1px solid #2a2f3a; border-radius:8px;">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p style="color:#9aa4b2; font-size:0.9rem;">{{ project.techStack }}</p>
        <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank">GitHub</a>
        <span *ngIf="project.githubUrl && project.liveUrl"> · </span>
        <a *ngIf="project.liveUrl" [href]="project.liveUrl" target="_blank">Live Demo</a>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private api: PortfolioApiService) {}

  ngOnInit(): void {
    this.api.getProjects().subscribe(projects => (this.projects = projects));
  }
}
