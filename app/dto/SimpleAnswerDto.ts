export class SimpleAnswerDto {

  id: number;
  answerText: string;
  answerType: string;

  constructor(answerText: string, answerType: string) {
    this.answerText = answerText;
    this.answerType = answerType;
  }
}
