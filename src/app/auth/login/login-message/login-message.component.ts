import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-message',
  templateUrl: './login-message.component.html',
  styleUrls: ['./login-message.component.scss'],
})
export class LoginMessageComponent implements OnInit {
  @Input() item = '';
  
  constructor() {}

  ngOnInit(): void {}
}
