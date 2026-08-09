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
styles:[`

:host{

display:block;

min-height:100vh;

background:var(--bg);

}

/* Layout */

.layout{

display:grid;

grid-template-columns:320px 1fr;

max-width:1900px;

margin:auto;

min-height:calc(100vh - 82px - 33px);

}

/* Sidebar */

.sidebar{

position:sticky;

top:115px;

height:calc(100vh - 115px);

padding:22px;

overflow:hidden;

}

/* Right Side */

.content{

display:flex;

flex-direction:column;

min-height:calc(100vh - 82px - 33px);

}

/* Router */

main{

flex:1;

padding:50px 70px;

overflow-x:hidden;

}

/* Footer */

app-footer{

display:block;

margin-top:auto;

}

/* Responsive */

@media(max-width:1400px){

.layout{

grid-template-columns:300px 1fr;

}

main{

padding:45px;

}

}

@media(max-width:1200px){

.layout{

grid-template-columns:280px 1fr;

}

}

@media(max-width:992px){

.layout{

grid-template-columns:1fr;

}

.sidebar{

display:none;

}

main{

padding:30px;

}

}

@media(max-width:768px){

main{

padding:22px;

}

}

`]

})

export class AppComponent{

}
