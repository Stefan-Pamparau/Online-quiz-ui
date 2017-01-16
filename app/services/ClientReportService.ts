import {Headers, Http} from "@angular/http";
import {RestEndpointConfig} from "./configuration/RestEndpointConfig";
import {LoginService} from "./LoginService";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ClientScoreReportDto} from "../dto/report/ClientScoreReportDto";
import {ClientActivityReportDto} from "../dto/report/ClientActivityReportDto";

@Injectable()
export class ClientReportService {

  private headers: Headers;

  constructor(private http: Http, private restEndpointConfig: RestEndpointConfig, private loginService: LoginService, private router: Router) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getClientActivityReport(): Promise<ClientActivityReportDto> {
    if (this.loginService.loggedUser == null) {
      this.router.navigate(['error/nobodyLoggedIn']);
      return;
    }
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.get(this.restEndpointConfig.server + "/reports/clientActivityReport", {headers: this.headers})
      .toPromise()
      .then(response => response.json() as ClientActivityReportDto)
      .catch(this.handleError);
  }

  public getClientScoreReport(): Promise<ClientScoreReportDto> {
    if (this.loginService.loggedUser == null) {
      this.router.navigate(['error/nobodyLoggedIn']);
      return;
    }
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.get(this.restEndpointConfig.server + "/reports/clientScoreReport", {headers: this.headers})
      .toPromise()
      .then(response => response.json() as ClientScoreReportDto)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
