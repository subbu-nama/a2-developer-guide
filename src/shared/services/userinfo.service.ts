import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class UserInfoService {
    constructor(private http: Http) { }

    getUserInfo() {
        return this.http.get("http://jsonplaceholder.typicode.com/comments")
            .map(res => res.json());
    }
}
