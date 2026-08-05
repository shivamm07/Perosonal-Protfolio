import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
<footer class="footer">

    <div class="footer-container">

        <div class="footer-left">

            <h2>Shivam Prasad</h2>

            <p>
                Full Stack .NET Developer passionate about building
                enterprise applications using ASP.NET Core,
                Angular and SQL Server.
            </p>

        </div>

        <div class="footer-middle">

            <h3>Quick Links</h3>

            <a routerLink="/">Home</a>
            <a routerLink="/about">About</a>
            <a routerLink="/skills">Skills</a>
            <a routerLink="/projects">Projects</a>
            <a routerLink="/experience">Experience</a>
            <a routerLink="/contact">Contact</a>

        </div>

        <div class="footer-right">

            <h3>Connect</h3>

            <a href="mailto:yourmail@gmail.com">
                📧 Email
            </a>

            <a href="https://linkedin.com/in/yourprofile" target="_blank">
                💼 LinkedIn
            </a>

            <a href="https://github.com/yourusername" target="_blank">
                💻 GitHub
            </a>

        </div>

    </div>

    <div class="copyright">

        © {{year}} Shivam Prasad

        <span>|</span>

        Built with ❤️ using Angular & ASP.NET Core

    </div>

</footer>
`,
styles:[`

.footer{

width:100%;

background:#111114;

border-top:1px solid rgba(255,255,255,.08);

margin-top:auto;

}

.footer-container{

max-width:1200px;

margin:auto;

padding:60px 40px;

display:grid;

grid-template-columns:2fr 1fr 1fr;

gap:60px;

}

.footer-left h2{

margin-bottom:20px;

font-size:32px;

color:white;

}

.footer-left p{

line-height:1.8;

color:#94a3b8;

max-width:420px;

}

.footer-middle,
.footer-right{

display:flex;

flex-direction:column;

gap:14px;

}

.footer-middle h3,
.footer-right h3{

margin-bottom:12px;

color:white;

}

.footer-middle a,
.footer-right a{

text-decoration:none;

color:#94a3b8;

transition:.3s;

}

.footer-middle a:hover,
.footer-right a:hover{

color:white;

padding-left:6px;

}

.copyright{

padding:22px;

text-align:center;

border-top:1px solid rgba(255,255,255,.08);

color:#94a3b8;

}

.copyright span{

margin:0 12px;

}

@media(max-width:900px){

.footer-container{

grid-template-columns:1fr;

text-align:center;

}

.footer-left p{

margin:auto;

}

.footer-middle,
.footer-right{

align-items:center;

}

}

`]
})
export class FooterComponent{

year=new Date().getFullYear();

}