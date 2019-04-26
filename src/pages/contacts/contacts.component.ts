import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class ContactComponent implements AfterViewInit {
    @ViewChild('nameInput') nameInput: ElementRef;


    formData: {
        name: string,
        email: string,
        message: string
    } = {
            name: '',
            email: '',
            message: ''
        }

    nameValid: boolean = false;
    emailValid: boolean = false;
    messageValid: boolean = false;

    nameErrorMessage: string = 'initial';
    emailErrorMessage: string = 'initial';
    messageErrorMessage: string = 'initial';

    constructor() {
    }

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

    validateMessage() {
        if (!this.formData.message) {
            this.messageErrorMessage = 'Message is required.';
        } else if (this.formData.message.length < 3) {
            this.messageErrorMessage = 'Message must be 3 characters or more.';
        } else {
            this.messageErrorMessage = '';
        }
    }

    submit() {
        console.log('SUBMITTEEEEDDDDD!')
        if (this.nameErrorMessage || this.emailErrorMessage || this.messageErrorMessage) {
            return;
        }
    }

    clearData() {
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
        this.messageErrorMessage = 'Message must be 3 characters or more.';
        this.nameErrorMessage = 'Name must be 3 characters or more.';
        this.emailErrorMessage = 'Email must be valid.'
    };


}