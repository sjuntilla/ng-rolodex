import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../app/services/backend.service';
import Typography from '@material-ui/core/Typography';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    color: string = 'red';
    movie: string = 'Star Wars';
    show: boolean = true;

    movies: { title: string }[] = [];

    constructor(private backend: BackendService) { }

    ngOnInit() {

    }

    toggle(e: any, show: boolean) {
        console.log(e);
        console.log(show);
        this.show = !this.show;
    }

}
