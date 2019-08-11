import { Component } from '@angular/core';
import { BackendService } from '../../app/services/backend.service';
@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactComponent {
    cards: Object[] = [];

    constructor(private backend: BackendService) {
        this.backend.getCards().then((res: Object[]) => {
            this.cards = res;
            console.log(res)
        })
    };

    delete() {
        console.log(`this will probably be deleted: ${this.cards}`);
    }

}

