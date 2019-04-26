import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BackendService } from '../../../app/services/backend.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
    @ViewChild('searchInput') searchInput: ElementRef;
    ngOnInit() { }
    ngAfterViewInit() {
        this.searchInput.nativeElement.focus();
    }


}