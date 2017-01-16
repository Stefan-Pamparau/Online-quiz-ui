import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {RestEndpointConfig} from "./configuration/RestEndpointConfig";
import {LoginService} from "./LoginService";
import {UsersDto} from "../dto/composed/UsersDto";
import {UserDto} from "../dto/UserDto";

@Injectable()
export class UserService {

  private headers: Headers;

  constructor(private http: Http, private restEndpointConfig: RestEndpointConfig, private loginService: LoginService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getUsersByEmailPattern(pattern: string): Promise<UsersDto> {
    if (this.loginService.loggedUser == null) {
      return Promise.reject(new Error("Nobody is logged in"));
    }
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.get(this.restEndpointConfig.server + "/user/find/email/pattern/" + pattern, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as UsersDto)
      .catch(this.handleError);
  }

  public addFriend(friend: UserDto): Promise<any> {
    if (this.loginService.loggedUser == null) {
      return Promise.reject(new Error("Nobody is logged in"));
    }
    this.headers.delete("Authorization");
    let friendDtoJson = JSON.stringify(friend);
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.put(this.restEndpointConfig.server + "/user/add/friend/", friendDtoJson, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  public removeFriend(friend: UserDto): Promise<any> {
    if (this.loginService.loggedUser == null) {
      return Promise.reject(new Error("Nobody is logged in"));
    }
    this.headers.delete("Authorization");
    let friendDtoJson = JSON.stringify(friend);
    this.headers.append("Authorization", "Basic " + btoa(this.loginService.loggedUser.email + ":" + this.loginService.loggedUser.password));
    return this.http.put(this.restEndpointConfig.server + "/user/remove/friend/", friendDtoJson, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred while trying to login', error);
    return Promise.reject(error.message || error);
  }
}
