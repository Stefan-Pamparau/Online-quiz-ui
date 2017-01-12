import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "../online-quiz-module/home-page-component/home-page.component";
import {LoginComponent} from "../online-quiz-module/login-component/login.component";
import {RegisterComponent} from "../online-quiz-module/register-component/register.component";

const routes: Routes = [
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OnlineQuizRoutingModule {
}
