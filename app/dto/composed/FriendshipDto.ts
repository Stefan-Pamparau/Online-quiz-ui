import {UserDto} from "../UserDto";

export class FriendshipDto {

  requester: UserDto;
  friend: UserDto;

  constructor(requester: UserDto, friend: UserDto) {
    this.requester = requester;
    this.friend = friend;
  }
}
