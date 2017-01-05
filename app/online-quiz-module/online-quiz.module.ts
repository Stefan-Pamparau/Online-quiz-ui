import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {OnlineQuizComponent} from "./online-quiz-component/online-quiz.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {OnlineQuizRoutingModule} from "../online-quiz-routing-module/online-quiz-routing.module";
import {HomePageComponent} from "./main-page-component/home-page.component";
import {NavbarComponent} from "./navbar-component/navbar.component";
import {FooterComponent} from "./footer-component/footer.component";
import {LoginComponent} from "./login-component/login.component";
import {RestEndpointConfig} from "../services/configuration/RestEndpointConfig";
import {LoginService} from "../services/LoginService";
import {RegisterService} from "../services/RegisterService";
import {RegisterComponent} from "./register-component/register.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OnlineQuizRoutingModule
  ],
  declarations: [
    OnlineQuizComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    RestEndpointConfig,
    LoginService,
    RegisterService,
  ],
  bootstrap: [OnlineQuizComponent]
})
export class OnlineQuizModule {
}
