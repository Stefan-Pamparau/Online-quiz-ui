import {ExamQuizDto} from "../ExamQuizDto";
import {SimpleQuestionDto} from "../SimpleQuestionDto";
export class ExamQuizWithQuestionsDto {

  examQuizDto: ExamQuizDto;
  simpleQuestionDtos: SimpleQuestionDto[];

  constructor(examQuizDto: ExamQuizDto, simpleQuestionDtos: SimpleQuestionDto[]) {
    this.examQuizDto = examQuizDto;
    this.simpleQuestionDtos = simpleQuestionDtos;
  }
}
