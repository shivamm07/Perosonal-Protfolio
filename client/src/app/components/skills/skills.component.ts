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
        Over the past three years, I've worked with modern technologies to
        build enterprise applications, scalable APIs and responsive web
        interfaces.
      </p>

      <div class="skills-grid">

        <div class="card card-hover">

          <h3>💻 Backend</h3>

          <div class="skill">
            <span>.NET 8 / .NET</span>
            <span>95%</span>
          </div>
          <div class="progress"><div style="width:95%"></div></div>

          <div class="skill">
            <span>ASP.NET Core</span>
            <span>95%</span>
          </div>
          <div class="progress"><div style="width:95%"></div></div>

          <div class="skill">
            <span>REST API</span>
            <span>90%</span>
          </div>
          <div class="progress"><div style="width:90%"></div></div>

          <div class="skill">
            <span>C#</span>
            <span>95%</span>
          </div>
          <div class="progress"><div style="width:95%"></div></div>

        </div>

        <div class="card card-hover">

          <h3>🎨 Frontend</h3>

          <div class="skill">
            <span>Angular</span>
            <span>90%</span>
          </div>
          <div class="progress"><div style="width:90%"></div></div>

          <div class="skill">
            <span>TypeScript</span>
            <span>88%</span>
          </div>
          <div class="progress"><div style="width:88%"></div></div>

          <div class="skill">
            <span>HTML5</span>
            <span>95%</span>
          </div>
          <div class="progress"><div style="width:95%"></div></div>

          <div class="skill">
            <span>CSS3</span>
            <span>90%</span>
          </div>
          <div class="progress"><div style="width:90%"></div></div>

        </div>

        <div class="card card-hover">

          <h3>🗄 Database</h3>

          <div class="skill">
            <span>SQL Server</span>
            <span>92%</span>
          </div>
          <div class="progress"><div style="width:92%"></div></div>

          <div class="skill">
            <span>Entity Framework</span>
            <span>90%</span>
          </div>
          <div class="progress"><div style="width:90%"></div></div>

          <div class="skill">
            <span>LINQ</span>
            <span>90%</span>
          </div>
          <div class="progress"><div style="width:90%"></div></div>

        </div>

        <div class="card card-hover">

          <h3>🛠 Tools</h3>

          <div class="tools">

            <span>Visual Studio</span>
            <span>VS Code</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Postman</span>
            <span>Azure DevOps</span>
            <span>Swagger</span>
            <span>NUnit</span>
            <span>Windows</span>
            <span>Docker</span>

          </div>

        </div>

      </div>

    </section>
  `,
  styles: [`

.description{

max-width:850px;

margin-bottom:50px;

font-size:17px;

line-height:1.8;

color:var(--text-muted);

}

.skills-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(340px,1fr));

gap:30px;

}

.card{

padding:30px;

}

.card h3{

margin-bottom:30px;

font-size:24px;

color:var(--text);

}

.skill{

display:flex;

justify-content:space-between;

margin-bottom:8px;

font-size:15px;

font-weight:600;

}

.progress{

height:8px;

background:rgba(255,255,255,.08);

border-radius:20px;

margin-bottom:22px;

overflow:hidden;

}

.progress div{

height:100%;

background:linear-gradient(90deg,#7c5cff,#38bdf8);

border-radius:20px;

}

.tools{

display:flex;

flex-wrap:wrap;

gap:14px;

}

.tools span{

padding:10px 18px;

background:rgba(124,92,255,.12);

border:1px solid rgba(124,92,255,.25);

border-radius:999px;

color:#c4b5fd;

font-size:14px;

transition:.3s;

}

.tools span:hover{

transform:translateY(-4px);

background:rgba(124,92,255,.2);

}

`]
})
export class SkillsComponent {}