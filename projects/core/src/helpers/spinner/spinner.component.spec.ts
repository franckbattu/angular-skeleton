import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { By } from '@angular/platform-browser';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('SpinnerComponent', () => {
  let fixture: ComponentFixture<SpinnerComponent>;
  let component: SpinnerComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    component.size = 'lg';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct classes', () => {
    const svg = fixture.debugElement.query(By.css('svg'));

    expect(svg.classes['h-12']).toBeTrue();
    expect(svg.classes['w-12']).toBeTrue();
  });
});
