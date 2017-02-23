import { Component } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiData: any = [];
  constructor(private http: Http) { }

  ngOnInit() {
    this.getDataFromSampleApi();
  }

  getDataFromSampleApi() {
    this.http.get("http://jsonplaceholder.typicode.com/comments")
      .map(res => res.json())
      .subscribe(
      data => this.apiData = data,
      error => console.log("request failed with :" + error)
      );
  }
}
