import { Injectable, Inject } from '@angular/core';
import { Contact } from '../../../server/database/models/contact_model.js';
import { BackendService } from '../services/backend.service';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(private backend: BackendService) { }

}