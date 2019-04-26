import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    user: {
        username: string,

    } = {
            username: '',

        };

    //subject to hold isLoggedIn value (default=false)

    private _isLoggedInSubject = new BehaviorSubject<boolean>(false);

    //on application load
    constructor() {
        //check if user is in localStorage
        let userString = window.localStorage.getItem('user');
        try {
            if (userString) { this.user = JSON.parse(userString); }
            else { console.log('user not found') }


            //update _isLoggedInSubject in construction
            this._isLoggedInSubject.next(!!userString);
        }
        catch (err) {
            console.log('could not parse user!');
        }
    }


    //login
    setSession(user: { username: string }) {
        //save to memory 
        this.user.username = user.username;
        //save to localStorage
        let userString = JSON.stringify(this.user);
        window.localStorage.setItem('user', userString);

        //update subject
        this._isLoggedInSubject.next(true);
    }

    //logout
    clearSession() {
        this.user.username = '';
        window.localStorage.removeItem('user');
        this._isLoggedInSubject.next(false);
    }

    //helper methods
    getSession() {
        return this.user;
    }

    isLoggedInAsObservable() {
        return this._isLoggedInSubject.asObservable();
    }
}