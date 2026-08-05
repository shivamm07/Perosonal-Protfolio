import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="topbar">
      <div class="topbar-left">
        <img class="avatar" src="assets/images/profile.jpg" alt="Shivamkumar Prasad" />
        <span class="brand">Shivamkumar Prasad</span>
        <a routerLink="/" class="nav-link">Home</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" class="nav-link">LinkedIn ↗</a>
        <a href="/assets/resume.pdf" target="_blank" class="nav-link">Resume ↗</a>
      </div>

      <div class="topbar-right">
        <input class="search" type="text" placeholder="Search sections..." />
        <span class="clock">
          <span class="dot"></span>
          {{ time }}
        </span>
        <a href="https://github.com/your-username" target="_blank" class="icon-link" aria-label="GitHub" title="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>
          </svg>
        </a>
      </div>
    </header>
  `,
  styles: [`
    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      padding: 0 1.5rem;
      background: rgba(11, 15, 46, 0.7);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
    }

    .topbar-left {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid var(--border);
    }

    .brand {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--text);
      margin-right: 0.5rem;
    }

    .nav-link {
      color: var(--muted);
      text-decoration: none;
      font-size: 0.88rem;
      transition: color 0.15s ease;
    }

    .nav-link:hover {
      color: var(--text);
    }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .search {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.4rem 0.75rem;
      color: var(--text);
      font-size: 0.85rem;
      width: 200px;
      outline: none;
    }

    .search::placeholder {
      color: var(--muted);
    }

    .search:focus {
      border-color: var(--accent);
    }

    .clock {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      color: var(--muted);
    }

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #4ade80;
    }

    .icon-link {
      color: var(--muted);
      display: flex;
      align-items: center;
      transition: color 0.15s ease;
    }

    .icon-link:hover {
      color: var(--text);
    }
  `]
})
export class TopbarComponent implements OnInit, OnDestroy {
  time = '';
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private updateTime(): void {
    this.time = new Date().toLocaleTimeString('en-US', { hour12: false });
  }
}