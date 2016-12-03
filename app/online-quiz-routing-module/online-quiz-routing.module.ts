import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "../online-quiz-module/main-page-component/home-page.component";
import {LoginComponent} from "../online-quiz-module/login-component/login.component";
const routes: Routes = [
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OnlineQuizRoutingModule {
}
