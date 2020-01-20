import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  returnUrl: string;

  constructor(fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
    if (this.authService.tokenValue) {
      this.router.navigate(['/']);
    }

    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/account';
  }

  submit() {
    if (this.form.valid) {
      this.authService.login(this.form.get('username').value, this.form.get('password').value).subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        }
      );
    }
  }
}
