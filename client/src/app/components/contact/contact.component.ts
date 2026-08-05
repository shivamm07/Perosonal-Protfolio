import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<section class="section">

    <span class="section-tag">// CONTACT</span>

    <h2 class="section-title">
        Let's Work Together
    </h2>

    <p class="description">
        Have a project, job opportunity or simply want to connect?
        Feel free to reach out. I'll respond as soon as possible.
    </p>

    <div class="contact-grid">

        <div class="info">

            <div class="info-card card">

                <div class="icon">📧</div>

                <div>

                    <h3>Email</h3>

                    <p>shivam.gmail.com</p>

                </div>

            </div>

            <div class="info-card card">

                <div class="icon">📱</div>

                <div>

                    <h3>Phone</h3>

                    <p>+91 XXXXX XXXXX</p>

                </div>

            </div>

            <div class="info-card card">

                <div class="icon">📍</div>

                <div>

                    <h3>Location</h3>

                    <p>Mumbai, India</p>

                </div>

            </div>

            <div class="social-links">

                <a href="https://github.com/yourusername" target="_blank">
                    GitHub
                </a>

                <a href="https://linkedin.com/in/yourprofile" target="_blank">
                    LinkedIn
                </a>

            </div>

        </div>

        <form
            class="card form"
            [formGroup]="form"
            (ngSubmit)="submit()">

            <input
                type="text"
                class="form-input"
                placeholder="Full Name"
                formControlName="name">

            <input
                type="email"
                class="form-input"
                placeholder="Email Address"
                formControlName="email">

            <input
                type="text"
                class="form-input"
                placeholder="Subject"
                formControlName="subject">

            <textarea
                rows="6"
                class="form-input"
                placeholder="Write your message..."
                formControlName="message">
            </textarea>

            <button
                class="btn btn-primary"
                type="submit"
                [disabled]="form.invalid">

                Send Message

            </button>

            <p
                class="status"
                *ngIf="submitted">

                ✅ Thank you! Your message has been sent.

            </p>

        </form>

    </div>

</section>
`,
  styles: [`

.description{
max-width:850px;
margin-bottom:50px;
line-height:1.8;
color:var(--text-muted);
font-size:17px;
}

.contact-grid{
display:grid;
grid-template-columns:350px 1fr;
gap:40px;
align-items:start;
}

.info{
display:flex;
flex-direction:column;
gap:20px;
}

.info-card{
display:flex;
align-items:center;
gap:20px;
padding:25px;
}

.icon{
width:60px;
height:60px;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
border-radius:50%;
background:rgba(124,92,255,.15);
}

.info-card h3{
margin:0 0 6px;
font-size:18px;
}

.info-card p{
margin:0;
color:var(--text-muted);
}

.social-links{
display:flex;
gap:15px;
margin-top:10px;
}

.social-links a{
padding:12px 22px;
border-radius:10px;
background:rgba(124,92,255,.12);
text-decoration:none;
color:white;
transition:.3s;
}

.social-links a:hover{
background:var(--primary);
}

.form{
display:flex;
flex-direction:column;
gap:18px;
padding:35px;
}

.form-input{
width:100%;
}

.status{
margin-top:10px;
color:#4ade80;
font-weight:600;
}

@media(max-width:900px){

.contact-grid{
grid-template-columns:1fr;
}

}

`]
})
export class ContactComponent {

  form: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      subject: [''],

      message: ['', Validators.required]

    });

  }

  submit() {

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    this.submitted = true;

    this.form.reset();

    setTimeout(() => {

      this.submitted = false;

    }, 4000);

  }

}