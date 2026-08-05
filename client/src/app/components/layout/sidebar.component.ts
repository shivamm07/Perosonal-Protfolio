import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <h3 class="sidebar-heading">Sections</h3>
      <nav class="sidebar-nav">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Introduction</a>
        <a routerLink="/about" routerLinkActive="active">About Me</a>
        <a routerLink="/skills" routerLinkActive="active">Skills & Tools</a>
        <a routerLink="/projects" routerLinkActive="active">Projects</a>
        <a routerLink="/experience" routerLinkActive="active">Experience</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar {
      padding: 1.75rem 1.25rem;
    }

    .sidebar-heading {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text);
      margin: 0 0 1rem 0.5rem;
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }

    .sidebar-nav a {
      padding: 0.55rem 0.75rem;
      border-radius: 8px;
      color: var(--muted);
      text-decoration: none;
      font-size: 0.92rem;
      transition: background 0.15s ease, color 0.15s ease;
    }

    .sidebar-nav a:hover {
      color: var(--text);
      background: var(--surface);
    }

    .sidebar-nav a.active {
      color: var(--text);
      background: var(--surface);
      font-weight: 600;
    }
  `]
})
export class SidebarComponent {}