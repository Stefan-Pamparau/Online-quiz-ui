import {AdminDto} from "../AdminDto";
import {FriendshipDto} from "./FriendshipDto";
export class CompleteAdminDto {

  adminDto: AdminDto;
  friendshipDtos: FriendshipDto[];

  constructor(clientDto: AdminDto, friendshipDtos: FriendshipDto[]) {
    this.adminDto = clientDto;
    this.friendshipDtos = friendshipDtos;
  }
}
