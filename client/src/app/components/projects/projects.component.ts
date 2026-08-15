import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    standalone: true,

    template: `

<section class="section">

    <!-- Section Header -->

    <h2 class="section-title">
        Featured Projects
    </h2>

    <p class="description">
        A selection of enterprise and personal projects focused on
        scalable backend development, API design, system integration,
        performance, and modern user experiences.
    </p>


    <div class="projects">


        <!-- =====================================================
             ENTERPRISE PROJECT
        ====================================================== -->

        <div class="project card card-hover">

            <div class="project-image">

                <i class="fa-solid fa-server"></i>

            </div>


            <div class="project-content">

                <div class="project-header">

                    <h3>
                        Enterprise Device Management Platform
                    </h3>

                    <span class="badge">
                        Enterprise
                    </span>

                </div>


                <p>
                    Enterprise-scale device management platform designed
                    to monitor, manage, and configure network-connected
                    devices. Contributed to backend APIs, authentication,
                    device management workflows, notifications, and
                    service-layer development.
                </p>


                <div class="tech">

                    <span>.NET</span>
                    <span>ASP.NET Core</span>
                    <span>C#</span>
                    <span>Angular</span>
                    <span>SQL Server</span>
                    <span>REST API</span>

                </div>


                <div class="features">

                    <div>
                        <i class="fa-solid fa-check"></i>
                        REST API Development
                    </div>

                    <div>
                        <i class="fa-solid fa-check"></i>
                        Authentication & Authorization
                    </div>

                    <div>
                        <i class="fa-solid fa-check"></i>
                        Device Management
                    </div>

                    <div>
                        <i class="fa-solid fa-check"></i>
                        Backend Services
                    </div>

                </div>


                <div class="buttons">

                    <span class="demo enterprise-label">
                        Enterprise Project
                    </span>

                </div>

            </div>

        </div>



        <!-- =====================================================
             PERSONAL PROJECT
        ====================================================== -->

        <div class="project card card-hover">

            <div class="project-image">

                <i class="fa-solid fa-code"></i>

            </div>


            <div class="project-content">

                <div class="project-header">

                    <h3>
                        Developer Portfolio
                    </h3>

                    <span class="badge personal">
                        Personal
                    </span>

                </div>


                <p>
                    A responsive developer portfolio showcasing
                    professional experience, technical skills,
                    projects, and contact information through a
                    modern and responsive interface.
                </p>


                <div class="tech">

                    <span>Angular</span>
                    <span>TypeScript</span>
                    <span>HTML</span>
                    <span>CSS</span>

                </div>


                <div class="features">

                    <div>
                        <i class="fa-solid fa-check"></i>
                        Responsive Design
                    </div>

                    <div>
                        <i class="fa-solid fa-check"></i>
                        Standalone Components
                    </div>

                    <div>
                        <i class="fa-solid fa-check"></i>
                        Modern UI
                    </div>

                    <div>
                        <i class="fa-solid fa-check"></i>
                        Dark & Light Theme
                    </div>

                </div>


                <div class="buttons">

                    <a
                        href="https://github.com/shivamm07"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="github">

                        <i class="fa-brands fa-github"></i>
                        GitHub

                    </a>


                    <a
                        href="#"
                        class="demo">

                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        Live Demo

                    </a>

                </div>

            </div>

        </div>

    </div>

</section>

`,

    styles: [`

/* ============================================================
   DESCRIPTION
============================================================ */

.description {

    max-width: 900px;

    color: var(--text-muted);

    font-size: 17px;

    line-height: 1.8;

    margin-bottom: 50px;

}


/* ============================================================
   PROJECTS
============================================================ */

.projects {

    display: flex;

    flex-direction: column;

    gap: 30px;

}


/* ============================================================
   PROJECT CARD
============================================================ */

.project {

    display: grid;

    grid-template-columns: 220px 1fr;

    gap: 35px;

    align-items: center;

    padding: 26px;

}


/* ============================================================
   PROJECT IMAGE
============================================================ */

.project-image {

    height: 200px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 16px;

    background: var(--surface-light);

    border: 1px solid var(--border);

    color: var(--primary);

    font-size: 58px;

    transition: .3s ease;

}


.project:hover .project-image {

    border-color: rgba(0, 229, 160, .35);

    transform: scale(1.02);

}


/* ============================================================
   PROJECT HEADER
============================================================ */

.project-header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;

    margin-bottom: 16px;

}


.project-header h3 {

    margin: 0;

    font-size: 23px;

    line-height: 1.3;

    font-family: var(--font-display);

    color: var(--text);

}


/* ============================================================
   BADGES
============================================================ */

.badge {

    flex-shrink: 0;

    padding: 7px 15px;

    border-radius: 8px;

    background: var(--primary-dim);

    color: var(--primary);

    font-family: var(--font-mono);

    font-size: 11px;

    font-weight: 600;

}


.personal {

    background: var(--amber-dim);

    color: var(--amber);

}


/* ============================================================
   PROJECT DESCRIPTION
============================================================ */

.project p {

    margin: 0;

    line-height: 1.8;

    color: var(--text-muted);

    font-size: 15px;

}


/* ============================================================
   TECHNOLOGIES
============================================================ */

.tech {

    display: flex;

    flex-wrap: wrap;

    gap: 8px;

    margin: 20px 0;

}


.tech span {

    padding: 7px 13px;

    border-radius: 7px;

    background: var(--surface-light);

    border: 1px solid var(--border);

    color: var(--text-muted);

    font-family: var(--font-mono);

    font-size: 11.5px;

}


/* ============================================================
   FEATURES
============================================================ */

.features {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 10px;

    margin-bottom: 22px;

    color: var(--text-muted);

    font-size: 13.5px;

}


.features div {

    display: flex;

    align-items: center;

    gap: 8px;

}


.features i {

    color: var(--primary);

    font-size: 11px;

}


/* ============================================================
   BUTTONS
============================================================ */

.buttons {

    display: flex;

    align-items: center;

    gap: 12px;

}


.buttons a,
.enterprise-label {

    display: inline-flex;

    align-items: center;

    gap: 8px;

    padding: 10px 17px;

    border-radius: 9px;

    text-decoration: none;

    font-weight: 600;

    font-size: 13px;

    transition: .25s ease;

}


.github {

    background: var(--surface-light);

    border: 1px solid var(--border-strong);

    color: var(--text);

}


.github:hover {

    border-color: var(--primary);

    color: var(--primary);

    transform: translateY(-2px);

}


.demo {

    background: var(--primary);

    color: #04120D;

}


.demo:hover {

    transform: translateY(-2px);

    box-shadow: 0 10px 25px rgba(0, 229, 160, .2);

}


.enterprise-label {

    background: var(--surface-light);

    border: 1px solid var(--border);

    color: var(--text-muted);

}


/* ============================================================
   RESPONSIVE
============================================================ */

@media(max-width: 900px) {

    .project {

        grid-template-columns: 1fr;

    }


    .project-image {

        height: 160px;

    }


    .features {

        grid-template-columns: 1fr;

    }

}


@media(max-width: 600px) {

    .project {

        padding: 20px;

    }


    .project-header {

        align-items: flex-start;

        flex-direction: column;

        gap: 10px;

    }


    .project-header h3 {

        font-size: 20px;

    }


    .project-image {

        height: 130px;

        font-size: 45px;

    }

}

`]
})
export class ProjectsComponent {
}