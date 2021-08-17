import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MdfLoginPageComponent } from './mdf-login-page/mdf-login-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TdfLoginPageComponent } from './tdf-login-page/tdf-login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MdfLoginPageComponent,
    TdfLoginPageComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
