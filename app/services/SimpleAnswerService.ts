import "rxjs/add/operator/toPromise";
import {Http, Headers} from "@angular/http";
import {RestEndpointConfig} from "./configuration/RestEndpointConfig";
import {Injectable} from "@angular/core";
import {ClientSimpleAnswerDto} from "../dto/composed/ClientSimpleAnswerDto";
import {LoginService} from "./LoginService";
import {Router} from "@angular/router";

@Injectable()
export class SimpleAnswerService {

  private headers: Headers;

  constructor(private http: Http, private restEndpointConfig: RestEndpointConfig, private loginService: LoginService, private router: Router) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public verifyAnswer(clientSimpleAnswerDto: ClientSimpleAnswerDto): Promise<any> {
    if (this.loginService.loggedUser == null) {
      this.router.navigate(['error/nobodyLoggedIn']);
      return Promise.reject(new Error("Nobody is logged in"));
    }
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    let clientSimpleAnswerJson = JSON.stringify(clientSimpleAnswerDto);
    return this.http.post(this.restEndpointConfig.server + "/simpleAnswer/verifyAnswer", clientSimpleAnswerJson, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred while trying to login', error);
    return Promise.reject(error.message || error);
  }
}
