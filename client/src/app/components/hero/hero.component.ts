import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section style="text-align:center; padding-top:6rem;">
      <h1>Shivamkumar Prasad</h1>
      <p style="font-size:1.2rem; color:#9aa4b2;">Software Developer | .NET · Angular · SQL Server</p>
      <p style="max-width:600px; margin:1rem auto;">
        3 years of experience building reliable, full-stack web applications —
        from APIs to data-driven UIs.
      </p>
      <div>
        <a href="https://github.com/your-username" target="_blank">GitHub</a> ·
        <a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a> ·
        <a href="/assets/resume.pdf" target="_blank">Resume</a>
      </div>
    </section>
  `
})
export class HeroComponent {}
