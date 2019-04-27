import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../pages/contacts/contacts.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { UserComponent } from 'src/pages/users/users.component';
import { NewContactComponent } from 'src/pages/contacts/new/newcontacts.component';
import { RegisterComponent } from 'src/pages/register/register.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'api/contacts', component: ContactComponent },
  { path: 'api/contacts/new', component: NewContactComponent },
  { path: 'api/login', component: LoginComponent },
  { path: 'api/register', component: RegisterComponent },
  { path: 'api/users', component: UserComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
