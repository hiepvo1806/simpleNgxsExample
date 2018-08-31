import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputCompComponent } from './input-comp/input-comp.component';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { UserState } from '../xs-add/state/userState';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { Update2CompComponent } from './update2-comp/update2-comp.component';
const route: Route[] = [
  {
    path: 'input-comp',
    component: InputCompComponent
  },
  {
    path: 'age-update',
    component: Update2CompComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InputCompComponent,
    Update2CompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    //ngxs section
    NgxsModule.forRoot([
      UserState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
