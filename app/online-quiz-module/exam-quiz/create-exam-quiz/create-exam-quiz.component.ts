import {Component} from "@angular/core";
import {ExamQuizService} from "../../../services/ExamQuizService";
import {Location} from "@angular/common";
import {ExamQuizDto} from "../../../dto/ExamQuizDto";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/LoginService";

@Component({
  moduleId: module.id,
  selector: 'create-exam-quiz',
  templateUrl: `create-exam-quiz.component.html`,
  styleUrls: ['create-exam-quiz.component.css']
})
export class CreateExamQuizComponent {

  model: ExamQuizDto;
  submitted: boolean;
  successMessage: string;
  errorMessage: string;

  constructor(private examQuizService: ExamQuizService, private location: Location, private router: Router, private loginService: LoginService) {
    this.submitted = false;
    this.model = new ExamQuizDto('EXAM_QUIZ', 'Default title', 'Default description');
  }

  onSubmit(): void {
    this.submitted = true;
    this.examQuizService.startExamQuizCreation(this.model)
      .then(response => {
        this.successMessage = 'Exam quiz created successfully';
        this.router.navigate(['/examQuiz/addQuestionsAndAnswers']);
      })
      .catch(error => {
        this.errorMessage = 'Exam quiz creation failed';
        if (this.loginService.loggedUser == null) {
          this.router.navigate(['error/nobodyLoggedIn']);
        }
      });
  }
}
