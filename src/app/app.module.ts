import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//ui things
import 'typeface-roboto';



//imports components
import { AppComponent } from './app.component';
import { ContactComponent } from 'src/pages/contacts/contacts.component';
import { HeaderComponent } from 'src/pages/shared/header.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { UserComponent } from 'src/pages/users/users.component';
import { SearchComponent } from 'src/pages/main/search/search.component';
import { NewContactComponent } from 'src/pages/contacts/new/newcontacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from '../pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    UserComponent,
    SearchComponent,
    NewContactComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
