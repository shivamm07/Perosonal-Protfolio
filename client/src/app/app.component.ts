import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopbarComponent } from './components/layout/topbar.component';
import { SidebarComponent } from './components/layout/sidebar.component';
import { FooterComponent } from './components/layout/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        TopbarComponent,
        SidebarComponent,
        FooterComponent
    ],
    template: `

<app-topbar></app-topbar>

<div class="layout">

    <aside class="sidebar">

        <app-sidebar></app-sidebar>

    </aside>

    <div class="content">

        <main>

            <router-outlet></router-outlet>

        </main>

        <app-footer></app-footer>

    </div>

</div>

`,
    styles: [`

/* ============================================================
   ROOT
============================================================ */

:host {
    display: block;
    min-height: 100vh;
    background: var(--bg);
}


/* ============================================================
   MAIN LAYOUT
============================================================ */

.layout {
    display: grid;

    grid-template-columns: 320px minmax(0, 1fr);

    max-width: 1900px;

    margin: 0 auto;

    min-height: calc(100vh - 82px);
}


/* ============================================================
   SIDEBAR
============================================================ */

.sidebar {
    position: sticky;

    top: 82px;

    height: calc(100vh - 82px);

    /*
     * Only provide spacing around the sidebar component.
     * The actual sidebar already has its own padding.
     */
    padding: 20px 12px 20px 0;

    overflow: hidden;
}


/* ============================================================
   RIGHT CONTENT
============================================================ */

.content {
    display: flex;

    flex-direction: column;

    min-width: 0;

    min-height: calc(100vh - 82px);
}


/* ============================================================
   MAIN / ROUTER CONTENT
============================================================ */

main {
    flex: 1;

    padding: 50px 70px;

    overflow-x: hidden;
}


/* ============================================================
   FOOTER
============================================================ */

app-footer {
    display: block;

    margin-top: auto;
}


/* ============================================================
   LARGE DESKTOP
============================================================ */

@media (max-width: 1400px) {

    .layout {
        grid-template-columns: 300px minmax(0, 1fr);
    }

    main {
        padding: 45px;
    }

}


/* ============================================================
   LAPTOP
============================================================ */

@media (max-width: 1200px) {

    .layout {
        grid-template-columns: 280px minmax(0, 1fr);
    }

}


/* ============================================================
   TABLET
============================================================ */

@media (max-width: 992px) {

    .layout {
        grid-template-columns: 1fr;
    }

    .sidebar {
        display: none;
    }

    main {
        padding: 30px;
    }

}


/* ============================================================
   MOBILE
============================================================ */

@media (max-width: 768px) {

    main {
        padding: 22px;
    }

}


/* ============================================================
   SMALL MOBILE
============================================================ */

@media (max-width: 480px) {

    main {
        padding: 18px;
    }

}

`]
})
export class AppComponent {
}