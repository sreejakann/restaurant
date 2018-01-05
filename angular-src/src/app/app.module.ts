import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { SignupComponent } from './components/signup/signup.component';

const appRoutes : Routes = [
	{path:'login', component:LoginComponent},
	{path:'signup', component:SignupComponent},
	{path:'user', component:UserComponent},
	{path:'', redirectTo:'/login', pathMatch:"full"}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
		SignupComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,	
		RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
