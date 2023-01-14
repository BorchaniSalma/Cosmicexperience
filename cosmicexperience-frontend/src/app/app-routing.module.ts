import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent    },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'profile', component: TestComponent },
  {
    path: 'editProfile',
    component: TestComponent,

  },
  {
    path: 'createEvent',
    component: TestComponent,

  },
  { path: 'events', component: TestComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




