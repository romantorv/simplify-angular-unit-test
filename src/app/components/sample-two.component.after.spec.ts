import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlService } from '../services/url.service';
import { SampleTwoComponent } from './sample-two.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { MockUrlService, mockArticles } from '../services/url.service.mocks';

describe('SampleTwoComponent', () => {
  let fixture: ComponentFixture<SampleTwoComponent>;
  let component: SampleTwoComponent;
  let urlService: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTwoComponent],
      providers: [
        {
          provide: UrlService,
          useClass: MockUrlService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleTwoComponent);
    component = fixture.componentInstance;
    urlService = TestBed.inject(UrlService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      'Case #2: Having services with http fetching'
    );
  });

  describe('fetchURL', () => {
    it('should return correct value', () => {
      expect(component.fetchURL).toBe('mockAPIPath');
    });
  });

  describe('render fetched content', () => {
    it('should render the list of content', () => {
      urlService.articles = mockArticles;
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('li').length).toBe(2);
    });
  });
});
