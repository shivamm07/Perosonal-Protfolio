import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `

<div class="statusbar">
  <span class="status-dot"></span>
  <span>ALL SYSTEMS OPERATIONAL</span>
  <span class="sep">·</span>
  <span>UPTIME 3Y 2MO</span>
  <span class="sep">·</span>
  <span>{{ buildTag }}</span>
</div>

<header class="navbar">

    <div class="logo">

        <div class="logo-box">

            &lt;/&gt;

        </div>

        <div class="logo-text">

            <h2>Shivam</h2>

            <span>.NET Developer</span>

        </div>

    </div>

    <nav>

        <a
            routerLink="/"
            [routerLinkActiveOptions]="{exact:true}"
            routerLinkActive="active">

            Home

        </a>

        <a
            routerLink="/about"
            routerLinkActive="active">

            About

        </a>

        <a
            routerLink="/skills"
            routerLinkActive="active">

            Skills

        </a>

        <a
            routerLink="/projects"
            routerLinkActive="active">

            Projects

        </a>

        <a
            routerLink="/experience"
            routerLinkActive="active">

            Experience

        </a>

        <a
            routerLink="/contact"
            routerLinkActive="active">

            Contact

        </a>

    </nav>

    <div class="actions">

        <a
            href="assets/resume.pdf"
            target="_blank"
            class="resume">

            Resume

        </a>

        <button
            class="theme"
            type="button"
            (click)="theme.toggle()"
            [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'">

            <span *ngIf="theme.theme() === 'dark'">☀</span>
            <span *ngIf="theme.theme() === 'light'">☾</span>

        </button>

    </div>

</header>

`,
styles:[`

:host{

display:block;

position:sticky;

top:0;

z-index:1000;

}

.statusbar{

display:flex;

align-items:center;

justify-content:center;

gap:10px;

padding:7px 20px;

font-family:var(--font-mono);

font-size:11.5px;

letter-spacing:.4px;

color:var(--text-muted);

background:var(--bg-elevated);

border-bottom:1px solid var(--border);

}

.statusbar .status-dot{

box-shadow:0 0 0 3px var(--primary-dim);

}

.statusbar .sep{

color:var(--border-strong);

}

.navbar{

height:82px;

display:flex;

justify-content:space-between;

align-items:center;

padding:0 40px;

background:rgba(18,23,31,.75);

backdrop-filter:blur(20px);

border-bottom:1px solid var(--border);

}

[data-theme="light"] .navbar{

background:rgba(255,255,255,.75);

}

.logo{

display:flex;

align-items:center;

gap:14px;

}

.logo-box{

width:50px;

height:50px;

display:flex;

justify-content:center;

align-items:center;

border-radius:12px;

background:var(--primary);

font-size:20px;

font-weight:700;

color:#04120D;

font-family:var(--font-mono);

box-shadow:0 10px 26px rgba(0,229,160,.25);

}

.logo-text h2{

margin:0;

font-size:20px;

font-weight:700;

color:var(--text);

font-family:var(--font-display);

}

.logo-text span{

font-size:12.5px;

font-family:var(--font-mono);

color:var(--text-muted);

}

nav{

display:flex;

gap:6px;

}

nav a{

padding:11px 18px;

border-radius:9px;

text-decoration:none;

font-weight:600;

font-size:14.5px;

color:var(--text-muted);

transition:.25s ease;

}

nav a:hover{

background:var(--surface-light);

color:var(--text);

}

nav a.active{

background:var(--primary-dim);

color:var(--primary);

}

.actions{

display:flex;

align-items:center;

gap:12px;

}

.resume{

padding:11px 22px;

border-radius:9px;

background:var(--primary);

color:#04120D;

text-decoration:none;

font-weight:700;

transition:.25s ease;

}

.resume:hover{

transform:translateY(-2px);

box-shadow:0 15px 32px rgba(0,229,160,.3);

}

.theme{

width:44px;

height:44px;

border:1px solid var(--border-strong);

border-radius:50%;

cursor:pointer;

background:var(--surface);

color:var(--text);

font-size:17px;

transition:.25s ease;

}

.theme:hover{

border-color:var(--primary);

color:var(--primary);

transform:rotate(15deg);

}

@media(max-width:1100px){

nav{

display:none;

}

.navbar{

padding:0 20px;

}

}

@media(max-width:600px){

.statusbar{

font-size:10px;

gap:6px;

}

.statusbar .sep:nth-of-type(2),
.statusbar span:nth-last-child(1){

display:none;

}

}

`]
})
export class TopbarComponent {

  theme = inject(ThemeService);

  buildTag = `BUILD ${new Date().getFullYear()}.${String(new Date().getMonth() + 1).padStart(2, '0')}`;

}
