import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { MatDialog } from "@angular/material/dialog";
import { LoginMessageComponent } from "./login-message/login-message.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private location: Location,
    public dialog: MatDialog
  ) {}
  loginForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  private access: string | any;
  errInfo: string | any;

  onLogin() {
    // console.log(this.loginForm.value);
    this.loginService.loginUser(this.loginForm.value).subscribe(
      (res: any) => {
        this.access = res.access;
        console.log('User log in', this.access);
        this.location
      },
      (err) => {
        this.errInfo = err;
        this.dialog.open(LoginMessageComponent,{
          data: this.errInfo
        })
      }
    );
  }
  ngOnInit(): void {}
}
