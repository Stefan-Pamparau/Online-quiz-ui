import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {OnlineQuizComponent} from "./online-quiz-component/online-quiz.component";
import {FormsModule} from "@angular/forms";
import {OnlineQuizRoutingModule} from "../online-quiz-routing-module/online-quiz-routing.module";
import {HomePageComponent} from "./main-page-component/home-page.component";
import {NavbarComponent} from "./navbar-component/navbar.component";
import {FooterComponent} from "./footer-component/footer.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    OnlineQuizRoutingModule
  ],
  declarations: [
    OnlineQuizComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: [OnlineQuizComponent]
})
export class OnlineQuizModule {
}
