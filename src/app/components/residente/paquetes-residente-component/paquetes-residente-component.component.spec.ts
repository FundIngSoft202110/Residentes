import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaquetesResidenteComponentComponent } from './paquetes-residente-component.component';

describe('PaquetesResidenteComponentComponent', () => {
  let component: PaquetesResidenteComponentComponent;
  let fixture: ComponentFixture<PaquetesResidenteComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaquetesResidenteComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaquetesResidenteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
