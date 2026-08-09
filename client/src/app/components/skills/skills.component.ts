import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="section">

      <span class="section-tag">// SKILLS</span>

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

grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

gap:24px;

}

.card{

padding:28px;

}

.card h3{

margin-bottom:26px;

font-size:20px;

font-family:var(--font-display);

color:var(--text);

}

.skill{

display:flex;

justify-content:space-between;

margin-bottom:8px;

font-size:14px;

font-weight:600;

color:var(--text);

}

.skill span:last-child{

font-family:var(--font-mono);

color:var(--text-muted);

font-weight:500;

}

.progress{

height:6px;

background:var(--surface-light);

border-radius:20px;

margin-bottom:20px;

overflow:hidden;

}

.progress div{

height:100%;

background:var(--primary);

border-radius:20px;

}

.tools{

display:flex;

flex-wrap:wrap;

gap:10px;

}

.tools span{

padding:9px 16px;

background:var(--primary-dim);

border:1px solid rgba(0,229,160,.22);

border-radius:8px;

color:var(--primary);

font-family:var(--font-mono);

font-size:12.5px;

transition:.25s ease;

}

.tools span:hover{

transform:translateY(-3px);

background:var(--primary);

color:#04120D;

}

`]
})
export class SkillsComponent {}
