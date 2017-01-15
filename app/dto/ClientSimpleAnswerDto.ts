import {SimpleQuestionDto} from "./SimpleQuestionDto";
export class ClientSimpleAnswerDto {

  answerText: string;
  simpleQuestionDto: SimpleQuestionDto;

  constructor(answerText: string, simpleQuestionDto: SimpleQuestionDto) {
    this.answerText = answerText;
    this.simpleQuestionDto = simpleQuestionDto;
  }
}
