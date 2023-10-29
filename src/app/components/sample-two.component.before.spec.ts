import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UrlService } from '../services/url.service';
import { Env, EnvironmentType } from '../tokens';
import { SampleTwoComponent } from './sample-two.component';
import { mockArticleResponse } from '../services/url.service.mocks';

describe('SampleTwoComponent', () => {
  let fixture: ComponentFixture<SampleTwoComponent>;
  let component: SampleTwoComponent;
  let httpController: HttpTestingController;

  function setupComponent(env: EnvironmentType = 'local'): void {
    TestBed.configureTestingModule({
      declarations: [SampleTwoComponent],
      providers: [UrlService, { provide: Env, useValue: env }],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleTwoComponent);
    component = fixture.componentInstance;
    httpController = TestBed.inject(HttpTestingController);
  }

  it('should create', () => {
    setupComponent();
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      'Case #2: Having services with http fetching'
    );
  });

  describe('fetchURL', () => {
    [
      ['local', 'http://kreativefactory/articles'],
      ['staging', 'https://staging.example.com/articles'],
      ['production', 'https://653e3318f52310ee6a9aad19.mockapi.io/articles'],
    ].forEach((env) => {
      it(`should return correct url for ${env[0]} environment`, () => {
        setupComponent(env[0] as EnvironmentType);
        expect(component.fetchURL).toBe(env[1]);
      });
    });
  });

  describe('render fetched content', () => {
    it('should render the list of content', () => {
      setupComponent();
      component.urlService.fetchContents();
      const req = httpController.expectOne(component.fetchURL);
      req.flush(mockArticleResponse);

      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('li').length).toBe(2);
    });
  });
});
