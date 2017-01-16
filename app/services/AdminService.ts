import {Headers, Http} from "@angular/http";
import {RestEndpointConfig} from "./configuration/RestEndpointConfig";
import {LoginService} from "./LoginService";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {CompleteAdminDto} from "../dto/composed/CompleteAdminDto";

@Injectable()
export class AdminService {

  private headers: Headers;

  constructor(private http: Http, private restEndpointConfig: RestEndpointConfig, private loginService: LoginService, private router: Router) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getLoggedAdminInformation(): Promise<CompleteAdminDto> {
    if (this.loginService.loggedUser == null) {
      this.router.navigate(['error/nobodyLoggedIn']);
      return Promise.reject(new Error("Nobody is logged in"));
    }
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.get(this.restEndpointConfig.server + "/admin/get/completeAdmin", {headers: this.headers})
      .toPromise()
      .then(response => response.json() as CompleteAdminDto)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
