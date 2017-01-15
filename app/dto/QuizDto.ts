export class QuizDto {

  id: number;
  quizType: string;

  constructor(quizType: string) {
    this.quizType = quizType;
  }
}
