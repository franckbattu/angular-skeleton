import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'router-outlet',
  template: '<ng-content />',
})
class MockRouterOutletComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideZonelessChangeDetection()],
    })
      .overrideComponent(AppComponent, {
        remove: {
          imports: [RouterOutlet],
        },
        add: {
          imports: [MockRouterOutletComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: remove after update to Angular 20
  afterEach(() => TestBed.resetTestingModule());

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render router outlet', () => {
    const router = fixture.debugElement.query(By.directive(MockRouterOutletComponent));
    expect(router).toBeTruthy();
  });
});
