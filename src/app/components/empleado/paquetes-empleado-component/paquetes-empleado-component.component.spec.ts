import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaquetesEmpleadoComponentComponent } from './paquetes-empleado-component.component';

describe('PaquetesEmpleadoComponentComponent', () => {
  let component: PaquetesEmpleadoComponentComponent;
  let fixture: ComponentFixture<PaquetesEmpleadoComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaquetesEmpleadoComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaquetesEmpleadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
