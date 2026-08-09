import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="section">

      <span class="section-tag">// ABOUT</span>

      <h2 class="section-title">
        Passionate Software Engineer
      </h2>

      <p class="intro">
        I'm <strong>Shivam Prasad</strong>, a Full Stack .NET Developer with
        nearly <strong>3 years of experience</strong> developing enterprise
        applications using <strong>.NET, ASP.NET Core, Angular, SQL Server,
        REST APIs</strong> and modern development practices.
      </p>

      <p class="intro">
        Currently working at
        <strong>Acty System India Pvt. Ltd.</strong>, I contribute to
        enterprise solutions for
        <strong>Konica Minolta's FleetRMM platform</strong>,
        developing scalable backend APIs, Windows applications,
        authentication modules and device management features.
      </p>

      <div class="highlights">

        <div class="card card-hover">
          <div class="icon">💻</div>

          <h3>Backend Development</h3>

          <p>
            Building scalable REST APIs using
            ASP.NET Core, C#, Entity Framework,
            SQL Server and Clean Architecture.
          </p>
        </div>

        <div class="card card-hover">
          <div class="icon">⚡</div>

          <h3>Frontend Development</h3>

          <p>
            Creating responsive Angular applications
            with reusable components and modern UI.
          </p>
        </div>

        <div class="card card-hover">
          <div class="icon">🗄️</div>

          <h3>Database</h3>

          <p>
            Designing optimized SQL Server databases,
            stored procedures and performance tuning.
          </p>
        </div>

        <div class="card card-hover">
          <div class="icon">🚀</div>

          <h3>Problem Solving</h3>

          <p>
            Passionate about writing clean,
            maintainable and production-ready code
            following best development practices.
          </p>
        </div>

      </div>

      <div class="achievement">

        <div class="item">
          <h3>3+</h3>
          <span>Years Experience</span>
        </div>

        <div class="item">
          <h3>10+</h3>
          <span>Enterprise Features</span>
        </div>

        <div class="item">
          <h3>20+</h3>
          <span>REST APIs</span>
        </div>

        <div class="item">
          <h3>100%</h3>
          <span>Project Commitment</span>
        </div>

      </div>

    </section>
  `,
  styles: [`

.intro{

color:var(--text-muted);

font-size:17px;

line-height:1.9;

margin-bottom:24px;

max-width:900px;

}

.intro strong{

color:var(--text);

}

.highlights{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

gap:22px;

margin-top:46px;

}

.card{

padding:28px;

}

.icon{

font-size:38px;

margin-bottom:16px;

}

.card h3{

margin:0 0 12px;

color:var(--text);

font-size:20px;

}

.card p{

margin:0;

line-height:1.8;

color:var(--text-muted);

font-size:15px;

}

.achievement{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:20px;

margin-top:56px;

}

.item{

text-align:center;

padding:24px;

background:var(--surface);

border:1px solid var(--border);

border-radius:16px;

transition:.25s ease;

}

.item:hover{

transform:translateY(-5px);

border-color:var(--primary);

}

.item h3{

margin:0;

font-size:36px;

font-family:var(--font-display);

color:var(--primary);

}

.item span{

display:block;

margin-top:8px;

color:var(--text-muted);

font-size:13.5px;

font-family:var(--font-mono);

}

@media(max-width:900px){

.achievement{

grid-template-columns:repeat(2,1fr);

}

}

@media(max-width:600px){

.achievement{

grid-template-columns:1fr;

}

}

`]
})
export class AboutComponent {}
