import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    url: string = 'http://localhost:4200';

    constructor(private http: HttpClient) { }

    register(user: { username: string }) {
        return this.http.post('/api/register', user).toPromise();

    }

    login(user: { username: string }) {
        return this.http.post('/api/login', user).toPromise();
    }

    logout() {
        return this.http.post('/api/logout', null).toPromise();

    }
}