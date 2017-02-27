import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';
import { DebugElement }              from '@angular/core';

import { UserInfoService }   from '../shared/services/userinfo.service';
import { Observable } from 'rxjs/Rx';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  
  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let spy: jasmine.Spy;
  let userInfoService: UserInfoService;
  
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
       declarations: [ AppComponent ],
       imports: [HttpModule],
       providers:    [ UserInfoService ],
    });

    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;

    // UserInfoService actually injected into the component
    userInfoService = fixture.debugElement.injector.get(UserInfoService);

    // Setup spy on the `getUserInfo` method
    spy = spyOn(userInfoService, 'getUserInfo')
          .and.returnValue(
          new Observable<Array<any>>(observer => {
       observer.next(userInfo);
       observer.complete();          
    }));
    
  });

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
