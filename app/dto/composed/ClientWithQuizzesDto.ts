import {ExamQuizDto} from "../ExamQuizDto";
import {GamefiedQuizDto} from "../GamefiedQuizDto";
import {ClientDto} from "../ClientDto";
export class ClientWithQuizzesDto {

  clientDto: ClientDto;
  examQuizDtos: ExamQuizDto[];
  gamefiedQuizDtos: GamefiedQuizDto[];


  constructor(clientDto: ClientDto, examQuizDtos: ExamQuizDto[], gamefiedQuizDtos: GamefiedQuizDto[]) {
    this.clientDto = clientDto;
    this.examQuizDtos = examQuizDtos;
    this.gamefiedQuizDtos = gamefiedQuizDtos;
  }
}
