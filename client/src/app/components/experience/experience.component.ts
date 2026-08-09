import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="section">

      <span class="section-tag">// EXPERIENCE</span>

      <h2 class="section-title">
        Professional Experience
      </h2>

      <p class="description">
        My professional journey building enterprise software solutions,
        scalable backend systems and modern web applications.
      </p>

      <div class="timeline">

        <!-- Current Company -->

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
              Working on the FleetRMM enterprise platform for Konica Minolta,
              developing scalable backend APIs, authentication modules,
              notification services, Windows applications and Angular UI
              components.
            </p>

            <div class="tech">

              <span>.NET</span>
              <span>ASP.NET Core</span>
              <span>Angular</span>
              <span>SQL Server</span>
              <span>REST API</span>
              <span>Git</span>

            </div>

            <ul>

              <li>Developed enterprise backend services.</li>

              <li>Implemented REST APIs and authentication modules.</li>

              <li>Built Windows desktop features and notification services.</li>

              <li>Collaborated with Japanese clients and offshore teams.</li>

            </ul>

          </div>

        </div>

        <!-- Previous Role -->

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
              Started my professional career building business applications,
              learning enterprise software development, SQL Server,
              ASP.NET and Angular.
            </p>

            <div class="tech">

              <span>C#</span>
              <span>ASP.NET</span>
              <span>SQL Server</span>
              <span>JavaScript</span>
              <span>Git</span>

            </div>

            <ul>

              <li>Developed business application modules.</li>

              <li>Worked with SQL queries and stored procedures.</li>

              <li>Fixed production bugs and improved application stability.</li>

              <li>Participated in code reviews and feature development.</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  `,
  styles: [`

.description{
max-width:850px;
color:var(--text-muted);
line-height:1.8;
margin-bottom:50px;
font-size:17px;
}

.timeline{
position:relative;
margin-left:25px;
padding-left:40px;
border-left:2px solid var(--border);
}

.timeline-item{
position:relative;
margin-bottom:44px;
}

.timeline-dot{
position:absolute;
left:-53px;
top:30px;
width:16px;
height:16px;
border-radius:50%;
background:var(--primary);
border:4px solid var(--bg);
box-shadow:0 0 18px var(--primary-dim);
}

.timeline-card{
padding:28px;
}

.header{
display:flex;
justify-content:space-between;
align-items:flex-start;
margin-bottom:18px;
gap:20px;
}

.header h3{
margin:0;
font-size:23px;
font-family:var(--font-display);
color:var(--text);
}

.header h4{
margin:6px 0 0;
font-size:15.5px;
color:var(--text-muted);
font-weight:500;
}

.duration{
padding:7px 16px;
border-radius:8px;
background:var(--primary-dim);
color:var(--primary);
font-family:var(--font-mono);
font-size:12px;
font-weight:600;
white-space:nowrap;
}

.timeline-card p{
line-height:1.8;
color:var(--text-muted);
margin-bottom:22px;
font-size:15.5px;
}

.tech{
display:flex;
flex-wrap:wrap;
gap:9px;
margin-bottom:22px;
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

ul{
padding-left:20px;
margin:0;
}

li{
margin-bottom:11px;
line-height:1.8;
color:var(--text);
font-size:15px;
}

@media(max-width:768px){

.timeline{
margin-left:10px;
padding-left:25px;
}

.timeline-dot{
left:-38px;
}

.header{
flex-direction:column;
}

.duration{
align-self:flex-start;
}

}

`]
})
export class ExperienceComponent {}
