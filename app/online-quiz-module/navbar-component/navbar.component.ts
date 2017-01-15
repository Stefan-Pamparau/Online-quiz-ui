import {Component, OnInit} from "@angular/core";
import {LoginService} from "../../services/LoginService";

@Component({
  moduleId: module.id,
  selector: 'online-quiz-navbar',
  templateUrl: `navbar.component.html`,
})
export class NavbarComponent implements OnInit {

  isUserLogged: boolean;

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.isUserLogged = this.loginService.loggedUser != null;
  }

  logOut(): void {
    this.loginService.loggedUser = null;
  }
}
