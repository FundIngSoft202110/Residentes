import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsistenciaEmpleadoComponentComponent } from './asistencia-empleado-component.component';

describe('AsistenciaEmpleadoComponentComponent', () => {
  let component: AsistenciaEmpleadoComponentComponent;
  let fixture: ComponentFixture<AsistenciaEmpleadoComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciaEmpleadoComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaEmpleadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
