import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlService } from '../services/url.service';
import { SampleTwoComponent } from './sample-two.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CommonModule } from '@angular/common';

describe('SampleTwoComponent', () => {
  let fixture: ComponentFixture<SampleTwoComponent>;
  let component: SampleTwoComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTwoComponent],
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
  });

  it('should render correct content', () => {
    component.name = 'John Doe';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Hello John Doe');
  });

  it('should return correct value', () => {
    expect(component.fetchURL).toContain('mockAPIPath');
  });
});
