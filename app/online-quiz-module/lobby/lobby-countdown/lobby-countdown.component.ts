import {Component, OnInit} from "@angular/core";
import {LobbyService} from "../../../services/LobbyService";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {LobbyDto} from "../../../dto/LobbyDto";
import "rxjs/add/operator/switchMap";
import {QuizService} from "../../../services/QuizService";

@Component({
  moduleId: module.id,
  selector: 'lobby-countdown',
  templateUrl: `lobby-countdown.component.html`,
  styleUrls: ['lobby-countdown.component.css']
})
export class LobbyCountdownComponent implements OnInit {

  lobbyDto: LobbyDto;
  secondsUntilStart: number;
  errorMessage: string;
  quizId: number;

  constructor(private lobbyService: LobbyService, private quizService: QuizService, private location: Location, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.lobbyService.getSessionLobby()
      .then(response => {
        this.lobbyDto = response;
        this.secondsUntilStart = response.secondsUntilStart;
        this.tick();
        this.errorMessage = '';
      })
      .catch(error => this.errorMessage = 'Failed to retrieve lobby');

    this.route.params.subscribe(params => this.quizId = params['quizId']);
  }

  tick(): void {
    this.lobbyDto.secondsUntilStart--;
    this.secondsUntilStart = this.lobbyDto.secondsUntilStart;
    if (this.lobbyDto.secondsUntilStart <= 0) {
      this.quizService.getQuizWithId(this.quizId).then(response => {
        if (response.quizType == 'EXAM_QUIZ') {
          this.router.navigate(['/playExamQuiz', this.quizId])
        } else {

        }
      }).catch(error => this.errorMessage = 'Failed to retrieve quiz');
    } else {
      this.lobbyService.updateSessionLobby(this.lobbyDto).catch(error => this.errorMessage = 'Failed to update session lobby');
      setTimeout(() => {
        this.tick()
      }, 100);
    }
  }
}
