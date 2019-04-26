import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../pages/contacts/contacts.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { UserComponent } from 'src/pages/users/users.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'api/contact', component: ContactComponent },
  { path: 'api/login', component: LoginComponent },
  { path: 'api/users', component: UserComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
