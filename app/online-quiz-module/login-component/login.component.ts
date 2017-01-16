import {Component} from "@angular/core";
import {LoginDto} from "../../dto/LoginDto";
import {LoginService} from "../../services/LoginService";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: `login.component.html`,
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  model: LoginDto;
  submitted: boolean;
  errorMessage: string;

  constructor(private loginService: LoginService, private location: Location, private router: Router) {
    this.model = new LoginDto('', '');
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    this.loginService.login(this.model).then(response => this.router.navigate(['/'])).catch(error => this.errorMessage = 'Login failed');
  }
}
