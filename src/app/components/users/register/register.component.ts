import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserUpsert } from 'src/app/models/user/user-upsert';
import { UserService } from 'src/app/services/user.service';
import { SnackbarService as SnackBarService } from 'src/app/services/infrastructure/snack-bar.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private snackBarService: SnackBarService,
              private router: Router) {
    this.form = fb.group({
      username: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(150), Validators.pattern('^[\\w.@+-]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
      Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,30}$')]]
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      const user = this.form.value as UserUpsert;
      this.userService.register(user).subscribe(data => {
        this.snackBarService.openSnackBar('User registered successfully');
        this.authService.login(user.username, user.password).subscribe(_ => {
          this.router.navigate(['/account']);
        });
      }, error => {
        this.snackBarService.openSnackBar(error.statusText, 'Dismiss', true);
      });
    }
  }
}
