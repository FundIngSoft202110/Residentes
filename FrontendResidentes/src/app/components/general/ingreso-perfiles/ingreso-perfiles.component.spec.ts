import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { IngresoPerfilesComponent } from './ingreso-perfiles.component';

describe('IngresoPerfilesComponent', () => {
  let component: IngresoPerfilesComponent;
  let fixture: ComponentFixture<IngresoPerfilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPerfilesComponent ],
      imports: [IonicModule.forRoot(),CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
