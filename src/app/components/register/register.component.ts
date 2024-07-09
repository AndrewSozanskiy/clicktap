import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  matSnackBar = inject(MatSnackBar)

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  // errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue();

    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe(
      {
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          this.matSnackBar.open(error.message, 'Close', {duration: 3000});
        }
      })
  }
}
