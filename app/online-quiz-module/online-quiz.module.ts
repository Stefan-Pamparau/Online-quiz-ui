import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {OnlineQuizComponent} from "./online-quiz-component/online-quiz.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {OnlineQuizRoutingModule} from "../online-quiz-routing-module/online-quiz-routing.module";
import {HomePageComponent} from "./home-page-component/home-page.component";
import {NavbarComponent} from "./navbar-component/navbar.component";
import {FooterComponent} from "./footer-component/footer.component";
import {LoginComponent} from "./login-component/login.component";
import {RestEndpointConfig} from "../services/configuration/RestEndpointConfig";
import {LoginService} from "../services/LoginService";
import {RegisterService} from "../services/RegisterService";
import {RegisterComponent} from "./register-component/register.component";
import {SelectQuizComponent} from "./select-quiz-component/select-quiz.component";
import {CreateExamQuizComponent} from "./exam-quiz/create-exam-quiz/create-exam-quiz.component";
import {CreateGamefiedQuizComponent} from "./gamefied-quiz/create-gamefied-quiz/create-gamefied-quiz.component";
import {ExamQuizService} from "../services/ExamQuizService";
import {ClientService} from "../services/ClientService";
import {ProfilePageComponent} from "./user/profile-page/profile-page.component";
import {LobbyService} from "../services/LobbyService";
import {LobbyCountdownComponent} from "./lobby/lobby-countdown/lobby-countdown.component";
import {PlayExamQuizComponent} from "./exam-quiz/play-exam-quiz/play-exam-quiz.component";
import {QuizService} from "../services/QuizService";
import {SimpleAnswerService} from "../services/SimpleAnswerService";
import {ChartsModule} from "ng2-charts/ng2-charts";
import {ClientActivityReportComponent} from "./client-report/client-activity-report/client-activity-report.component";
import {ReportService} from "../services/ReportService";
import {NobodyLoggedInErrorComponent} from "./error/nobody-logged-in-error/nobody-logged-in-error.component";
import {AddExamQuizQuestionsAndAnswersComponent} from "./exam-quiz/add-exam-quiz-questions-and-answers/add-exam-quiz-questions-and-answers.component";
import {ClientScoreReportComponent} from "./client-report/client-score-report/client-score-report.component";
import {UserService} from "../services/UserService";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UsersScoreReportComponent} from "./client-report/users-score-report/users-score-report.component";
import {AdminService} from "../services/AdminService";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OnlineQuizRoutingModule,
    ChartsModule,
  ],
  declarations: [
    OnlineQuizComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    SelectQuizComponent,
    CreateExamQuizComponent,
    CreateGamefiedQuizComponent,
    AddExamQuizQuestionsAndAnswersComponent,
    ProfilePageComponent,
    LobbyCountdownComponent,
    PlayExamQuizComponent,
    ClientActivityReportComponent,
    ClientScoreReportComponent,
    UsersScoreReportComponent,
    NobodyLoggedInErrorComponent,
  ],
  providers: [
    ExamQuizService,
    RestEndpointConfig,
    LoginService,
    RegisterService,
    UserService,
    AdminService,
    ClientService,
    LobbyService,
    QuizService,
    SimpleAnswerService,
    ReportService,
  ],
  bootstrap: [OnlineQuizComponent]
})
export class OnlineQuizModule {
}
