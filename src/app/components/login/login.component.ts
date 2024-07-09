import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardContent,
    MatCardTitle,
    MatCard,
    MatFormField,
    MatInput,
    MatButton
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogicComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  matSnackBar = inject(MatSnackBar)

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    const rawForm = this.form.getRawValue();

    this.authService.login(rawForm.email, rawForm.password).subscribe(
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
