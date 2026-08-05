import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { Experience } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <span class="section-tag">// experience</span>
      <h2 class="section-title">Experience</h2>

      <div class="timeline">
        <div class="timeline-item" *ngFor="let exp of experience">
          <span class="timeline-dot"></span>
          <div class="timeline-role">{{ exp.role }} · {{ exp.company }}</div>
          <div class="timeline-date">{{ exp.startDate }} – {{ exp.endDate || 'Present' }}</div>
          <p style="margin:0; line-height:1.7; color:var(--text);">{{ exp.description }}</p>
        </div>
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