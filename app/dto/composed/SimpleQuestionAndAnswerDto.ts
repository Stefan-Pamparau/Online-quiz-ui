import {SimpleAnswerDto} from "../SimpleAnswerDto";
import {SimpleQuestionDto} from "../SimpleQuestionDto";
export class SimpleQuestionAndAnswerDto {

  simpleQuestionDto: SimpleQuestionDto;
  simpleAnswerDto: SimpleAnswerDto;

  constructor(simpleQuestion: SimpleQuestionDto, simpleAnswer: SimpleAnswerDto) {
    this.simpleQuestionDto = simpleQuestion;
    this.simpleAnswerDto = simpleAnswer;
  }
}
