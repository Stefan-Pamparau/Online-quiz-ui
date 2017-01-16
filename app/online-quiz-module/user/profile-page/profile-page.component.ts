import {CompleteClientDto} from "../../../dto/composed/CompleteClientDto";
import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../../services/ClientService";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {UserDto} from "../../../dto/UserDto";
import {UserService} from "../../../services/UserService";

@Component({
  moduleId: module.id,
  selector: 'profile-page',
  templateUrl: `profile-page.component.html`,
  styleUrls: ['profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  completeClientDto: CompleteClientDto;
  errorMessage: string;

  constructor(private clientService: ClientService, private userService: UserService, private location: Location, private router: Router) {

  }

  ngOnInit(): void {
    this.clientService.getLoggedClientInformation()
      .then(response => this.completeClientDto = response)
      .catch(error => this.errorMessage = 'An error occurred while retrieving client information')
  }

  removeFriend(friend: UserDto): void {
    this.userService.removeFriend(friend)
      .catch(error => this.errorMessage = 'An error occurred while retrieving client information')
  }
}
