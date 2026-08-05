import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `

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

        <button class="theme">

            🌙

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

.navbar{

height:82px;

display:flex;

justify-content:space-between;

align-items:center;

padding:0 40px;

background:rgba(18,18,26,.75);

backdrop-filter:blur(20px);

border-bottom:1px solid rgba(255,255,255,.08);

}

.logo{

display:flex;

align-items:center;

gap:14px;

}

.logo-box{

width:52px;

height:52px;

display:flex;

justify-content:center;

align-items:center;

border-radius:16px;

background:linear-gradient(135deg,#7C5CFF,#5B21B6);

font-size:22px;

font-weight:700;

color:white;

box-shadow:0 10px 30px rgba(124,92,255,.35);

}

.logo-text h2{

margin:0;

font-size:22px;

font-weight:700;

color:white;

}

.logo-text span{

font-size:13px;

color:#94A3B8;

}

nav{

display:flex;

gap:8px;

}

nav a{

padding:12px 20px;

border-radius:12px;

text-decoration:none;

font-weight:600;

color:#CBD5E1;

transition:.3s;

}

nav a:hover{

background:rgba(124,92,255,.12);

color:white;

}

nav a.active{

background:linear-gradient(135deg,#7C5CFF,#5B21B6);

color:white;

box-shadow:0 12px 28px rgba(124,92,255,.35);

}

.actions{

display:flex;

align-items:center;

gap:14px;

}

.resume{

padding:12px 22px;

border-radius:12px;

background:linear-gradient(135deg,#7C5CFF,#5B21B6);

color:white;

text-decoration:none;

font-weight:600;

transition:.3s;

}

.resume:hover{

transform:translateY(-2px);

box-shadow:0 15px 35px rgba(124,92,255,.35);

}

.theme{

width:46px;

height:46px;

border:none;

border-radius:50%;

cursor:pointer;

background:rgba(255,255,255,.05);

color:white;

font-size:18px;

transition:.3s;

}

.theme:hover{

background:#7C5CFF;

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

`]
})
export class TopbarComponent {}