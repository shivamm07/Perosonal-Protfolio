import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLink],
    template: `

<footer class="footer">

    <div class="footer-container">

        <!-- About -->

        <div class="footer-about">

            <div class="footer-brand">

                <div class="brand-icon">
                    <i class="fa-solid fa-code"></i>
                </div>

                <div>
                    <h2>Shivamkumar Prasad</h2>
                    <span>.NET Developer</span>
                </div>

            </div>

            <p>
                Full Stack .NET Developer focused on building
                scalable enterprise applications with ASP.NET Core,
                Angular and SQL Server.
            </p>

        </div>


        <!-- Quick Links -->

        <div class="footer-links">

            <h3>Quick Links</h3>

            <a routerLink="/">Home</a>
            <a routerLink="/about">About</a>
            <a routerLink="/skills">Skills</a>
            <a routerLink="/projects">Projects</a>
            <a routerLink="/experience">Experience</a>
            <a routerLink="/contact">Contact</a>

        </div>


        <!-- Connect -->

        <div class="footer-connect">

            <h3>Connect</h3>

            <a href="mailto:shivamk.prasad07@gmail.com">

                <i class="fa-solid fa-envelope"></i>

                <span>Email</span>

            </a>

            <a
                href="https://linkedin.com/in/shivamm07"
                target="_blank"
                rel="noopener noreferrer">

                <i class="fa-brands fa-linkedin"></i>

                <span>LinkedIn</span>

            </a>

            <a
                href="https://github.com/shivamm07"
                target="_blank"
                rel="noopener noreferrer">

                <i class="fa-brands fa-github"></i>

                <span>GitHub</span>

            </a>

        </div>

    </div>


    <!-- Copyright -->

    <div class="copyright">

        <span>
            © {{ year }} Shivamkumar Prasad
        </span>

        <span class="separator">•</span>

        <span>
            Designed & Built with Angular + ASP.NET Core
        </span>

    </div>

</footer>

`,

    styles: [`

/* ============================================================
   FOOTER
============================================================ */

.footer {

    width: 100%;

    background: var(--bg-elevated);

    border-top: 1px solid var(--border);

    margin-top: auto;

}


/* ============================================================
   FOOTER CONTAINER
============================================================ */

.footer-container {

    max-width: 1200px;

    margin: 0 auto;

    padding: 48px 40px;

    display: grid;

    grid-template-columns: 2fr 1fr 1fr;

    gap: 70px;

}


/* ============================================================
   BRAND
============================================================ */

.footer-brand {

    display: flex;

    align-items: center;

    gap: 13px;

    margin-bottom: 18px;

}


.brand-icon {

    width: 44px;
    height: 44px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 11px;

    background: var(--primary);

    color: #04120D;

    font-size: 17px;

    box-shadow:
        0 8px 22px rgba(0, 229, 160, 0.18);

}


.footer-brand h2 {

    margin: 0;

    font-size: 21px;

    line-height: 1.2;

    font-family: var(--font-display);

    color: var(--text);

}


.footer-brand span {

    display: block;

    margin-top: 3px;

    font-family: var(--font-mono);

    font-size: 11px;

    color: var(--text-muted);

}


/* ============================================================
   FOOTER DESCRIPTION
============================================================ */

.footer-about p {

    max-width: 440px;

    margin: 0;

    color: var(--text-muted);

    font-size: 14px;

    line-height: 1.8;

}


/* ============================================================
   COLUMN TITLES
============================================================ */

.footer-links,
.footer-connect {

    display: flex;

    flex-direction: column;

    gap: 11px;

}


.footer-links h3,
.footer-connect h3 {

    margin: 0 0 8px;

    font-family: var(--font-mono);

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 1.5px;

    text-transform: uppercase;

    color: var(--text-muted);

}


/* ============================================================
   LINKS
============================================================ */

.footer-links a,
.footer-connect a {

    display: inline-flex;

    align-items: center;

    gap: 10px;

    width: fit-content;

    color: var(--text-muted);

    text-decoration: none;

    font-size: 14px;

    transition: 0.25s ease;

}


.footer-links a:hover,
.footer-connect a:hover {

    color: var(--primary);

    transform: translateX(4px);

}


/* Connect Icons */

.footer-connect i {

    width: 18px;

    text-align: center;

    font-size: 16px;

}


/* ============================================================
   COPYRIGHT
============================================================ */

.copyright {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 14px;

    padding: 18px 20px;

    border-top: 1px solid var(--border);

    color: var(--text-muted);

    font-size: 12.5px;

    text-align: center;

}


.copyright .separator {

    color: var(--border-strong);

}


/* ============================================================
   TABLET
============================================================ */

@media (max-width: 900px) {

    .footer-container {

        grid-template-columns: 1fr 1fr;

        gap: 40px;

    }

    .footer-about {

        grid-column: 1 / -1;

    }

}


/* ============================================================
   MOBILE
============================================================ */

@media (max-width: 600px) {

    .footer-container {

        grid-template-columns: 1fr;

        padding: 40px 24px;

        gap: 32px;

    }

    .footer-about {

        grid-column: auto;

    }

    .footer-links,
    .footer-connect {

        align-items: flex-start;

    }

    .copyright {

        flex-direction: column;

        gap: 5px;

        padding: 16px 20px;

    }

    .copyright .separator {

        display: none;

    }

}

`]
})
export class FooterComponent {

    year = new Date().getFullYear();

}