import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,

  template: `

<section class="section">

    <!-- Section Header -->

    <h2 class="section-title">
        .NET Backend Developer
    </h2>


    <!-- Introduction -->

    <p class="intro">

        I'm <strong>Shivamkumar Prasad</strong>, a .NET Backend Developer
        with <strong>3+ years of experience</strong> building
        enterprise applications and backend services using
        <strong>C#, ASP.NET Core, REST APIs, SQL Server</strong>
        and modern development practices.

    </p>


    <p class="intro">

        Currently working at
        <strong>Acty System India Pvt. Ltd.</strong>,
        I contribute to enterprise software solutions focused on
        backend API development, authentication, device management,
        system integration and application performance.

    </p>


    <!-- Highlights -->

    <div class="highlights">


        <!-- Backend -->

        <div class="card card-hover">

            <div class="icon">
                <i class="fa-solid fa-server"></i>
            </div>

            <h3>
                Backend Development
            </h3>

            <p>
                Building scalable REST APIs and backend services
                using ASP.NET Core, C#, Entity Framework,
                SQL Server and clean architecture principles.
            </p>

        </div>


        <!-- Frontend -->

        <div class="card card-hover">

            <div class="icon">
                <i class="fa-solid fa-laptop-code"></i>
            </div>

            <h3>
                Frontend Development
            </h3>

            <p>
                Developing responsive Angular applications
                with reusable components, TypeScript and
                modern UI development practices.
            </p>

        </div>


        <!-- Database -->

        <div class="card card-hover">

            <div class="icon">
                <i class="fa-solid fa-database"></i>
            </div>

            <h3>
                Database
            </h3>

            <p>
                Working with SQL Server, database design,
                queries, stored procedures and performance
                optimization for enterprise applications.
            </p>

        </div>


        <!-- Problem Solving -->

        <div class="card card-hover">

            <div class="icon">
                <i class="fa-solid fa-code"></i>
            </div>

            <h3>
                Problem Solving
            </h3>

            <p>
                Focused on writing clean, maintainable and
                production-ready code while solving complex
                application and performance challenges.
            </p>

        </div>

    </div>


    <!-- Achievements -->

    <div class="achievement">


        <div class="item">

            <h3>
                3+
            </h3>

            <span>
                Years Experience
            </span>

        </div>


        <div class="item">

            <h3>
                10+
            </h3>

            <span>
                Enterprise Features
            </span>

        </div>


        <div class="item">

            <h3>
                20+
            </h3>

            <span>
                REST APIs
            </span>

        </div>


        <div class="item">

            <h3>
                1
            </h3>

            <span>
                Enterprise Platform
            </span>

        </div>


    </div>

</section>

`,

  styles: [`

/* ============================================================
   INTRODUCTION
============================================================ */

.intro {

    max-width: 900px;

    margin: 0 0 24px;

    color: var(--text-muted);

    font-size: 17px;

    line-height: 1.9;

}


.intro strong {

    color: var(--text);

}


/* ============================================================
   HIGHLIGHTS
============================================================ */

.highlights {

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(260px, 1fr));

    gap: 22px;

    margin-top: 46px;

}


/* ============================================================
   CARDS
============================================================ */

.card {

    padding: 28px;

}


/* ============================================================
   ICON
============================================================ */

.icon {

    width: 48px;

    height: 48px;

    display: flex;

    align-items: center;

    justify-content: center;

    margin-bottom: 18px;

    border-radius: 11px;

    background: var(--primary-dim);

    color: var(--primary);

    font-size: 20px;

}


/* ============================================================
   CARD TITLE
============================================================ */

.card h3 {

    margin: 0 0 12px;

    color: var(--text);

    font-size: 20px;

}


/* ============================================================
   CARD DESCRIPTION
============================================================ */

.card p {

    margin: 0;

    line-height: 1.8;

    color: var(--text-muted);

    font-size: 15px;

}


/* ============================================================
   ACHIEVEMENTS
============================================================ */

.achievement {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;

    margin-top: 56px;

}


/* ============================================================
   ACHIEVEMENT ITEM
============================================================ */

.item {

    padding: 24px;

    text-align: center;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: 16px;

    transition: .25s ease;

}


.item:hover {

    transform: translateY(-5px);

    border-color: var(--primary);

}


/* ============================================================
   ACHIEVEMENT VALUE
============================================================ */

.item h3 {

    margin: 0;

    font-size: 34px;

    font-family: var(--font-display);

    color: var(--primary);

}


/* ============================================================
   ACHIEVEMENT LABEL
============================================================ */

.item span {

    display: block;

    margin-top: 8px;

    color: var(--text-muted);

    font-size: 12px;

    font-family: var(--font-mono);

}


/* ============================================================
   TABLET
============================================================ */

@media(max-width: 900px) {

    .achievement {

        grid-template-columns:
            repeat(2, 1fr);

    }

}


/* ============================================================
   MOBILE
============================================================ */

@media(max-width: 600px) {

    .intro {

        font-size: 15px;

    }


    .achievement {

        grid-template-columns: 1fr;

    }


    .highlights {

        grid-template-columns: 1fr;

    }

}

`]
})
export class AboutComponent {}