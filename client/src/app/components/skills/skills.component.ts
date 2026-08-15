import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="section">

      <h2 class="section-title">
        Technical Skills
      </h2>

      <p class="description">
        A practical technology stack built through hands-on experience in
        enterprise application development, backend engineering, APIs,
        databases and modern web development.
      </p>

      <div class="skills-grid">

        <!-- Backend -->

        <div class="card card-hover skill-card">

          <div class="skill-heading">
            <div class="skill-icon">⌘</div>

            <div>
              <h3>Backend Development</h3>
              <span>Core Expertise</span>
            </div>
          </div>

          <div class="skill-list">

            <div class="skill-item">
              <span>C#</span>
              <span class="level">Advanced</span>
            </div>

            <div class="skill-item">
              <span>.NET / .NET Core</span>
              <span class="level">Advanced</span>
            </div>

            <div class="skill-item">
              <span>ASP.NET Core</span>
              <span class="level">Advanced</span>
            </div>

            <div class="skill-item">
              <span>RESTful Web APIs</span>
              <span class="level">Advanced</span>
            </div>

            <div class="skill-item">
              <span>Entity Framework Core</span>
              <span class="level">Strong</span>
            </div>

          </div>

        </div>


        <!-- Frontend -->

        <div class="card card-hover skill-card">

          <div class="skill-heading">
            <div class="skill-icon">◇</div>

            <div>
              <h3>Frontend Development</h3>
              <span>Web Applications</span>
            </div>
          </div>

          <div class="skill-list">

            <div class="skill-item">
              <span>Angular</span>
              <span class="level">Strong</span>
            </div>

            <div class="skill-item">
              <span>TypeScript</span>
              <span class="level">Strong</span>
            </div>

            <div class="skill-item">
              <span>JavaScript</span>
              <span class="level">Strong</span>
            </div>

            <div class="skill-item">
              <span>HTML5</span>
              <span class="level">Strong</span>
            </div>

            <div class="skill-item">
              <span>CSS3</span>
              <span class="level">Strong</span>
            </div>

          </div>

        </div>


        <!-- Database -->

        <div class="card card-hover skill-card">

          <div class="skill-heading">
            <div class="skill-icon">▣</div>

            <div>
              <h3>Database</h3>
              <span>Data & Performance</span>
            </div>
          </div>

          <div class="skill-list">

            <div class="skill-item">
              <span>SQL Server</span>
              <span class="level">Advanced</span>
            </div>

            <div class="skill-item">
              <span>SQL Queries</span>
              <span class="level">Advanced</span>
            </div>

            <div class="skill-item">
              <span>Stored Procedures</span>
              <span class="level">Strong</span>
            </div>

            <div class="skill-item">
              <span>LINQ</span>
              <span class="level">Strong</span>
            </div>

            <div class="skill-item">
              <span>Database Optimization</span>
              <span class="level">Strong</span>
            </div>

          </div>

        </div>


        <!-- Development Tools -->

        <div class="card card-hover skill-card">

          <div class="skill-heading">
            <div class="skill-icon">⚙</div>

            <div>
              <h3>Tools & Practices</h3>
              <span>Development Workflow</span>
            </div>
          </div>

          <div class="tools">

            <span>Visual Studio</span>
            <span>VS Code</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Postman</span>
            <span>Swagger</span>
            <span>NUnit</span>
            <span>Azure DevOps</span>
            <span>Entity Framework</span>

          </div>

        </div>


        <!-- Architecture -->

        <div class="card card-hover skill-card architecture-card">

          <div class="skill-heading">
            <div class="skill-icon">◈</div>

            <div>
              <h3>Architecture & Practices</h3>
              <span>Engineering Practices</span>
            </div>
          </div>

          <div class="tools">

            <span>Clean Architecture</span>
            <span>REST API Design</span>
            <span>Authentication</span>
            <span>Authorization</span>
            <span>API Optimization</span>
            <span>Debugging</span>
            <span>Unit Testing</span>
            <span>Code Review</span>

          </div>

        </div>


        <!-- Core Focus -->

        <div class="card card-hover focus-card">

          <div class="focus-content">

            <span class="focus-label">
              CURRENT FOCUS
            </span>

            <h3>
              .NET Backend Development
            </h3>

            <p>
              Building reliable APIs, optimizing backend performance,
              working with SQL Server and developing maintainable
              enterprise applications.
            </p>

          </div>

          <div class="focus-stack">

            <span>C#</span>
            <span>.NET</span>
            <span>ASP.NET Core</span>
            <span>SQL Server</span>

          </div>

        </div>

      </div>

    </section>
  `,

  styles: [`

    .description {
      max-width: 850px;
      margin-bottom: 50px;
      font-size: 17px;
      line-height: 1.8;
      color: var(--text-muted);
    }


    /* Grid */

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }


    /* Cards */

    .card {
      padding: 28px;
    }


    /* Skill Heading */

    .skill-heading {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 26px;
    }

    .skill-icon {
      width: 44px;
      height: 44px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 11px;

      background: var(--primary-dim);
      border: 1px solid rgba(0,229,160,.22);

      color: var(--primary);

      font-size: 20px;
      font-family: var(--font-mono);
    }

    .skill-heading h3 {
      margin: 0 0 4px;

      font-size: 19px;
      font-family: var(--font-display);

      color: var(--text);
    }

    .skill-heading span {
      font-family: var(--font-mono);
      font-size: 10.5px;
      letter-spacing: .6px;
      text-transform: uppercase;

      color: var(--text-muted);
    }


    /* Skill List */

    .skill-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .skill-item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 12px 14px;

      border-radius: 9px;

      background: var(--surface-light);
      border: 1px solid var(--border);

      color: var(--text);

      font-size: 13.5px;

      transition: .25s ease;
    }

    .skill-item:hover {
      border-color: var(--primary);
      transform: translateX(4px);
    }

    .level {
      color: var(--primary);

      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 600;

      text-transform: uppercase;
    }


    /* Tools */

    .tools {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tools span {
      padding: 9px 14px;

      border-radius: 8px;

      background: var(--primary-dim);
      border: 1px solid rgba(0,229,160,.22);

      color: var(--primary);

      font-family: var(--font-mono);
      font-size: 11.5px;

      transition: .25s ease;
    }

    .tools span:hover {
      background: var(--primary);
      color: #04120D;
      transform: translateY(-2px);
    }


    /* Architecture */

    .architecture-card {
      min-height: 250px;
    }


    /* Focus Card */

    .focus-card {
      position: relative;
      overflow: hidden;

      background:
        linear-gradient(
          135deg,
          var(--surface),
          var(--surface-light)
        );
    }

    .focus-content {
      position: relative;
      z-index: 1;
    }

    .focus-label {
      display: inline-block;

      margin-bottom: 12px;

      color: var(--primary);

      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1.2px;
    }

    .focus-card h3 {
      margin: 0 0 12px;

      font-size: 25px;
      font-family: var(--font-display);

      color: var(--text);
    }

    .focus-card p {
      max-width: 520px;

      margin: 0;

      color: var(--text-muted);

      font-size: 14px;
      line-height: 1.8;
    }

    .focus-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;

      margin-top: 24px;
    }

    .focus-stack span {
      padding: 7px 12px;

      border-radius: 7px;

      background: var(--primary-dim);

      color: var(--primary);

      font-family: var(--font-mono);
      font-size: 11px;
    }


    /* Responsive */

    @media(max-width:900px) {

      .skills-grid {
        grid-template-columns: 1fr;
      }

    }


    @media(max-width:600px) {

      .description {
        font-size: 15.5px;
      }

      .card {
        padding: 22px;
      }

      .skill-heading h3 {
        font-size: 18px;
      }

      .focus-card h3 {
        font-size: 22px;
      }

    }

  `]
})
export class SkillsComponent {}