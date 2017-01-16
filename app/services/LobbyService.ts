import {Headers, Http} from "@angular/http";
import {RestEndpointConfig} from "./configuration/RestEndpointConfig";
import {LoginService} from "./LoginService";
import {Injectable} from "@angular/core";
import {LobbyDto} from "../dto/LobbyDto";
import {Router} from "@angular/router";

@Injectable()
export class LobbyService {

  private headers: Headers;

  constructor(private http: Http, private restEndpointConfig: RestEndpointConfig, private loginService: LoginService, private router: Router) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public createSessionLobby(quizId: number): Promise<any> {
    if (this.loginService.loggedUser == null) {
      this.router.navigate(['error/nobodyLoggedIn']);
      return;
    }
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.get(this.restEndpointConfig.server + "/lobby/startSessionLobby/" + quizId, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  public getSessionLobby(): Promise<LobbyDto> {
    if (this.loginService.loggedUser == null) {
      this.router.navigate(['error/nobodyLoggedIn']);
      return;
    }
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.get(this.restEndpointConfig.server + "/lobby/getSessionLobby", {headers: this.headers})
      .toPromise()
      .then(result => result.json() as LobbyDto)
      .catch(this.handleError);
  }

  public updateSessionLobby(lobbyDto: LobbyDto): Promise<LobbyDto> {
    if (this.loginService.loggedUser == null) {
      this.router.navigate(['error/nobodyLoggedIn']);
      return;
    }
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    let lobbyDtoJson = JSON.stringify(lobbyDto);
    return this.http.post(this.restEndpointConfig.server + "/lobby/updateSessionLobby", lobbyDtoJson, {headers: this.headers})
      .toPromise()
      .then(result => result.json() as LobbyDto)
      .catch(this.handleError);
  }

  public finishSessionLobby(): Promise<any> {
    if (this.loginService.loggedUser == null) {
      this.router.navigate(['error/nobodyLoggedIn']);
      return;
    }
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.get(this.restEndpointConfig.server + "/lobby/finishSessionLobby", {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
