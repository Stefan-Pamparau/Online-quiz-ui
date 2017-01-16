import {UserDto} from "../UserDto";

export class UsersScoreReportDto {

  userDtos: UserDto[];
  scoresPerUser: number[];

  constructor(userDtos: UserDto[], scoresPerUser: number[]) {
    this.userDtos = userDtos;
    this.scoresPerUser = scoresPerUser;
  }
}
