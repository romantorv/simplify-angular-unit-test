import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlService } from '../services/url.service';
import { SampleTwoComponent } from './sample-two.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { MockConvertToSnack } from '../pipes/string.pipe.mocks';

describe('SampleTwoComponent', () => {
  let fixture: ComponentFixture<SampleTwoComponent>;
  let component: SampleTwoComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTwoComponent, MockConvertToSnack],
      providers: [
        { provide: UrlService, useValue: { apiRoot: 'mockAPIPath' } },
      ],
      imports: [CommonModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleTwoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      'Case #2: Having services with pipes'
    );
  });

  it('should render correct content', () => {
    const inputName = 'John Doe';
    component.name = inputName;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      `Hello ${inputName}`
    );
  });

  describe('fetchURL', () => {
    it('should return correct value', () => {
      expect(component.fetchURL).toBe('mockAPIPath');
    });
  });
});
