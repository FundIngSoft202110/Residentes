import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeleccionConjuntoAdminPage } from './seleccion-conjunto-admin.page';

describe('SeleccionConjuntoAdminPage', () => {
  let component: SeleccionConjuntoAdminPage;
  let fixture: ComponentFixture<SeleccionConjuntoAdminPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionConjuntoAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionConjuntoAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
