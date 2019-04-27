import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    url: string = 'http://localhost:4200';

    constructor(private http: HttpClient, private session: SessionService) { }

    register(user) {
        const endpoint = this.url;
        return this.http.post(endpoint + '/api/register', user).toPromise();
    }

    login(user) {
        const endpoint = this.url;
        return this.http.post(endpoint + '/api/login', user).toPromise();
    }

    logout() {
        const endpoint = this.url;
        return this.http.post(endpoint + '/api/logout', null).toPromise();
    }
}