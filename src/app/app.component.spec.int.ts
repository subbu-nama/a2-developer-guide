import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoService }   from '../shared/services/userinfo.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  
  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;

   beforeEach(async(() => {
    TestBed.configureTestingModule({
       declarations: [ AppComponent ],
       imports: [HttpModule],
       providers:    [ UserInfoService ],
    });

    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getUserInfo
      fixture.detectChanges();        
    });
    
  }));

  // Before checking the apiData length, wait till the real service returns the data.
  it('should have userinfo after component is initiated', () => {
      console.log(comp.apiData);
      expect(comp.apiData.length).toBe(500);
  });

});