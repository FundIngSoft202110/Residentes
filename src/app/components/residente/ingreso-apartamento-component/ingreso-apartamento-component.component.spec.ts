import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresoApartamentoComponentComponent } from './ingreso-apartamento-component.component';

describe('IngresoApartamentoComponentComponent', () => {
  let component: IngresoApartamentoComponentComponent;
  let fixture: ComponentFixture<IngresoApartamentoComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoApartamentoComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoApartamentoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
