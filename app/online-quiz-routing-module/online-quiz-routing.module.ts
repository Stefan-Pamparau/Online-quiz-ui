import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "../online-quiz-module/home-page-component/home-page.component";
import {LoginComponent} from "../online-quiz-module/login-component/login.component";
import {RegisterComponent} from "../online-quiz-module/register-component/register.component";
import {CreateExamQuizComponent} from "../online-quiz-module/exam-quiz/create-exam-quiz/create-exam-quiz.component";
import {CreateGamefiedQuizComponent} from "../online-quiz-module/gamefied-quiz/create-gamefied-quiz/create-gamefied-quiz.component";
import {SelectQuizComponent} from "../online-quiz-module/select-quiz-component/select-quiz.component";

const routes: Routes = [
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'selectQuiz', component: SelectQuizComponent},
  {path: 'examQuiz/create', component: CreateExamQuizComponent},
  {path: 'gamefiedQuiz/create', component: CreateGamefiedQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OnlineQuizRoutingModule {
}
