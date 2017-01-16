import {CompleteClientDto} from "../../../dto/composed/CompleteClientDto";
import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../../services/ClientService";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {UserDto} from "../../../dto/UserDto";
import {UserService} from "../../../services/UserService";
import {LobbyService} from "../../../services/LobbyService";
import {CompleteAdminDto} from "../../../dto/composed/CompleteAdminDto";
import {LoginService} from "../../../services/LoginService";
import {AdminService} from "../../../services/AdminService";

@Component({
  moduleId: module.id,
  selector: 'profile-page',
  templateUrl: `profile-page.component.html`,
  styleUrls: ['profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  completeClientDto: CompleteClientDto;
  completeAdminDto: CompleteAdminDto;
  errorMessage: string;

  constructor(private clientService: ClientService, private userService: UserService, private adminService: AdminService, private lobbyService: LobbyService, private loginService: LoginService, private location: Location, private router: Router) {

  }

  ngOnInit(): void {
    if (this.loginService.loggedUser != null) {
      if (this.loginService.loggedUser.userType == 'ADMIN') {
        this.adminService.getLoggedAdminInformation()
          .then(response => {
            this.completeAdminDto = response;
            this.completeClientDto = null;
          })
          .catch(error => this.errorMessage = 'An error occurred while retrieving client information')
      } else {
        this.clientService.getLoggedClientInformation()
          .then(response => {
            this.completeAdminDto = null;
            this.completeClientDto = response;
          })
          .catch(error => this.errorMessage = 'An error occurred while retrieving client information')
      }
    } else {
      this.router.navigate(['error/nobodyLoggedIn']);
    }
  }

  createLobby(quizId: number): void {
    this.lobbyService.createSessionLobby(quizId)
      .then(response => this.router.navigate(['/startLobbyCountdown', quizId]))
      .catch(error => this.errorMessage = 'Failed to create quiz lobby');
  }

  removeFriend(friend: UserDto): void {
    this.userService.removeFriend(friend)
      .then(response => this.ngOnInit())
      .catch(error => this.errorMessage = 'An error occurred while retrieving client information')
  }
}
