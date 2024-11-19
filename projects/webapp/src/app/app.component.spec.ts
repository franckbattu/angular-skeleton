import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'router-outlet',
  template: '<ng-content></ng-content>',
})
class MockRouterOutletComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, MockRouterOutletComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render router outlet', () => {
    const router = fixture.debugElement.query(By.css('router-outlet'));

    expect(router).toBeTruthy();
  });
});
