import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `

<header class="navbar">

    <!-- Logo -->

    <a routerLink="/" class="logo">

        <div class="logo-box">
            <i class="fa-solid fa-code"></i>
        </div>

        <div class="logo-text">

            <h2>Shivam</h2>

            <span>.NET Developer</span>

        </div>

    </a>


    <!-- Navigation -->

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


    <!-- Actions -->

    <div class="actions">

        <a
            href="assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="resume">

            <i class="fa-regular fa-file-lines"></i>
            <span>Resume</span>

        </a>


        <button
            class="theme"
            type="button"
            (click)="theme.toggle()"
            [attr.aria-label]="theme.theme() === 'dark'
                ? 'Switch to light theme'
                : 'Switch to dark theme'">

            <i
                *ngIf="theme.theme() === 'dark'"
                class="fa-solid fa-sun">
            </i>

            <i
                *ngIf="theme.theme() === 'light'"
                class="fa-solid fa-moon">
            </i>

        </button>

    </div>

</header>

`,
  styles: [`

:host {
    display: block;
    position: sticky;
    top: 0;
    z-index: 1000;
}


/* =========================
   Navbar
========================= */

.navbar {

    height: 82px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 46px;

    background: rgba(18, 23, 31, 0.82);

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    border-bottom: 1px solid var(--border);

}


/* Light Theme */

[data-theme="light"] .navbar {

    background: rgba(255, 255, 255, 0.82);

}


/* =========================
   Logo
========================= */

.logo {

    display: flex;
    align-items: center;

    gap: 13px;

    text-decoration: none;

    min-width: 210px;

}


/* Logo Icon */

.logo-box {

    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 13px;

    background: var(--primary);

    color: #04120D;

    font-size: 19px;

    box-shadow:
        0 8px 24px rgba(0, 229, 160, 0.22);

    transition: 0.25s ease;

}


.logo:hover .logo-box {

    transform: translateY(-2px);

    box-shadow:
        0 12px 30px rgba(0, 229, 160, 0.32);

}


/* Logo Text */

.logo-text {

    display: flex;
    flex-direction: column;

    gap: 2px;

}


.logo-text h2 {

    margin: 0;

    font-size: 20px;

    line-height: 1.1;

    font-weight: 700;

    color: var(--text);

    font-family: var(--font-display);

}


.logo-text span {

    font-size: 12px;

    letter-spacing: 0.3px;

    color: var(--text-muted);

    font-family: var(--font-mono);

}


/* =========================
   Navigation
========================= */

nav {

    display: flex;
    align-items: center;

    gap: 5px;

}


nav a {

    position: relative;

    padding: 11px 17px;

    border-radius: 9px;

    color: var(--text-muted);

    text-decoration: none;

    font-size: 14px;

    font-weight: 600;

    transition:
        background 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;

}


nav a:hover {

    background: var(--surface-light);

    color: var(--text);

}


nav a.active {

    background: var(--primary-dim);

    color: var(--primary);

}


/* =========================
   Actions
========================= */

.actions {

    display: flex;
    align-items: center;

    gap: 11px;

    min-width: 210px;

    justify-content: flex-end;

}


/* Resume */

.resume {

    height: 44px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    padding: 0 20px;

    border-radius: 10px;

    background: var(--primary);

    color: #04120D;

    text-decoration: none;

    font-size: 14px;

    font-weight: 700;

    transition: 0.25s ease;

}


.resume i {

    font-size: 14px;

}


.resume:hover {

    transform: translateY(-2px);

    box-shadow:
        0 12px 28px rgba(0, 229, 160, 0.28);

}


/* =========================
   Theme Button
========================= */

.theme {

    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--border-strong);

    border-radius: 50%;

    background: var(--surface);

    color: var(--text);

    cursor: pointer;

    font-size: 16px;

    transition: 0.25s ease;

}


.theme:hover {

    color: var(--primary);

    border-color: var(--primary);

    transform: rotate(12deg);

}


.theme i {

    transition: 0.2s ease;

}


/* =========================
   Tablet
========================= */

@media (max-width: 1100px) {

    .navbar {

        padding: 0 24px;

    }

    nav {

        gap: 2px;

    }

    nav a {

        padding: 10px 12px;

    }

    .logo,
    .actions {

        min-width: auto;

    }

}


/* =========================
   Mobile
========================= */

@media (max-width: 800px) {

    .navbar {

        height: 72px;

        padding: 0 18px;

    }

    .logo-box {

        width: 43px;
        height: 43px;

        border-radius: 11px;

    }

    .logo-text h2 {

        font-size: 18px;

    }

    .logo-text span {

        font-size: 11px;

    }

    nav {

        display: none;

    }

    .resume {

        width: 44px;
        height: 44px;

        padding: 0;

    }

    .resume span {

        display: none;

    }

    .resume i {

        font-size: 16px;

    }

}


/* =========================
   Small Mobile
========================= */

@media (max-width: 480px) {

    .navbar {

        padding: 0 14px;

    }

    .logo {

        gap: 9px;

    }

    .logo-box {

        width: 40px;
        height: 40px;

    }

    .logo-text h2 {

        font-size: 17px;

    }

    .logo-text span {

        font-size: 10px;

    }

    .actions {

        gap: 7px;

    }

    .theme {

        width: 40px;
        height: 40px;

    }

    .resume {

        width: 40px;
        height: 40px;

    }

}

`]
})
export class TopbarComponent {

    theme = inject(ThemeService);

    buildTag = `BUILD ${new Date().getFullYear()}.${String(
        new Date().getMonth() + 1
    ).padStart(2, '0')}`;

}