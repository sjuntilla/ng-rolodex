import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AggregateError } from 'bluebird';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    user: {
        loggedIn: boolean,
        username: string,
        user_id: number

    } = {
            loggedIn: false,
            username: '',
            user_id: 0
        };

    //subject to hold isLoggedIn value (default=false)

    private _isLoggedInSubject = new BehaviorSubject<boolean>(false);

    //on application load
    constructor(private router: Router) {
        //check if user is in localStorage
        let userString = window.localStorage.getItem('user');
        try {
            if (userString) { this.user = JSON.parse(userString); }
            else {
                console.log('user not found');
                this.user.loggedIn = false;
                this.user.username = '';
                this.user.user_id = 0;
            }


            //update _isLoggedInSubject in construction
            this._isLoggedInSubject.next(!!userString);
        }
        catch (err) {
            console.log('could not parse user!');
        }
    }


    //login
    setSession(user) {
        //save to memory 
        console.log(`setSession: ${user}`); 
        this.user.username = user.username;
        this.user.user_id = user.user_id;
        this.user.loggedIn = true;
        //save to localStorage
        let userString = JSON.stringify(this.user);
        window.localStorage.setItem('user', userString);


        //update subject
        this._isLoggedInSubject.next(true);
    }

    //logout
    clearSession() {
        this.user.username = '';
        this.user.loggedIn = false;
        this.user.user_id = 0;
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