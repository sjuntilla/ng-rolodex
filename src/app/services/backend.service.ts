import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { some } from 'bluebird';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    url: string = 'http://localhost:8080';

    constructor(private http: HttpClient, private session: SessionService) { }

    register(user) {
        const endpoint = this.url;
        return this.http.post(endpoint + '/api/register', user).toPromise();
    }

    login(user) {
        console.log(user);
        const endpoint = this.url;
        return this.http.post(endpoint + '/api/login', user).toPromise();
    }

    logout() {
        const endpoint = this.url;
        return this.http.post(endpoint + '/api/logout', null).toPromise();
    }

    getCards() {
        const endpoint = this.url;
        return this.http.get(endpoint + '/api/contacts', null).toPromise();
    }

    addCard(card) {
        console.log(card);
        const endpoint = this.url;
        return this.http.post(endpoint + '/api/contacts', card).toPromise();
    }

    deleteCard(card) {
        const endpoint = this.url;
        return this.http.delete(endpoint + `/api/contacts/${card.id}`, card).toPromise();
    }

}

