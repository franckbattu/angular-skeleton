import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressButtonComponent } from './progress-button.component';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it, vi } from 'vitest';

@Component({
  template: `<skt-progress-button [loading]="true" [disabled]="false">Test</skt-progress-button>`,
  imports: [ProgressButtonComponent],
})
class HostComponent {}

describe('ProgressButtonComponent', () => {
  let fixture: ComponentFixture<ProgressButtonComponent>;
  let component: ProgressButtonComponent;

  const button = () => fixture.debugElement.query(By.css('button'));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressButtonComponent, HostComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('loading', false);
    fixture.componentRef.setInput('disabled', false);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show ng-content content', () => {
    const testFixture = TestBed.createComponent(HostComponent);
    const element = testFixture.debugElement.query(By.css('button')).nativeElement;

    expect(element.textContent).toContain('Test');
  });

  it('should display spinner inside the button', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    const spinner = button().query(By.css('svg'));

    expect(spinner).toBeTruthy();
  });

  it('should not display spinner if component is only disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const spinner = button().query(By.css('svg'));

    expect(spinner).toBeFalsy();
  });

  it('should trigger clickEvent on button click', () => {
    vi.spyOn(component.clickEvent, 'emit');
    button().nativeElement.click();

    expect(component.clickEvent.emit).toHaveBeenCalled();
  });

  it('should not trigger clickEvent when button is disabled', () => {
    vi.spyOn(component.clickEvent, 'emit');
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    button().nativeElement.click();

    expect(component.clickEvent.emit).not.toHaveBeenCalled();
  });

  it('should not trigger clickEvent when button is loading', () => {
    vi.spyOn(component.clickEvent, 'emit');
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    button().nativeElement.click();

    expect(component.clickEvent.emit).not.toHaveBeenCalled();
  });

  it('should add additional class', () => {
    fixture.componentRef.setInput('class', 'btn');
    fixture.detectChanges();
    expect(button().nativeElement.className).toContain('btn');
  });
});
