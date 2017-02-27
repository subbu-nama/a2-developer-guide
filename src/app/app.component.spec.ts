/* tslint:disable:no-unused-variable */

import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { UserInfoService } from '../shared/services/userinfo.service';
import { Observable } from 'rxjs/Rx';
describe('AppComponent', () => {
  
  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let spy: jasmine.Spy;
  let userInfoService: UserInfoService;
  
   // Mock Service data
   const userInfo = [{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ], // declare the test components, can add multiple components.
      imports : [ HttpModule ],
      providers : [ UserInfoService ]
    });

    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // creates testing instance of component
    
    // query for the table by CSS element selector
    de = fixture.debugElement.query(By.css('table'));
    el = de.nativeElement;

    // UserInfoService actually injected into the component
    userInfoService = fixture.debugElement.injector.get(UserInfoService);

    // Setup spy on the `getUserInfo` method, returns mock service data.
    spy = spyOn(userInfoService, 'getUserInfo')
          .and.returnValue(
          new Observable<Array<any>>(observer => {
       observer.next(userInfo);
       observer.complete();          
    }));
  });

  // unit testing success case : Ensure Header area is existed or not
  it('header area', () => {
    fixture.detectChanges();
    expect(el.innerText).toMatch("HEADER AREA");
  });
  
  // unit testing success case : Ensure left area is existed or not
  it('left side area', () => {
    fixture.detectChanges();
    expect(el.innerText).toMatch("LEFT SIDE AREA");
  });

  // unit testing failure case : Ensure left area is existed or not
  it('layout left area', () => {
    fixture.detectChanges();
    expect(el.innerText).toMatch("LAYOUT LEFT AREA");
  });

  // Uses mock service data
   it('should show userinfo after getUserInfo observable (async)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getUserInfo
      fixture.detectChanges();        // update view with userInfo
      de = fixture.debugElement.query(By.css('.layout-center-area-alignment table tr td'));
      el = de.nativeElement;
      expect(3).toBe(userInfo.length);
      expect(Number(el.textContent)).toBe(userInfo[0].id);
    });
  }));

});
