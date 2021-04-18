import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeleccionConjuntoComponentComponent } from './seleccion-conjunto-component.component';

describe('SeleccionConjuntoComponentComponent', () => {
  let component: SeleccionConjuntoComponentComponent;
  let fixture: ComponentFixture<SeleccionConjuntoComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionConjuntoComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionConjuntoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
