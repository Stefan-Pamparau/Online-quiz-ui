import {Component} from "@angular/core";
import {UserDto} from "../../dto/UserDto";
import {RegisterService} from "../../services/RegisterService";
import {Location} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'register-form',
  templateUrl: `register.component.html`,
  styleUrls: ['register.component.css']
})
export class RegisterComponent {

  model: UserDto;
  submitted: boolean;
  message: string;

  constructor(private registerService: RegisterService, private location: Location) {
    this.model = new UserDto('', '', 0, '', '', '');
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    this.model.userType = 'CLIENT';
    this.registerService.register(this.model).then(response => this.location.back()).catch(error => this.message = "Registration failed")
  }
}
