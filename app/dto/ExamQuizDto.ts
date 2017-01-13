export class ExamQuizDto {

  id: number;
  quizType: string;

  constructor(quizType: string) {
    this.quizType = quizType;
  }
}
