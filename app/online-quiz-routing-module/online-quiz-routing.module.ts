import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "../online-quiz-module/home-page-component/home-page.component";
import {LoginComponent} from "../online-quiz-module/login-component/login.component";
import {RegisterComponent} from "../online-quiz-module/register-component/register.component";
import {CreateExamQuizComponent} from "../online-quiz-module/exam-quiz/create-exam-quiz/create-exam-quiz.component";
import {CreateGamefiedQuizComponent} from "../online-quiz-module/gamefied-quiz/create-gamefied-quiz/create-gamefied-quiz.component";
import {SelectQuizComponent} from "../online-quiz-module/select-quiz-component/select-quiz.component";
import {ProfilePageComponent} from "../online-quiz-module/user/profile-page/profile-page.component";
import {LobbyCountdownComponent} from "../online-quiz-module/lobby/lobby-countdown/lobby-countdown.component";
import {PlayExamQuizComponent} from "../online-quiz-module/exam-quiz/play-exam-quiz/play-exam-quiz.component";
import {ClientActivityReportComponent} from "../online-quiz-module/client-report/client-activity-report/client-activity-report.component";
import {NobodyLoggedInErrorComponent} from "../online-quiz-module/error/nobody-logged-in-error/nobody-logged-in-error.component";
import {AddExamQuizQuestionsAndAnswersComponent} from "../online-quiz-module/exam-quiz/add-exam-quiz-questions-and-answers/add-exam-quiz-questions-and-answers.component";
import {ClientScoreReportComponent} from "../online-quiz-module/client-report/client-score-report/client-score-report.component";
import {UserListComponent} from "../online-quiz-module/user/user-list/user-list.component";
import {UsersScoreReportComponent} from "../online-quiz-module/client-report/users-score-report/users-score-report.component";

const routes: Routes = [
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'selectQuiz', component: SelectQuizComponent},
  {path: 'examQuiz/create', component: CreateExamQuizComponent},
  {path: 'examQuiz/addQuestionsAndAnswers', component: AddExamQuizQuestionsAndAnswersComponent},
  {path: 'gamefiedQuiz/create', component: CreateGamefiedQuizComponent},
  {path: 'profilePage', component: ProfilePageComponent},
  {path: 'startLobbyCountdown/:quizId', component: LobbyCountdownComponent},
  {path: 'playExamQuiz/:quizId', component: PlayExamQuizComponent},
  {path: 'clientActivityReport', component: ClientActivityReportComponent},
  {path: 'clientScoreReport', component: ClientScoreReportComponent},
  {path: 'usersScoreReport', component: UsersScoreReportComponent},
  {path: 'error/nobodyLoggedIn', component: NobodyLoggedInErrorComponent},
  {path: 'searchUsers', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OnlineQuizRoutingModule {
}
