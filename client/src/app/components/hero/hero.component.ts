import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [RouterLink],

    template: `

<section class="section hero">

    <!-- Availability -->

    <span class="section-tag">
        <span class="status-dot"></span>
        AVAILABLE FOR WORK
    </span>


    <!-- Introduction -->

    <h1 class="name">
        Shivamkumar Prasad
    </h1>

    <h2 class="tagline">
        .NET Backend Developer
        <span class="divider">·</span>
        C# · ASP.NET Core · Web API
    </h2>


    <!-- Description -->

    <p class="intro">
        .NET Developer with 3+ years of experience building
        scalable backend applications, REST APIs and
        enterprise solutions using C#, ASP.NET Core and SQL Server.
    </p>


    <!-- Actions -->

    <div class="actions">

        <a
            class="btn btn-primary"
            href="assets/resume.pdf"
            target="_blank">

            <i class="fa-regular fa-file-lines"></i>
            View Resume
            <span class="arrow">↗</span>

        </a>


        <a
            class="btn btn-outline"
            href="mailto:shivamk.prasad07@gmail.com">

            <i class="fa-regular fa-envelope"></i>
            Get In Touch

        </a>

    </div>


    <!-- Quick Stats -->

    <div class="quick-stats">

        <div class="stat">

            <span class="value">
                3+
            </span>

            <span class="label">
                Years Experience
            </span>

        </div>


        <div class="stat">

            <span class="value">
                20+
            </span>

            <span class="label">
                REST APIs
            </span>

        </div>


        <div class="stat">

            <span class="value">
                .NET
            </span>

            <span class="label">
                Backend Development
            </span>

        </div>

    </div>


    <!-- Next Section -->

    <a
        class="next-link"
        routerLink="/about">

        Explore My Work
        <span>→</span>

    </a>

</section>

`,

    styles: [`

/* ============================================================
   HERO
============================================================ */

.hero {

    padding-top: 70px;

    padding-bottom: 70px;

}


/* ============================================================
   NAME
============================================================ */

.name {

    margin: 18px 0 8px;

    font-size: clamp(2.5rem, 5vw, 4.2rem);

    line-height: 1.05;

    font-weight: 700;

    letter-spacing: -0.035em;

    color: var(--text);

}


/* ============================================================
   TAGLINE
============================================================ */

.tagline {

    margin: 0 0 22px;

    font-family: var(--font-mono);

    font-size: clamp(1rem, 2vw, 1.25rem);

    font-weight: 500;

    line-height: 1.6;

    color: var(--text-muted);

}


.tagline .divider {

    margin: 0 7px;

    color: var(--primary);

}


/* ============================================================
   INTRO
============================================================ */

.intro {

    max-width: 720px;

    margin: 0 0 30px;

    font-size: 17px;

    line-height: 1.85;

    color: var(--text-muted);

}


/* ============================================================
   ACTIONS
============================================================ */

.actions {

    display: flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 42px;

}


.actions .btn {

    gap: 9px;

}


.actions i {

    font-size: 14px;

}


.arrow {

    font-size: 16px;

    margin-left: 2px;

    transition: transform .25s ease;

}


.btn-primary:hover .arrow {

    transform: translate(2px, -2px);

}


/* ============================================================
   QUICK STATS
============================================================ */

.quick-stats {

    display: flex;

    align-items: stretch;

    max-width: 720px;

    padding: 26px 0;

    margin-bottom: 32px;

    border-top: 1px solid var(--border);

    border-bottom: 1px solid var(--border);

}


.quick-stats .stat {

    min-width: 170px;

    padding-right: 35px;

    margin-right: 35px;

    display: flex;

    flex-direction: column;

    gap: 5px;

    border-right: 1px solid var(--border);

}


.quick-stats .stat:last-child {

    border-right: none;

    margin-right: 0;

    padding-right: 0;

}


.quick-stats .value {

    font-family: var(--font-display);

    font-size: 27px;

    font-weight: 700;

    line-height: 1;

    color: var(--primary);

}


.quick-stats .label {

    font-family: var(--font-mono);

    font-size: 11px;

    line-height: 1.5;

    color: var(--text-muted);

}


/* ============================================================
   NEXT LINK
============================================================ */

.next-link {

    display: inline-flex;

    align-items: center;

    gap: 8px;

    color: var(--text-muted);

    text-decoration: none;

    font-size: 14px;

    font-weight: 500;

    transition: .25s ease;

}


.next-link span {

    transition: transform .25s ease;

}


.next-link:hover {

    color: var(--primary);

}


.next-link:hover span {

    transform: translateX(5px);

}


/* ============================================================
   TABLET
============================================================ */

@media (max-width: 768px) {

    .hero {

        padding-top: 50px;

    }


    .quick-stats {

        gap: 0;

    }


    .quick-stats .stat {

        min-width: auto;

        flex: 1;

        padding-right: 20px;

        margin-right: 20px;

    }

}


/* ============================================================
   MOBILE
============================================================ */

@media (max-width: 600px) {

    .hero {

        padding-top: 35px;

        padding-bottom: 45px;

    }


    .name {

        font-size: 2.35rem;

    }


    .tagline {

        font-size: 0.9rem;

    }


    .intro {

        font-size: 15px;

        line-height: 1.75;

    }


    .actions {

        flex-wrap: wrap;

        margin-bottom: 35px;

    }


    .quick-stats {

        flex-wrap: wrap;

        row-gap: 22px;

    }


    .quick-stats .stat {

        flex: 1 1 40%;

        border-right: none;

        margin-right: 0;

        padding-right: 10px;

    }


    .quick-stats .value {

        font-size: 24px;

    }

}

`]
})
export class HeroComponent {
}