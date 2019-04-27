import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BackendService } from '../../../app/services/backend.service';

@Component({
    selector: 'app-newcontacts',
    templateUrl: './newcontacts.component.html',
    styleUrls: ['./newcontacts.component.scss']
})

export class NewContactComponent implements AfterViewInit {
    @ViewChild('nameInput') nameInput: ElementRef;


    formData: {
        name: string,
        email: string,
        mobile: number,
        work: number,
        home: number,
        twitter: string,
        instagram: string,
        github: string,
        message: string
    } = {
            name: '',
            email: '',
            mobile: 0,
            work: 0,
            home: 0,
            twitter: '',
            instagram: '',
            github: '',
            message: ''
        }

    nameValid: boolean = false;
    // emailValid: boolean = false;
    messageValid: boolean = false;

    nameErrorMessage: string = 'initial';
    // emailErrorMessage: string = 'initial';
    messageErrorMessage: string = 'initial';

    constructor(private backend: BackendService) {
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

    // validateEmail() {
    //     if (!this.formData.email) {
    //         this.emailErrorMessage = 'Email is required.'
    //     } else if (this.formData.email.length < 3) {
    //         this.emailErrorMessage = 'Email must be 3 characters or more.'
    //     } else if (!this.formData.email.includes('@')) {
    //         this.emailErrorMessage = 'Email must be valid.'
    //     } else {
    //         this.emailValid = true;
    //     }
    // };

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
        if (this.nameErrorMessage || this.messageErrorMessage) {
            return;
        }
    }

    clearData() {
        this.formData.name = '';
        // this.formData.email = '';
        this.formData.message = '';
        this.messageErrorMessage = 'Message must be 3 characters or more.';
        this.nameErrorMessage = 'Name must be 3 characters or more.';
        // this.emailErrorMessage = 'Email must be valid.'
    };

    addCard() {
        this.backend.addCard(this.formData)
            .then(() => {
                console.log(`CARD ADDED: ${this.formData}`)!!
            })
            .catch((err) => {
                console.log(err);
            })
    }


}