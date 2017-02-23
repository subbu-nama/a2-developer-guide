/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
describe('AppComponent', () => {
  
  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ], // declare the test components, can add multiple components.
      imports : [ HttpModule ]
    });

    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // creates testing instance of component
    
    // query for the table by CSS element selector
    de = fixture.debugElement.query(By.css('table'));
    el = de.nativeElement;
  });

  // unit testing success case : Ensure Header area is existed or not
  it('header area', () => {
    fixture.detectChanges();
    expect(el.innerText).toMatch("HEADER AREA");
  });
  
  // unit testing success case : Ensure left area is existed or not
  it('left area', () => {
    fixture.detectChanges();
    expect(el.innerText).toMatch("LEFT AREA");
  });

  // unit testing failure case : Ensure left area is existed or not
  it('layout left area', () => {
    fixture.detectChanges();
    expect(el.innerText).toMatch("LAYOUT LEFT AREA");
  });
  
  // integration testing success case : Ensure apiData has zero records.
  it('apiData before apiCall', () => {
    fixture.detectChanges();
    expect(comp.apiData.length).toBe(0);
  });

  // integration testing success case : Ensure apiData has records.
  it('apiData after apiCall', (done) => {
      fixture.detectChanges();
      comp.getDataFromSampleApi();
      setTimeout(()=> {
      expect(comp.apiData.length).toBe(500);
      done();
      }, 2000);
  });

});
