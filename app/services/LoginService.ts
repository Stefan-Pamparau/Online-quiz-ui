import "rxjs/add/operator/toPromise";
import {Http, Headers} from "@angular/http";
import {RestEndpointConfig} from "./configuration/RestEndpointConfig";
import {LoginDto} from "../model/dto/LoginDto";
import {Injectable} from "@angular/core";
import {User} from "../model/User";

@Injectable()
export class LoginService {

  private headers: Headers;
  private loggedUser: User;

  constructor(private http: Http, private restEndpointConfig: RestEndpointConfig) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public login(loginParams: LoginDto): Promise<User> {
    let loginCredentials = JSON.stringify(loginParams);
    return this.http.post(this.restEndpointConfig.server + "/login", loginCredentials, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.loggedUser = response.json() as User;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred while trying to login', error);
    return Promise.reject(error.message || error);
  }
}
