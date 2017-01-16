import {UserDto} from "../UserDto";

export class UsersDto {

  userDtos: UserDto[];

  constructor(userDtos: UserDto[]) {
    this.userDtos = userDtos;
  }
}
