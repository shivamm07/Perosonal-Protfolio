import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/layout/topbar.component';
import { SidebarComponent } from './components/layout/sidebar.component';
import { FooterComponent } from './components/layout/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, SidebarComponent, FooterComponent],
  template: `
    <app-topbar></app-topbar>
    <div class="layout-body">
      <app-sidebar></app-sidebar>
      <main class="layout-main">
        <router-outlet></router-outlet>
      </main>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
    .layout-body {
      display: flex;
      min-height: calc(100vh - 64px);
    }

    .layout-main {
      flex: 1;
      min-width: 0;
    }
  `]
})
export class AppComponent {}