import {Component} from "@angular/core";
import {SimpleQuestionAndAnswerDto} from "../../../dto/composed/SimpleQuestionAndAnswerDto";
import {ExamQuizService} from "../../../services/ExamQuizService";
import {Location} from "@angular/common";
import {SimpleQuestionDto} from "../../../dto/SimpleQuestionDto";
import {SimpleAnswerDto} from "../../../dto/SimpleAnswerDto";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'add-exam-quiz-questions-and-answers',
  templateUrl: `add-exam-quiz-questions-and-answers.component.html`,
  styleUrls: ['add-exam-quiz-questions-and-answers.component.css']
})
export class AddExamQuizQuestionsAndAnswersComponent {

  model: SimpleQuestionAndAnswerDto;
  submitted: boolean;
  successMessage: string;
  errorMessage: string;

  constructor(private examQuizService: ExamQuizService, private location: Location, private router: Router) {
    this.initializeModel();
    this.submitted = false;
  }

  nextQuestion(): void {
    this.examQuizService.addSimpleQuestionAndAnswer(this.model).then(response => {
      this.initializeModel();
      this.successMessage = 'Question and answer added succesfully'
      this.errorMessage = null;
    }).catch(error => {
      this.successMessage = null;
      this.errorMessage = 'Failed to add answer and question'
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.examQuizService.finishExamQuizCreation(this.model)
      .then(response => this.router.navigate(['/profilePage']))
      .catch(error => {
        this.successMessage = null;
        this.errorMessage = 'Exam quiz creation failed';
      });
  }

  initializeModel() {
    let simpleQuestion = new SimpleQuestionDto('', 'SIMPLE_QUESTION');
    let simpleAnswer = new SimpleAnswerDto('', 'SIMPLE_ANSWER');
    this.model = new SimpleQuestionAndAnswerDto(simpleQuestion, simpleAnswer);
  }
}
