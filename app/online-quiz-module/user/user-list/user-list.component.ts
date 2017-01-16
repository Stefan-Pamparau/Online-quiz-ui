import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {UsersDto} from "../../../dto/composed/UsersDto";
import {UserDto} from "../../../dto/UserDto";
import {UserService} from "../../../services/UserService";
import {LoginService} from "../../../services/LoginService";

@Component({
  moduleId: module.id,
  selector: 'user-list',
  templateUrl: `user-list.component.html`,
  styleUrls: ['user-list.component.css']
})
export class UserListComponent {

  usersDto: UsersDto;
  searchBox: string;
  successMessage: string;
  errorMessage: string;

  constructor(private userService: UserService, private location: Location, private router: Router, private loginService: LoginService) {
    this.usersDto = new UsersDto(null);
  }

  onSubmit(): void {
    this.userService.getUsersByEmailPattern(this.searchBox)
      .then(response => this.usersDto = response)
      .catch(error => {
        this.errorMessage = 'Failed to retrieve users';
        if (this.loginService.loggedUser == null) {
          this.router.navigate(['error/nobodyLoggedIn']);
        }
      });
  }

  addFriend(friend: UserDto) {
    this.userService.addFriend(friend)
      .then(response => this.successMessage = 'Friend added successfully')
      .catch(error => this.errorMessage = 'Friend was not added')
  }
}
