import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>
        © {{ year }} Shivamkumar Prasad · Built with
        <strong>Angular</strong>, <strong>ASP.NET Core</strong> and <strong>SQL Server</strong>
      </p>
      <p>
        Source code on
        <a href="https://github.com/your-username/Personal-Portfolio" target="_blank">GitHub</a>
      </p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 2rem 1.5rem;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.85rem;
    }

    .footer p {
      margin: 0.25rem 0;
    }

    .footer a {
      color: var(--accent);
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}