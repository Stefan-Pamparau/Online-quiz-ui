export class GamefiedQuizDto {

  id: number;
  quizType: string;
  title: string;
  description: string;
  
  constructor(quizType: string, title: string, description: string) {
    this.quizType = quizType;
    this.title = title;
    this.description = description;
  }
}
