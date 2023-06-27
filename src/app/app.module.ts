import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1/question1.component';
import { Question2Component } from './question2/question2/question2.component';
import { Question3Component } from './question3/question3/question3.component';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './question4/comp1/comp1.component';
import { Comp2Component } from './question4/comp2/comp2.component';
import { Comp3Component } from './question4/comp3/comp3.component';
import { Comp4Component } from './question4/comp4/comp4.component';
import { CenterComponent } from './question4/center/center.component';
import { Question4Component } from './question4/question4/question4.component';



@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    CenterComponent,
    Question4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
