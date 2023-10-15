import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockComponent } from './block.component';

describe('BlockComponent', () => {
  let fixture: ComponentFixture<BlockComponent>;
  let component: BlockComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain(
      'Block Component'
    );
  });

  describe('computedName', () => {
    it('should return the name in uppercase', () => {
      component.name = 'John Doe';
      fixture.detectChanges();
      expect(component.computedName).toEqual('JOHN DOE');
      expect(fixture.nativeElement.querySelector('p').textContent).toContain(
        'JOHN DOE'
      );
    });
  });
});
