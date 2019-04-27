import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../server/database/models/contact_model.js';
@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactComponent implements OnInit {
    cardData: {
        id: number,
        name: string,
        email: string,
        created_at: string,
        updated_at: string,
        address: string,
        mobile: string,
        work: string,
        home: string,
        twitter: string,
        instagram: string,
        github: string
    } = {
            id: 0,
            name: '',
            email: '',
            created_at: '',
            updated_at: '',
            address: '',
            mobile: '',
            work: '',
            home: '',
            twitter: '',
            instagram: '',
            github: ''
        }

    constructor() { };
    ngOnInit() { };
}