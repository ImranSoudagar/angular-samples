import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XheaderComponent } from './header.component';

describe('XheaderComponent', () => {
  let component: XheaderComponent;
  let fixture: ComponentFixture<XheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XheaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
