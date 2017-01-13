export class SimpleQuestionDto {

  id: number;
  questionText: string;
  questionType: string;

  constructor(questionText: string, questionType: string) {
    this.questionText = questionText;
    this.questionType = questionType;
  }
}
