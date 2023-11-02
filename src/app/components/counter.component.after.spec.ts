import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { CounterService } from '../store/counter.service';
import { Spy, createSpyFromClass } from 'jest-auto-spies';

describe('CounterComponent', () => {
  let fixture: ComponentFixture<CounterComponent>;
  let component: CounterComponent;
  let counterService: Spy<CounterService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [
        {
          provide: CounterService,
          useValue: createSpyFromClass(CounterService, {
            observablePropsToSpyOn: ['counterLoading$'],
          }),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    counterService = TestBed.inject(CounterService) as Spy<CounterService>;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('loading$ ', () => {
    it('should enable button when the state is not calculating', () => {
      counterService.counterLoading$.nextWith(false);
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('button');
      expect(button.disabled).toBe(false);
    });

    it('should disable button when the state is calculating', () => {
      counterService.counterLoading$.nextWith(true);
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('button');
      expect(button.disabled).toBe(true);
    });
  });

  describe('totalValue$', () => {
    it.todo('should display the correct value');
  });

  describe('onPressSuccess', () => {
    it.todo('should call counterService.addValue with input value is 1');
  });
});
