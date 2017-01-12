import "rxjs/add/operator/toPromise";
import {Http, Headers} from "@angular/http";
import {RestEndpointConfig} from "./configuration/RestEndpointConfig";
import {Injectable} from "@angular/core";
import {UserDto} from "../dto/UserDto";

@Injectable()
export class RegisterService {

  private headers: Headers;

  constructor(private http: Http, private restEndpointConfig: RestEndpointConfig) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public register(user: UserDto): Promise<UserDto> {
    let userJson = JSON.stringify(user);
    return this.http.post(this.restEndpointConfig.server + "/register", userJson, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as UserDto)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred while trying to login', error);
    return Promise.reject(error.message || error);
  }
}
