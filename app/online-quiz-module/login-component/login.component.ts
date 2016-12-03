import { Component } from '@angular/core';
import {LoginDto} from "../../model/dto/LoginDto";
import {LoginService} from "../../services/LoginService";

@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: `login.component.html`,
  styleUrls: ['login.component.css']
})
export class LoginComponent  {

  model: LoginDto;
  submitted: boolean;


  constructor(private loginService: LoginService) {
    this.model = new LoginDto('', '');
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    this.loginService.login(this.model);
  }
}
