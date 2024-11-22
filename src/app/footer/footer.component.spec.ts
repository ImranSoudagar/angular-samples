import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XfooterComponent } from './footer.component';

describe('XfooterComponent', () => {
  let component: XfooterComponent;
  let fixture: ComponentFixture<XfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XfooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
