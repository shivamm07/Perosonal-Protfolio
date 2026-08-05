import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="section">
      <span class="section-tag">// contact</span>
      <h2 class="section-title">Contact</h2>

      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="card"
        style="display:flex; flex-direction:column; gap:1rem; max-width:460px;"
      >
        <input class="form-input" formControlName="name" placeholder="Name" />
        <input class="form-input" formControlName="email" placeholder="Email" />
        <textarea class="form-input" formControlName="message" placeholder="Message" rows="4"></textarea>
        <button class="btn-primary" type="submit" [disabled]="form.invalid || submitting">
          {{ submitting ? 'Sending...' : 'Send' }}
        </button>
        <p class="status-msg" *ngIf="successMessage">{{ successMessage }}</p>
      </form>
    </section>
  `
})
export class ContactComponent {
  form: FormGroup;
  submitting = false;
  successMessage = '';

  constructor(private fb: FormBuilder, private api: PortfolioApiService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.form.invalid) return;
    this.submitting = true;
    this.api.submitContact(this.form.value).subscribe({
      next: () => {
        this.successMessage = 'Message sent — thank you!';
        this.form.reset();
        this.submitting = false;
      },
      error: () => {
        this.successMessage = 'Something went wrong. Please try again.';
        this.submitting = false;
      }
    });
  }
}