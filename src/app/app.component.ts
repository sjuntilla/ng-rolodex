import { Component } from '@angular/core';
import { BackendService } from '../../src/app/services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-rolodex';
  cards: Object[] = [];
  newCard: {
    name: string,
    email: string,
    mobile: number,
    work: number,
    home: number,
    twitter: string,
    github: string,
    instagram: string
  } = {
      name: '',
      email: '',
      mobile: 0,
      work: 0,
      home: 0,
      twitter: '',
      github: '',
      instagram: ''
    }

  constructor() { }
}
