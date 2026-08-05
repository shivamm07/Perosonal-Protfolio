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

    </div>

    <!-- Navigation -->

    <div class="menu-title">

        Navigation

    </div>

    <nav>

        <a routerLink="/" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active">

            🏠 <span>Home</span>

        </a>

        <a routerLink="/about" routerLinkActive="active">

            👤 <span>About</span>

        </a>

        <a routerLink="/skills" routerLinkActive="active">

            ⚡ <span>Skills</span>

        </a>

        <a routerLink="/projects" routerLinkActive="active">

            💼 <span>Projects</span>

        </a>

        <a routerLink="/experience" routerLinkActive="active">

            🏢 <span>Experience</span>

        </a>

        <a routerLink="/contact" routerLinkActive="active">

            ✉ <span>Contact</span>

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

padding:28px;

background:rgba(18,18,26,.65);

backdrop-filter:blur(20px);

border:1px solid rgba(255,255,255,.08);

border-radius:24px;

overflow-y:auto;

}

/* Profile */

.profile{

text-align:center;

padding-bottom:30px;

border-bottom:1px solid rgba(255,255,255,.08);

}

.avatar{

width:120px;

height:120px;

margin:auto;

padding:4px;

border-radius:50%;

background:linear-gradient(135deg,#7C5CFF,#38BDF8);

box-shadow:0 0 35px rgba(124,92,255,.35);

}

.avatar img{

width:100%;

height:100%;

object-fit:cover;

border-radius:50%;

}

.profile h2{

margin:18px 0 6px;

font-size:24px;

font-weight:700;

}

.profile p{

color:#94A3B8;

margin-bottom:18px;

}

.status{

display:inline-flex;

align-items:center;

gap:8px;

padding:10px 18px;

border-radius:999px;

background:#153826;

color:#4ADE80;

font-size:13px;

font-weight:600;

}

.dot{

width:8px;

height:8px;

background:#4ADE80;

border-radius:50%;

}

/* Titles */

.menu-title{

margin:28px 0 16px;

font-size:12px;

font-weight:700;

letter-spacing:2px;

text-transform:uppercase;

color:#7C869C;

}

/* Navigation */

nav{

display:flex;

flex-direction:column;

gap:10px;

}

nav a{

display:flex;

align-items:center;

gap:12px;

padding:14px 18px;

border-radius:14px;

text-decoration:none;

font-weight:600;

color:#CBD5E1;

transition:.3s;

}

nav a:hover{

background:rgba(124,92,255,.12);

transform:translateX(6px);

}

nav a.active{

background:linear-gradient(135deg,#7C5CFF,#5B21B6);

color:white;

box-shadow:0 12px 28px rgba(124,92,255,.35);

}

/* Chips */

.chips{

display:flex;

flex-wrap:wrap;

gap:10px;

}

.chips span{

padding:8px 14px;

border-radius:999px;

background:rgba(124,92,255,.12);

border:1px solid rgba(124,92,255,.22);

color:#C4B5FD;

font-size:12px;

transition:.3s;

}

.chips span:hover{

background:#7C5CFF;

color:white;

}

/* Bottom */

.bottom{

margin-top:auto;

padding-top:30px;

}

.social{

display:flex;

flex-direction:column;

gap:12px;

}

.social a{

padding:12px 18px;

border-radius:12px;

background:rgba(255,255,255,.04);

border:1px solid rgba(255,255,255,.06);

text-decoration:none;

color:#CBD5E1;

transition:.3s;

}

.social a:hover{

background:#7C5CFF;

color:white;

transform:translateX(6px);

}

@media(max-width:992px){

:host{

display:none;

}

}

`]
})
export class SidebarComponent {}