import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // activatedEventEmitter = new EventEmitter<boolean>();
    activatedEventEmitter = new Subject<boolean>();
}