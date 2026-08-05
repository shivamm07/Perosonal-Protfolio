import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <h1 class="name">Shivamkumar Prasad</h1>
      <h2 class="tagline">Software Developer | .NET · Angular · SQL Server</h2>

      <p class="intro">
        3 years of experience building reliable, full-stack web applications —
        from APIs to data-driven UIs.
      </p>

      <div class="actions">
        <a class="btn-primary" href="/assets/resume.pdf" target="_blank">
          Get Resume ↗
        </a>
        <a class="btn-secondary" href="mailto:you@example.com">
          ✉ Send Mail
        </a>
      </div>

      <a class="next-link" routerLink="/about">About Me →</a>
    </section>
  `,
  styles: [`
    .name {
      font-size: 2.75rem;
      font-weight: 800;
      color: var(--text);
      margin: 0 0 0.5rem;
    }

    .tagline {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--muted);
      margin: 0 0 1.5rem;
    }

    .intro {
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--text);
      max-width: 640px;
      margin: 0 0 2rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 4rem;
    }

    .btn-secondary {
      padding: 0.7rem 1.4rem;
      border-radius: 8px;
      border: 1px solid var(--border);
      color: var(--text);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      transition: border-color 0.15s ease, color 0.15s ease;
    }

    .btn-secondary:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .next-link {
      display: inline-block;
      color: var(--muted);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.15s ease;
    }

    .next-link:hover {
      color: var(--accent);
    }
  `]
})
export class HeroComponent {}