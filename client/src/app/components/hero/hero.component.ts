import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section hero">

      <span class="section-tag">
        <span class="status-dot"></span>
        AVAILABLE FOR WORK
      </span>

      <h1 class="name">Shivamkumar Prasad</h1>
      <h2 class="tagline">Software Developer <span class="divider">·</span> .NET · Angular · SQL Server</h2>

      <p class="intro">
        3 years of experience building reliable, full-stack web applications —
        from APIs to data-driven UIs.
      </p>

      <div class="actions">
        <a class="btn btn-primary" href="/assets/resume.pdf" target="_blank">
          Get Resume ↗
        </a>
        <a class="btn btn-outline" href="mailto:you@example.com">
          ✉ Send Mail
        </a>
      </div>

      <div class="quick-stats">

        <div class="stat">
          <span class="value">3+</span>
          <span class="label">Years Experience</span>
        </div>

        <div class="stat">
          <span class="value">20+</span>
          <span class="label">REST APIs Shipped</span>
        </div>

        <div class="stat">
          <span class="value">1</span>
          <span class="label">Enterprise Platform</span>
        </div>

      </div>

      <a class="next-link" routerLink="/about">About Me →</a>
    </section>
  `,
  styles: [`

    .hero{
      padding-top:60px;
    }

    .name {
      font-size: 3rem;
      font-weight: 700;
      color: var(--text);
      margin: 0 0 0.5rem;
    }

    .tagline {
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--text-muted);
      margin: 0 0 1.5rem;
      font-family: var(--font-mono);
    }

    .tagline .divider{
      color: var(--primary);
    }

    .intro {
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--text-muted);
      max-width: 640px;
      margin: 0 0 2.2rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .quick-stats{
      display:flex;
      gap:44px;
      padding:28px 0;
      margin-bottom:2.5rem;
      border-top:1px solid var(--border);
      border-bottom:1px solid var(--border);
      max-width:640px;
    }

    .quick-stats .stat{
      display:flex;
      flex-direction:column;
      gap:4px;
    }

    .quick-stats .value{
      font-family:var(--font-display);
      font-size:28px;
      font-weight:700;
      color:var(--primary);
    }

    .quick-stats .label{
      font-family:var(--font-mono);
      font-size:12px;
      color:var(--text-muted);
    }

    .next-link {
      display: inline-block;
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;
    }

    .next-link:hover {
      color: var(--primary);
    }

    @media(max-width:600px){

      .name{ font-size:2.1rem; }
      .quick-stats{ gap:28px; flex-wrap:wrap; }

    }
  `]
})
export class HeroComponent {}
