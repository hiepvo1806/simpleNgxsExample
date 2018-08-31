import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { UserState } from '../xs-add/state/userState';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { InputCompComponent } from './user/input-comp/input-comp.component';
import { Update2CompComponent } from './user/update2-comp/update2-comp.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { BookState } from '../xs-add/state/bookState';
const route: Route[] = [
  {
    path: 'input-comp',
    component: InputCompComponent
  },
  {
    path: 'age-update',
    component: Update2CompComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InputCompComponent,
    Update2CompComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    //ngxs section
    NgxsModule.forRoot([
      UserState,
      BookState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
