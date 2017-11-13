import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { LoginComponent } from './login/login.component';

import { MessageService } from './_services/index';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CockpitComponent,
    ServerComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BodyComponent },
      { path: 'home', component: BodyComponent },
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegisterComponent}
    ])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
