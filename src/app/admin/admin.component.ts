import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isOpened = true;

  constructor(private router: Router, private logiService: LoginService) {}

  onLogout() {
    this.logiService.logoutUser()
  }
  ngOnInit() {}
}
