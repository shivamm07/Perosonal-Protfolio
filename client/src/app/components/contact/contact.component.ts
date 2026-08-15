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

      <h2 class="section-title">
        Let's Connect
      </h2>

      <p class="description">
        Interested in working together, discussing a .NET opportunity,
        or simply want to connect? Feel free to send me a message.
      </p>


      <div class="contact-grid">


        <!-- Contact Information -->

        <div class="info">

          <div class="info-header">

            <span class="small-label">
              GET IN TOUCH
            </span>

            <h3>
              Let's start a conversation.
            </h3>

            <p>
              I'm open to discussing software development opportunities,
              interesting projects and professional collaborations.
            </p>

          </div>


          <!-- Email -->

          <a
            class="info-card card"
            href="mailto:shivamk.prasad07@gmail.com">

            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>

            <div>

              <span class="label">
                Email
              </span>

              <strong>
                shivamk.prasad07&#64;gmail.com
              </strong>

            </div>

          </a>


          <!-- Location -->

          <div class="info-card card">

            <div class="icon">
              <i class="fas fa-location-dot"></i>
            </div>

            <div>

              <span class="label">
                Location
              </span>

              <strong>
                Mumbai, India
              </strong>

            </div>

          </div>


          <!-- Availability -->

          <div class="availability">

            <span class="status-dot"></span>

            <div>

              <strong>
                Available for opportunities
              </strong>

              <span>
                Open to .NET Developer roles
              </span>

            </div>

          </div>


          <!-- Social -->

          <div class="social-links">

            <a
              href="https://github.com/shivamm07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub">

              <i class="fab fa-github"></i>

            </a>

            <a
              href="https://linkedin.com/in/shivamm07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn">

              <i class="fab fa-linkedin-in"></i>

            </a>

            <a
              href="mailto:shivamk.prasad07@gmail.com"
              aria-label="Email">

              <i class="fas fa-envelope"></i>

            </a>

          </div>

        </div>


        <!-- Contact Form -->

        <form
          class="card form"
          [formGroup]="form"
          (ngSubmit)="submit()">


          <div class="form-header">

            <span>
              MESSAGE
            </span>

            <h3>
              Send me a message
            </h3>

          </div>


          <div class="form-row">

            <div class="field">

              <label>
                Name
              </label>

              <input
                type="text"
                class="form-input"
                placeholder="Your name"
                formControlName="name">

              <small
                *ngIf="form.get('name')?.touched &&
                       form.get('name')?.invalid">

                Please enter your name.

              </small>

            </div>


            <div class="field">

              <label>
                Email
              </label>

              <input
                type="email"
                class="form-input"
                placeholder="you@example.com"
                formControlName="email">

              <small
                *ngIf="form.get('email')?.touched &&
                       form.get('email')?.invalid">

                Please enter a valid email.

              </small>

            </div>

          </div>


          <div class="field">

            <label>
              Subject
            </label>

            <input
              type="text"
              class="form-input"
              placeholder="What would you like to discuss?"
              formControlName="subject">

          </div>


          <div class="field">

            <label>
              Message
            </label>

            <textarea
              rows="6"
              class="form-input"
              placeholder="Write your message..."
              formControlName="message">
            </textarea>

            <small
              *ngIf="form.get('message')?.touched &&
                     form.get('message')?.invalid">

              Please enter a message.

            </small>

          </div>


          <button
            class="btn btn-primary submit-btn"
            type="submit"
            [disabled]="form.invalid">

            <span>
              Send Message
            </span>

            <span class="arrow">
              →
            </span>

          </button>


          <p
            class="status"
            *ngIf="submitted">

            <i class="fas fa-circle-check"></i>

            Thanks! Your message has been submitted.

          </p>

        </form>

      </div>

    </section>
  `,

  styles: [`

    /* Description */

    .description {
      max-width: 820px;
      margin-bottom: 50px;
      color: var(--text-muted);
      font-size: 17px;
      line-height: 1.8;
    }


    /* Layout */

    .contact-grid {
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 40px;
      align-items: start;
    }


    /* Information */

    .info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .info-header {
      padding-bottom: 12px;
    }

    .small-label,
    .form-header > span {
      display: block;

      margin-bottom: 10px;

      color: var(--primary);

      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 600;

      letter-spacing: 1.2px;
    }

    .info-header h3 {
      margin: 0 0 10px;

      font-size: 23px;
      font-family: var(--font-display);

      color: var(--text);
    }

    .info-header p {
      margin: 0;

      color: var(--text-muted);

      font-size: 14px;
      line-height: 1.8;
    }


    /* Contact Cards */

    .info-card {
      display: flex;
      align-items: center;
      gap: 16px;

      padding: 18px;

      text-decoration: none;

      transition: .25s ease;
    }

    .info-card:hover {
      border-color: var(--primary);
      transform: translateX(4px);
    }

    .icon {
      width: 46px;
      height: 46px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: 11px;

      background: var(--primary-dim);

      color: var(--primary);

      font-size: 18px;
    }

    .info-card .label {
      display: block;

      margin-bottom: 4px;

      color: var(--text-muted);

      font-family: var(--font-mono);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .8px;
    }

    .info-card strong {
      display: block;

      color: var(--text);

      font-size: 13px;
      font-weight: 600;
    }


    /* Availability */

    .availability {
      display: flex;
      align-items: center;
      gap: 12px;

      padding: 16px 18px;

      border-radius: 12px;

      background: var(--primary-dim);
      border: 1px solid rgba(0,229,160,.18);
    }

    .availability .status-dot {
      flex-shrink: 0;
    }

    .availability strong {
      display: block;

      color: var(--text);

      font-size: 13px;
    }

    .availability span:not(.status-dot) {
      display: block;

      margin-top: 3px;

      color: var(--text-muted);

      font-size: 11px;
    }


    /* Social */

    .social-links {
      display: flex;
      gap: 10px;

      margin-top: 4px;
    }

    .social-links a {
      width: 42px;
      height: 42px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;

      background: var(--surface-light);
      border: 1px solid var(--border);

      color: var(--text-muted);

      text-decoration: none;

      font-size: 16px;

      transition: .25s ease;
    }

    .social-links a:hover {
      color: var(--primary);
      border-color: var(--primary);
      transform: translateY(-3px);
    }


    /* Form */

    .form {
      display: flex;
      flex-direction: column;
      gap: 18px;

      padding: 30px;
    }

    .form-header {
      margin-bottom: 4px;
    }

    .form-header h3 {
      margin: 0;

      color: var(--text);

      font-size: 23px;
      font-family: var(--font-display);
    }


    /* Form Row */

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .field label {
      color: var(--text);

      font-size: 12.5px;
      font-weight: 600;
    }


    /* Inputs */

    .form-input {
      width: 100%;

      padding: 13px 15px;

      border-radius: 9px;

      background: var(--surface-light);

      border: 1px solid var(--border);

      color: var(--text);

      font-family: var(--font-body);
      font-size: 14px;

      outline: none;

      transition: .25s ease;

      resize: vertical;
    }

    .form-input::placeholder {
      color: var(--text-muted);
      opacity: .75;
    }

    .form-input:focus {
      border-color: var(--primary);

      box-shadow:
        0 0 0 3px var(--primary-dim);
    }


    /* Validation */

    .field small {
      color: var(--danger);

      font-size: 11px;
    }


    /* Submit */

    .submit-btn {
      width: fit-content;

      min-width: 160px;

      margin-top: 4px;
    }

    .submit-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .arrow {
      font-size: 18px;

      transition: transform .25s ease;
    }

    .submit-btn:hover .arrow {
      transform: translateX(4px);
    }

    .form button[disabled] {
      opacity: .45;
      cursor: not-allowed;
      transform: none;
    }


    /* Status */

    .status {
      display: flex;
      align-items: center;
      gap: 8px;

      margin: 0;

      color: var(--success);

      font-size: 13px;
      font-weight: 600;
    }


    /* Responsive */

    @media(max-width: 1000px) {

      .contact-grid {
        grid-template-columns: 1fr;
      }

      .info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      .info-header {
        grid-column: 1 / -1;
      }

      .availability {
        grid-column: 1 / -1;
      }

      .social-links {
        grid-column: 1 / -1;
      }

    }


    @media(max-width: 650px) {

      .info {
        display: flex;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .form {
        padding: 22px;
      }

      .submit-btn {
        width: 100%;
      }

    }

  `]
})
export class ContactComponent {

  form: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      subject: [
        ''
      ],

      message: [
        '',
        Validators.required
      ]

    });

  }


  submit() {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    console.log('Contact Form:', this.form.value);

    this.submitted = true;

    this.form.reset();

    setTimeout(() => {

      this.submitted = false;

    }, 4000);

  }

}