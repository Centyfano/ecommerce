import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  isLoading:boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  openMessage(msg: string) {
    this._snackBar.open(msg, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 4000,
    });
  }

  loginForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  private access: string | any;

  onLogin() {
    // console.log(this.loginForm.value);
    this.isLoading = true
    this.loginService.loginUser(this.loginForm.value).subscribe(
      (res: any) => {
        this.access = res.access;
        console.log('User log in', this.access);
        this.router.navigateByUrl('/');
        this.isLoading = false;
      },
      (err) => {
        this.openMessage(err);
        this.isLoading = false
      }
    );
  }
  ngOnInit(): void {
    this.openMessage('Please login')
  }
}
