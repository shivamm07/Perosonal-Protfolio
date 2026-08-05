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
              <div>✔ Dark Theme</div>

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

gap:35px;

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

font-size:90px;

border-radius:20px;

background:linear-gradient(135deg,#7c5cff,#38bdf8);

}

.project-header{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:18px;

}

.project-header h3{

margin:0;

font-size:28px;

}

.badge{

padding:8px 16px;

border-radius:999px;

background:#14532d;

color:#4ade80;

font-size:13px;

font-weight:600;

}

.personal{

background:#312e81;

color:#c4b5fd;

}

.project p{

line-height:1.8;

color:var(--text-muted);

}

.tech{

display:flex;

flex-wrap:wrap;

gap:10px;

margin:25px 0;

}

.tech span{

padding:8px 16px;

border-radius:999px;

background:rgba(124,92,255,.12);

border:1px solid rgba(124,92,255,.2);

color:#c4b5fd;

font-size:13px;

}

.features{

display:grid;

grid-template-columns:repeat(2,1fr);

gap:12px;

margin-bottom:25px;

color:var(--text);

}

.buttons{

display:flex;

gap:15px;

}

.buttons a{

padding:12px 22px;

border-radius:10px;

text-decoration:none;

font-weight:600;

transition:.3s;

}

.github{

background:#24292e;

color:white;

}

.demo{

background:linear-gradient(135deg,#7c5cff,#5b21b6);

color:white;

}

.buttons a:hover{

transform:translateY(-4px);

}

@media(max-width:900px){

.project{

grid-template-columns:1fr;

}

.project-image{

height:180px;

}

.features{

grid-template-columns:1fr;

}

}

`]
})
export class ProjectsComponent {}