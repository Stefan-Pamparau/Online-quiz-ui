export class GamefiedQuizDto {

  id: number;
  quizType: string;

  constructor(quizType: string) {
    this.quizType = quizType;
  }
}
