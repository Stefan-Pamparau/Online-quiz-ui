import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OnlineQuizComponent }  from './online-quiz.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ OnlineQuizComponent ],
  bootstrap:    [ OnlineQuizComponent ]
})
export class OnlineQuizModule { }
