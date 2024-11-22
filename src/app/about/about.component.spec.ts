import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutxComponent } from './about.component';

describe('AboutxComponent', () => {
  let component: AboutxComponent;
  let fixture: ComponentFixture<AboutxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
