import {ExamQuizDto} from "../ExamQuizDto";
import {GamefiedQuizDto} from "../GamefiedQuizDto";
import {ClientDto} from "../ClientDto";
import {FriendshipDto} from "./FriendshipDto";

export class CompleteClientDto {

  clientDto: ClientDto;
  examQuizDtos: ExamQuizDto[];
  gamefiedQuizDtos: GamefiedQuizDto[];
  friendshipDtos: FriendshipDto[];

  constructor(clientDto: ClientDto, examQuizDtos: ExamQuizDto[], gamefiedQuizDtos: GamefiedQuizDto[], friendshipDtos: FriendshipDto[]) {
    this.clientDto = clientDto;
    this.examQuizDtos = examQuizDtos;
    this.gamefiedQuizDtos = gamefiedQuizDtos;
    this.friendshipDtos = friendshipDtos;
  }
}
