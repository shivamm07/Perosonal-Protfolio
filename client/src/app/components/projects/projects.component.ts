import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <span class="section-tag">// projects</span>
      <h2 class="section-title">Projects</h2>

      <div class="card card-hover" *ngFor="let project of projects">
        <h3 style="font-size:1.15rem; color:var(--text); margin-bottom:0.5rem;">
          {{ project.title }}
        </h3>
        <p style="margin:0 0 0.75rem; line-height:1.7; color:var(--text);">
          {{ project.description }}
        </p>
        <div class="pill-row" *ngIf="project.techStack">
          <span class="pill" *ngFor="let tech of splitTech(project.techStack)">{{ tech }}</span>
        </div>
        <div style="margin-top:1rem; display:flex; gap:1rem;">
          <a class="link-accent" *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank">GitHub →</a>
          <a class="link-accent" *ngIf="project.liveUrl" [href]="project.liveUrl" target="_blank">Live Demo →</a>
        </div>
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

  splitTech(techStack: string): string[] {
    return techStack.split(',').map(t => t.trim()).filter(Boolean);
  }
}