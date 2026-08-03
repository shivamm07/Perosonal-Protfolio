import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { Experience } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2>Experience</h2>
      <div *ngFor="let exp of experience" style="margin-bottom:1.5rem;">
        <h3>{{ exp.role }} · {{ exp.company }}</h3>
        <p style="color:#9aa4b2; font-size:0.9rem;">
          {{ exp.startDate }} – {{ exp.endDate || 'Present' }}
        </p>
        <p>{{ exp.description }}</p>
      </div>
    </section>
  `
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(private api: PortfolioApiService) {}

  ngOnInit(): void {
    this.api.getExperience().subscribe(exp => (this.experience = exp));
  }
}
