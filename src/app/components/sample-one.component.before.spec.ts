import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleOneComponent } from './sample-one.component';
import { ConvertToSnake } from '../pipes/string.pipe';

describe('SampleOneComponent', () => {
  let fixture: ComponentFixture<SampleOneComponent>;
  let component: SampleOneComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleOneComponent, ConvertToSnake],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleOneComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      'Case #1: Having child components with logic and pipes'
    );
  });

  it('should render correct content', () => {
    setupComponent();
    const testName = 'John Doe';
    component.name = testName;
    const expectedName = ConvertToSnack.prototype.transform(testName);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(expectedName);
  });

  describe('render the correct value', () => {
    it('should render the first name', () => {
      component.fullName = 'Vinh Bach';
      fixture.detectChanges();

      const firstNameComponent =
        fixture.nativeElement.querySelectorAll('block')[0];

      expect(firstNameComponent.textContent).toContain('VINH');
    });

    it('should render the last name', () => {
      component.fullName = 'Vinh Bach';
      fixture.detectChanges();

      const firstNameComponent =
        fixture.nativeElement.querySelectorAll('block')[1];

      expect(firstNameComponent.textContent).toContain('BACH');
    });
  });
});
