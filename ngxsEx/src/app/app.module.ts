import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputCompComponent } from './input-comp/input-comp.component';
import { RouterModule, Route} from '@angular/router';

const route : Route[] = [
  {
    path: 'input-comp',
    component : InputCompComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InputCompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
