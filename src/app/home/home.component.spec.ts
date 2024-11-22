import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XhomeComponent } from './home.component';

describe('XhomeComponent', () => {
  let component: XhomeComponent;
  let fixture: ComponentFixture<XhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XhomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
