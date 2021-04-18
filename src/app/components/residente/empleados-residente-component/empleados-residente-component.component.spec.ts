import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpleadosResidenteComponentComponent } from './empleados-residente-component.component';

describe('EmpleadosResidenteComponentComponent', () => {
  let component: EmpleadosResidenteComponentComponent;
  let fixture: ComponentFixture<EmpleadosResidenteComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosResidenteComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpleadosResidenteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
