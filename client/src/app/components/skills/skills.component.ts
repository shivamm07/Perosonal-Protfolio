import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { Skill } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2>Skills</h2>
      <div *ngFor="let group of groupedSkills | keyvalue">
        <h3>{{ group.key }}</h3>
        <p>{{ getNames(group.value) }}</p>
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

  getNames(skills: Skill[]): string {
    return skills.map(s => s.name).join(', ');
  }
}
