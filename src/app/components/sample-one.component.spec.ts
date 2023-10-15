import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleOneComponent } from './sample-one.component';

describe('SampleOneComponent', () => {
  let fixture: ComponentFixture<SampleOneComponent>;
  let component: SampleOneComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleOneComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleOneComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      'Case #1: Having child components with logic'
    );
  });

  describe('transformToNameObject', () => {
    it('should transform the fullName into a NameObject', () => {
      component.fullName = 'Vinh Bach';
      fixture.detectChanges();

      expect(component.nameObject).toEqual({
        firstName: 'Vinh',
        lastName: 'Bach',
      });
    });
  });
});
