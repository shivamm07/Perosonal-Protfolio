import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="section">

      <span class="section-tag">// PROJECTS</span>

      <h2 class="section-title">
        Featured Projects
      </h2>

      <p class="description">
        Here are some of the enterprise and personal projects I've worked on,
        focusing on scalable architecture, performance, and clean user
        experiences.
      </p>

      <div class="projects">

        <!-- FleetRMM -->

        <div class="project card card-hover">

          <div class="project-image">
            🖥️
          </div>

          <div class="project-content">

            <div class="project-header">

              <h3>FleetRMM</h3>

              <span class="badge">
                Enterprise
              </span>

            </div>

            <p>
              Enterprise Remote Monitoring & Management platform developed for
              Konica Minolta devices. Worked on Web APIs, authentication,
              notifications, printer management, and backend services.
            </p>

            <div class="tech">

              <span>.NET</span>
              <span>ASP.NET Core</span>
              <span>Angular</span>
              <span>SQL Server</span>
              <span>REST API</span>

            </div>

            <div class="features">

              <div>✔ Authentication & Authorization</div>
              <div>✔ Device Management</div>
              <div>✔ Notification System</div>
              <div>✔ Enterprise API Development</div>

            </div>

            <div class="buttons">

              <a href="#" class="demo">
                Company Project
              </a>

            </div>

          </div>

        </div>

        <!-- Portfolio -->

        <div class="project card card-hover">

          <div class="project-image">
            🌐
          </div>

          <div class="project-content">

            <div class="project-header">

              <h3>Developer Portfolio</h3>

              <span class="badge personal">
                Personal
              </span>

            </div>

            <p>
              Responsive portfolio built using Angular showcasing skills,
              projects, experience, and contact details with modern UI and
              reusable components.
            </p>

            <div class="tech">

              <span>Angular</span>
              <span>TypeScript</span>
              <span>CSS</span>

            </div>

            <div class="features">

              <div>✔ Responsive Design</div>
              <div>✔ Standalone Components</div>
              <div>✔ Modern UI</div>
              <div>✔ Dark & Light Theme</div>

            </div>

            <div class="buttons">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                class="github">

                GitHub

              </a>

              <a
                href="#"
                class="demo">

                Live Demo

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  `,
  styles: [`

.description{

max-width:900px;

color:var(--text-muted);

font-size:17px;

line-height:1.8;

margin-bottom:50px;

}

.projects{

display:flex;

flex-direction:column;

gap:30px;

}

.project{

display:grid;

grid-template-columns:220px 1fr;

gap:35px;

align-items:center;

}

.project-image{

height:200px;

display:flex;

align-items:center;

justify-content:center;

font-size:80px;

border-radius:16px;

background:var(--surface-light);

border:1px solid var(--border);

}

.project-header{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:16px;

}

.project-header h3{

margin:0;

font-size:24px;

font-family:var(--font-display);

color:var(--text);

}

.badge{

padding:7px 15px;

border-radius:8px;

background:var(--primary-dim);

color:var(--primary);

font-family:var(--font-mono);

font-size:12px;

font-weight:600;

}

.personal{

background:var(--amber-dim);

color:var(--amber);

}

.project p{

line-height:1.8;

color:var(--text-muted);

font-size:15.5px;

}

.tech{

display:flex;

flex-wrap:wrap;

gap:9px;

margin:22px 0;

}

.tech span{

padding:7px 15px;

border-radius:8px;

background:var(--surface-light);

border:1px solid var(--border);

color:var(--text-muted);

font-family:var(--font-mono);

font-size:12px;

}

.features{

display:grid;

grid-template-columns:repeat(2,1fr);

gap:10px;

margin-bottom:24px;

color:var(--text);

font-size:14.5px;

}

.buttons{

display:flex;

gap:14px;

}

.buttons a{

padding:11px 20px;

border-radius:9px;

text-decoration:none;

font-weight:600;

font-size:14px;

transition:.25s ease;

}

.github{

background:var(--surface-light);

border:1px solid var(--border-strong);

color:var(--text);

}

.demo{

background:var(--primary);

color:#04120D;

}

.buttons a:hover{

transform:translateY(-3px);

}

@media(max-width:900px){

.project{

grid-template-columns:1fr;

}

.project-image{

height:160px;

}

.features{

grid-template-columns:1fr;

}

}

`]
})
export class ProjectsComponent {}
