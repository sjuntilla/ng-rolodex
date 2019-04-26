import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../app/services/auth.service';
import { SessionService } from '../../app/services/session.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    private _isLoggedIn: boolean = false;
    private _subscription;

    user: {
        username: string
    } = {
            username: ''
        };
    constructor(
        private router: Router,
        private auth: AuthService,
        private session: SessionService
    ) {
        this.user = this.session.getSession();
    }

    ngOnInit() {
        this._subscription = this.session.isLoggedInAsObservable();
        this._subscription.subscribe((loggedIn: boolean) => {
            this._isLoggedIn = loggedIn;
        },
            (error: any) => {
                console.log(error);
            })
    }



    getIsLoggedIn() {
        return this._isLoggedIn;
    }

    login() {
        return this.router.navigate(['/api/login']);
    }

    logout() {
        return this.auth.logout();
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}