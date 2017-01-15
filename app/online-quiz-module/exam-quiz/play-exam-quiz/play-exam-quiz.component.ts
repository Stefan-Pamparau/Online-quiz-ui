import {Component, OnInit} from "@angular/core";
import {ExamQuizService} from "../../../services/ExamQuizService";
import {Location} from "@angular/common";
import {Router, ActivatedRoute} from "@angular/router";
import {ExamQuizWithQuestionsDto} from "../../../dto/composed/ExamQuizWithQuestionsDto";
import {SimpleAnswerService} from "../../../services/SimpleAnswerService";
import {ClientSimpleAnswerDto} from "../../../dto/composed/ClientSimpleAnswerDto";
import {LobbyService} from "../../../services/LobbyService";

@Component({
  moduleId: module.id,
  selector: 'play-exam-quiz',
  templateUrl: `play-exam-quiz.component.html`,
  styleUrls: ['play-exam-quiz.component.css']
})
export class PlayExamQuizComponent implements OnInit {

  examQuiz: ExamQuizWithQuestionsDto;
  submitted: boolean;
  quizId: number;
  currentQuestionIndex: number;
  currentQuestion: string;
  answer: string;
  successMessage: string;
  errorMessage: string;

  constructor(private examQuizService: ExamQuizService, private simpleAnswerService: SimpleAnswerService, private lobbyService: LobbyService, private location: Location, private router: Router, private route: ActivatedRoute) {
    this.submitted = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.quizId = params['quizId']);
    this.examQuizService.getExamQuizWithQuestions(this.quizId)
      .then(response => {
        this.examQuiz = response;
        this.currentQuestionIndex = 0;
        this.currentQuestion = this.examQuiz.simpleQuestionDtos[this.currentQuestionIndex].questionText;
      })
      .catch(error => this.errorMessage = 'Failed to retrieve exam quiz');
  }

  onSubmit(): void {
    let clientSimpleAnswerDto = new ClientSimpleAnswerDto(this.answer, this.examQuiz.simpleQuestionDtos[this.currentQuestionIndex]);
    this.simpleAnswerService.verifyAnswer(clientSimpleAnswerDto)
      .then(response => {
        this.answer = '';
        this.currentQuestionIndex++;
        this.successMessage = 'Answer sent successfully';
        if (this.currentQuestionIndex < this.examQuiz.simpleQuestionDtos.length) {
          this.currentQuestion = this.examQuiz.simpleQuestionDtos[this.currentQuestionIndex].questionText;
        } else {
          this.lobbyService.finishSessionLobby();
          this.router.navigate(['/profilePage']);
        }
      })
      .catch(error => this.errorMessage = 'Failed to check answer')
  }
}
