import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactxComponent } from './contact.component';

describe('ContactxComponent', () => {
  let component: ContactxComponent;
  let fixture: ComponentFixture<ContactxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
