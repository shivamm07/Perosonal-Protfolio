import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { Skill } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <span class="section-tag">// skills</span>
      <h2 class="section-title">Skills</h2>

      <div class="card" *ngFor="let group of groupedSkills | keyvalue">
        <h3 style="font-size:1rem; color:var(--muted); font-family:'JetBrains Mono', monospace; margin-bottom:0.25rem;">
          {{ group.key }}
        </h3>
        <div class="pill-row">
          <span class="pill" *ngFor="let skill of group.value">{{ skill.name }}</span>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent implements OnInit {
  groupedSkills: Record<string, Skill[]> = {};

  constructor(private api: PortfolioApiService) {}

  ngOnInit(): void {
    this.api.getSkills().subscribe(skills => {
      this.groupedSkills = skills.reduce((acc, skill) => {
        (acc[skill.category] ||= []).push(skill);
        return acc;
      }, {} as Record<string, Skill[]>);
    });
  }
}