import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { UserInfoService } from '../shared/services/userinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiData: any = [];
  constructor(private userInfoService: UserInfoService) { }

  ngOnInit() {
    this.userInfoService.getUserInfo()
      .subscribe(
      data => this.apiData = data,
      error => console.log("request failed with :" + error)
      );
  }

}
