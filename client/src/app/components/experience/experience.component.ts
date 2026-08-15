import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="section">

      <h2 class="section-title">
        Professional Experience
      </h2>

      <p class="description">
        Over 3 years of experience developing enterprise software,
        building scalable backend services, REST APIs and
        data-driven applications using the .NET technology stack.
      </p>

      <div class="timeline">

        <!-- Senior Programmer -->

        <div class="timeline-item">

          <div class="timeline-dot"></div>

          <div class="timeline-card card card-hover">

            <div class="header">

              <div>

                <h3>Senior Programmer</h3>

                <h4>Acty System India Pvt. Ltd.</h4>

              </div>

              <span class="duration">
                Apr 2024 - Present
              </span>

            </div>

            <p>
              Working on an enterprise software platform, developing
              scalable backend services, REST APIs, authentication
              modules, notification services and application features.
              Focused primarily on .NET backend development and
              enterprise application performance.
            </p>

            <div class="tech">

              <span>C#</span>
              <span>.NET</span>
              <span>ASP.NET Core</span>
              <span>Web API</span>
              <span>SQL Server</span>
              <span>Angular</span>
              <span>Git</span>

            </div>

            <ul>

              <li>
                Developed and optimized REST APIs using ASP.NET Core and C#.
              </li>

              <li>
                Implemented authentication and authorization modules
                for enterprise applications.
              </li>

              <li>
                Worked with SQL Server, database queries and
                backend data processing.
              </li>

              <li>
                Improved application performance, reliability and
                maintainability through code optimization.
              </li>

              <li>
                Collaborated with cross-functional teams on
                enterprise feature development and troubleshooting.
              </li>

            </ul>

          </div>

        </div>


        <!-- Programmer -->

        <div class="timeline-item">

          <div class="timeline-dot"></div>

          <div class="timeline-card card card-hover">

            <div class="header">

              <div>

                <h3>Programmer</h3>

                <h4>Acty System India Pvt. Ltd.</h4>

              </div>

              <span class="duration">
                Jun 2023 - Mar 2024
              </span>

            </div>

            <p>
              Started my professional career developing business
              application features and gaining hands-on experience
              with .NET, ASP.NET, SQL Server and modern web
              development practices.
            </p>

            <div class="tech">

              <span>C#</span>
              <span>.NET</span>
              <span>ASP.NET</span>
              <span>SQL Server</span>
              <span>JavaScript</span>
              <span>Git</span>

            </div>

            <ul>

              <li>
                Developed and maintained application modules using C# and .NET.
              </li>

              <li>
                Created and optimized SQL queries and stored procedures.
              </li>

              <li>
                Fixed application defects and improved overall
                application stability.
              </li>

              <li>
                Participated in feature development, debugging
                and code reviews.
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  `,

  styles: [`

    .description {
      max-width: 850px;
      color: var(--text-muted);
      line-height: 1.8;
      margin-bottom: 50px;
      font-size: 17px;
    }

    /* Timeline */

    .timeline {
      position: relative;
      margin-left: 25px;
      padding-left: 40px;
      border-left: 2px solid var(--border);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 44px;
    }

    .timeline-item:last-child {
      margin-bottom: 0;
    }

    .timeline-dot {
      position: absolute;
      left: -53px;
      top: 30px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--primary);
      border: 4px solid var(--bg);
      box-shadow: 0 0 18px var(--primary-dim);
    }

    /* Experience Card */

    .timeline-card {
      padding: 30px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 18px;
      gap: 20px;
    }

    .header h3 {
      margin: 0;
      font-size: 23px;
      font-family: var(--font-display);
      color: var(--text);
    }

    .header h4 {
      margin: 6px 0 0;
      font-size: 15.5px;
      color: var(--text-muted);
      font-weight: 500;
    }

    .duration {
      padding: 7px 16px;
      border-radius: 8px;
      background: var(--primary-dim);
      color: var(--primary);
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
    }

    .timeline-card p {
      line-height: 1.8;
      color: var(--text-muted);
      margin-bottom: 22px;
      font-size: 15.5px;
    }

    /* Technologies */

    .tech {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
      margin-bottom: 22px;
    }

    .tech span {
      padding: 7px 15px;
      border-radius: 8px;
      background: var(--surface-light);
      border: 1px solid var(--border);
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: 12px;
      transition: .25s ease;
    }

    .tech span:hover {
      border-color: var(--primary);
      color: var(--primary);
    }

    /* Responsibilities */

    ul {
      padding-left: 20px;
      margin: 0;
    }

    li {
      margin-bottom: 11px;
      line-height: 1.8;
      color: var(--text);
      font-size: 15px;
    }

    li::marker {
      color: var(--primary);
    }

    /* Responsive */

    @media(max-width: 768px) {

      .timeline {
        margin-left: 10px;
        padding-left: 25px;
      }

      .timeline-dot {
        left: -38px;
      }

      .header {
        flex-direction: column;
      }

      .duration {
        align-self: flex-start;
      }

      .timeline-card {
        padding: 22px;
      }

    }

    @media(max-width: 480px) {

      .timeline {
        margin-left: 5px;
        padding-left: 20px;
      }

      .timeline-dot {
        left: -33px;
      }

      .header h3 {
        font-size: 20px;
      }

      .timeline-card p,
      li {
        font-size: 14px;
      }

    }

  `]
})
export class ExperienceComponent {}