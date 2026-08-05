import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="section">
      <span class="section-tag">// about</span>
      <h2 class="section-title">About Me</h2>
      <div class="card">
        <p style="margin:0; line-height:1.8; color:var(--text); font-size:1rem;">
          TODO: Replace with your real story — e.g. "I'm a software developer with
          3 years of experience building enterprise web applications using .NET Core,
          Angular, and SQL Server. I enjoy designing clean APIs and solving data-heavy
          backend problems..."
        </p>
      </div>
    </section>
  `
})
export class AboutComponent {}