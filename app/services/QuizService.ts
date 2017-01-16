import {Headers, Http} from "@angular/http";
import {RestEndpointConfig} from "./configuration/RestEndpointConfig";
import {LoginService} from "./LoginService";
import {Injectable} from "@angular/core";
import {QuizDto} from "../dto/QuizDto";
import {Router} from "@angular/router";

@Injectable()
export class QuizService {

  private headers: Headers;

  constructor(private http: Http, private restEndpointConfig: RestEndpointConfig, private loginService: LoginService, private router: Router) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getQuizWithId(quizId: number): Promise<QuizDto> {
    if (this.loginService.loggedUser == null) {
      this.router.navigate(['error/nobodyLoggedIn']);
      return;
    }
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.get(this.restEndpointConfig.server + "/quiz/get/" + quizId, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as QuizDto)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
