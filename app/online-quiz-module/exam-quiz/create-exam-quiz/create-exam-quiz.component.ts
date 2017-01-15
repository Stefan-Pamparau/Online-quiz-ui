import {Component, OnInit} from "@angular/core";
import {SimpleQuestionAndAnswerDto} from "../../../dto/composed/SimpleQuestionAndAnswerDto";
import {ExamQuizService} from "../../../services/ExamQuizService";
import {Location} from "@angular/common";
import {SimpleQuestionDto} from "../../../dto/SimpleQuestionDto";
import {SimpleAnswerDto} from "../../../dto/SimpleAnswerDto";
import {ExamQuizDto} from "../../../dto/ExamQuizDto";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'create-exam-quiz',
  templateUrl: `create-exam-quiz.component.html`,
  styleUrls: ['create-exam-quiz.component.css']
})
export class CreateExamQuizComponent implements OnInit {

  model: SimpleQuestionAndAnswerDto;
  submitted: boolean;
  successMessage: string;
  errorMessage: string;

  constructor(private examQuizService: ExamQuizService, private location: Location, private router: Router) {
    this.initializeModel();
    this.submitted = false;
  }

  ngOnInit(): void {
    this.examQuizService.startExamQuizCreation(new ExamQuizDto('EXAM_QUIZ')).catch(error => {
      this.successMessage = null;
      this.errorMessage = 'Exam quiz creation failed'
    });
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
    this.examQuizService.finishExamQuizCreation(this.model).catch(error => {
      this.successMessage = null;
      this.errorMessage = 'Exam quiz creation failed';
    });
    this.router.navigate(['/']);
  }

  initializeModel() {
    let simpleQuestion = new SimpleQuestionDto('', 'SIMPLE_QUESTION');
    let simpleAnswer = new SimpleAnswerDto('', 'SIMPLE_ANSWER');
    this.model = new SimpleQuestionAndAnswerDto(simpleQuestion, simpleAnswer);
  }
}
