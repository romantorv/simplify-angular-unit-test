import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { CounterState } from '../store/counter.store';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

const mockRootStore: { counter: CounterState } = {
  counter: {
    value: 0,
    calculating: false,
    error: null,
  },
};

describe('CounterComponent', () => {
  let store: MockStore<{ counter: CounterState }>;
  let fixture: ComponentFixture<CounterComponent>;
  let component: CounterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [
        provideMockStore({
          initialState: mockRootStore,
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  describe('loading$ ', () => {
    it('should enable button when the state is not calculating', () => {
      store.setState({
        counter: {
          ...mockRootStore.counter,
          calculating: false,
        },
      });
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('button');
      expect(button.disabled).toBe(false);
    });

    it('should disable button when the state is calculating', () => {
      store.setState({
        counter: {
          ...mockRootStore.counter,
          calculating: true,
        },
      });
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('button');
      expect(button.disabled).toBe(true);
    });
  });
});
