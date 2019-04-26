import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
    selector: 'app-new-contact',
    templateUrl: './newcontacts.component.html',
    styleUrls: ['./newcontacts.component.scss']
})

export class NewContactComponent implements AfterViewInit {
    @ViewChild('nameInput') nameInput: ElementRef;

    formData: {
        name: string,
        mobile: string,
        work: string,
        home: string,
        twitter: string,
        github: string,
        instagram: string,
        email: string,
        message: string
    } = {
            name: '',
            mobile: '',
            work: '',
            home: '',
            twitter: '',
            github: '',
            instagram: '',
            email: '',
            message: ''
        }

    nameValid: boolean = false;
    emailValid: boolean = false;
    usernameValid: boolean = false;
    messageValid: boolean = false;

    nameErrorMessage: string = 'init';
    emailErrorMessage: string = 'init';
    usernameErrorMessage: string = 'init';
    messageErrorMessage: string = 'init';

    constructor() { }

    ngAfterViewInit() {
        this.nameInput.nativeElement.focus();
    }

    validateName() {
        if (!this.formData.name) {
            this.nameErrorMessage = 'Name is required.';
        } else if (this.formData.name.length < 3) {
            this.nameErrorMessage = 'Name must be 3 characters or more.';
        } else {
            this.nameErrorMessage = '';
        }
    };

    validateEmail() {
        if (!this.formData.email) {
            this.emailErrorMessage = 'Email is required.'
        } else if (this.formData.email.length < 3) {
            this.emailErrorMessage = 'Email must be 3 characters or more.'
        } else if (!this.formData.email.includes('@')) {
            this.emailErrorMessage = 'Email must be valid.'
        } else {
            this.emailValid = true;
        }
    };


}