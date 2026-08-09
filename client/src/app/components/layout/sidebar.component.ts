import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `

<div class="sidebar">

    <!-- Profile -->

    <div class="profile">

        <div class="avatar">

            <img
                src="assets/images/profile.png"
                alt="Shivam Prasad">

        </div>

        <h2>Shivam Prasad</h2>

        <p>Senior .NET Developer</p>

        <div class="status">

            <span class="dot"></span>

            Available for Work

        </div>

        <div class="stat-row">

            <div class="stat">
                <span class="value">3+</span>
                <span class="label">yrs</span>
            </div>

            <div class="stat">
                <span class="value">20+</span>
                <span class="label">APIs</span>
            </div>

            <div class="stat">
                <span class="value">99.9%</span>
                <span class="label">uptime*</span>
            </div>

        </div>

    </div>

    <!-- Navigation -->

    <div class="menu-title">

        Navigation

    </div>

    <nav>

        <a routerLink="/" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active">

            <span class="nav-label">🏠 Home</span>
            <span class="endpoint">/</span>

        </a>

        <a routerLink="/about" routerLinkActive="active">

            <span class="nav-label">👤 About</span>
            <span class="endpoint">/about</span>

        </a>

        <a routerLink="/skills" routerLinkActive="active">

            <span class="nav-label">⚡ Skills</span>
            <span class="endpoint">/skills</span>

        </a>

        <a routerLink="/projects" routerLinkActive="active">

            <span class="nav-label">💼 Projects</span>
            <span class="endpoint">/projects</span>

        </a>

        <a routerLink="/experience" routerLinkActive="active">

            <span class="nav-label">🏢 Experience</span>
            <span class="endpoint">/experience</span>

        </a>

        <a routerLink="/contact" routerLinkActive="active">

            <span class="nav-label">✉ Contact</span>
            <span class="endpoint">/contact</span>

        </a>

    </nav>

    <!-- Tech -->

    <div class="menu-title">

        Technologies

    </div>

    <div class="chips">

        <span>.NET</span>
        <span>Angular</span>
        <span>SQL</span>
        <span>ASP.NET</span>
        <span>Web API</span>
        <span>Git</span>

    </div>

    <!-- Footer -->

    <div class="bottom">

        <div class="social">

            <a href="https://github.com/yourusername" target="_blank">

                GitHub

            </a>

            <a href="https://linkedin.com/in/yourprofile" target="_blank">

                LinkedIn

            </a>

            <a href="mailto:yourmail@gmail.com">

                Email

            </a>

        </div>

    </div>

</div>

`,
styles:[`

:host{

display:block;

height:100%;

}

.sidebar{

height:100%;

display:flex;

flex-direction:column;

padding:26px;

background:var(--surface);

backdrop-filter:blur(20px);

border:1px solid var(--border);

border-radius:20px;

overflow-y:auto;

}

/* Profile */

.profile{

text-align:center;

padding-bottom:24px;

border-bottom:1px solid var(--border);

}

.avatar{

width:104px;

height:104px;

margin:auto;

padding:3px;

border-radius:50%;

background:linear-gradient(135deg,var(--primary),#38BDF8);

box-shadow:0 0 30px var(--primary-dim);

}

.avatar img{

width:100%;

height:100%;

object-fit:cover;

border-radius:50%;

}

.profile h2{

margin:16px 0 4px;

font-size:21px;

font-weight:700;

font-family:var(--font-display);

color:var(--text);

}

.profile p{

color:var(--text-muted);

margin-bottom:16px;

font-size:14px;

}

.status{

display:inline-flex;

align-items:center;

gap:8px;

padding:8px 16px;

border-radius:8px;

background:var(--primary-dim);

color:var(--primary);

font-family:var(--font-mono);

font-size:12px;

font-weight:600;

}

.dot{

width:7px;

height:7px;

background:var(--success);

border-radius:50%;

box-shadow:0 0 0 3px var(--primary-dim);

}

.stat-row{

display:flex;

justify-content:space-between;

margin-top:20px;

padding-top:18px;

border-top:1px solid var(--border);

}

.stat{

display:flex;

flex-direction:column;

align-items:center;

gap:2px;

}

.stat .value{

font-family:var(--font-mono);

font-weight:600;

font-size:15px;

color:var(--text);

}

.stat .label{

font-family:var(--font-mono);

font-size:10.5px;

color:var(--text-muted);

}

/* Titles */

.menu-title{

margin:24px 0 14px;

font-size:11px;

font-weight:700;

letter-spacing:1.5px;

text-transform:uppercase;

color:var(--text-muted);

font-family:var(--font-mono);

}

/* Navigation */

nav{

display:flex;

flex-direction:column;

gap:4px;

}

nav a{

display:flex;

align-items:center;

justify-content:space-between;

gap:12px;

padding:12px 14px;

border-radius:10px;

text-decoration:none;

font-weight:600;

font-size:14.5px;

color:var(--text-muted);

transition:.25s ease;

}

nav a .endpoint{

font-size:10.5px;

opacity:.7;

}

nav a:hover{

background:var(--surface-light);

color:var(--text);

transform:translateX(4px);

}

nav a.active{

background:var(--primary-dim);

color:var(--primary);

}

nav a.active .endpoint{

color:var(--primary);

opacity:1;

}

/* Chips */

.chips{

display:flex;

flex-wrap:wrap;

gap:8px;

}

.chips span{

padding:7px 13px;

border-radius:7px;

background:var(--primary-dim);

border:1px solid rgba(0,229,160,.2);

color:var(--primary);

font-family:var(--font-mono);

font-size:11.5px;

transition:.25s ease;

}

.chips span:hover{

background:var(--primary);

color:#04120D;

}

/* Bottom */

.bottom{

margin-top:auto;

padding-top:26px;

}

.social{

display:flex;

flex-direction:column;

gap:10px;

}

.social a{

padding:11px 16px;

border-radius:10px;

background:var(--surface-light);

border:1px solid var(--border);

text-decoration:none;

color:var(--text-muted);

font-size:14px;

transition:.25s ease;

}

.social a:hover{

border-color:var(--primary);

color:var(--primary);

transform:translateX(4px);

}

@media(max-width:992px){

:host{

display:none;

}

}

`]
})
export class SidebarComponent {}
