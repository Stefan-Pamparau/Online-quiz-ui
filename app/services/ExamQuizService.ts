import {Headers, Http} from "@angular/http";
import {RestEndpointConfig} from "./configuration/RestEndpointConfig";
import {ExamQuizDto} from "../dto/ExamQuizDto";
import {LoginService} from "./LoginService";
import {Injectable} from "@angular/core";
import {SimpleQuestionAndAnswerDto} from "../dto/composed/SimpleQuestionAndAnswerDto";
import {ExamQuizWithQuestionsDto} from "../dto/composed/ExamQuizWithQuestionsDto";

@Injectable()
export class ExamQuizService {

  private headers: Headers;

  constructor(private http: Http, private restEndpointConfig: RestEndpointConfig, private loginService: LoginService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public startExamQuizCreation(examQuizDto: ExamQuizDto): Promise<ExamQuizDto> {
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    let examQuizJson = JSON.stringify(examQuizDto);
    return this.http.post(this.restEndpointConfig.server + "/examQuiz/startExamQuizCreation", examQuizJson, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  public addSimpleQuestionAndAnswer(simpleQuestionAndAnswerDto: SimpleQuestionAndAnswerDto) {
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    let questionAndAnswerDto = JSON.stringify(simpleQuestionAndAnswerDto);
    return this.http.put(this.restEndpointConfig.server + "/examQuiz/addQuestionAndAnswer", questionAndAnswerDto, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  public finishExamQuizCreation(simpleQuestionAndAnswerDto: SimpleQuestionAndAnswerDto) {
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    let questionAndAnswerDto = JSON.stringify(simpleQuestionAndAnswerDto);
    return this.http.post(this.restEndpointConfig.server + "/examQuiz/finishExamQuizCreation", questionAndAnswerDto, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  public getExamQuizWithQuestions(quizId: number): Promise<ExamQuizWithQuestionsDto> {
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.get(this.restEndpointConfig.server + "/examQuiz/get/withQuestions/" + quizId, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as ExamQuizWithQuestionsDto)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
