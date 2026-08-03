import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section>
      <h2>Contact</h2>
      <form [formGroup]="form" (ngSubmit)="submit()" style="display:flex; flex-direction:column; gap:0.75rem; max-width:400px;">
        <input formControlName="name" placeholder="Name" />
        <input formControlName="email" placeholder="Email" />
        <textarea formControlName="message" placeholder="Message" rows="4"></textarea>
        <button type="submit" [disabled]="form.invalid || submitting">
          {{ submitting ? 'Sending...' : 'Send' }}
        </button>
        <p *ngIf="successMessage">{{ successMessage }}</p>
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
