import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { AppComponent } from './app.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import{UserloginComponent} from './userlogin/userlogin.component';
import{CardsComponent} from './cards/cards.component';

const routes: Routes = [


  {path:'', redirectTo: '/home', pathMatch: 'full'},
  { path: 'recover-password', component: RecoverPasswordComponent},
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'app', component: AppComponent},
  {path: 'userlogin', component: UserloginComponent},
  {path: 'cards', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
