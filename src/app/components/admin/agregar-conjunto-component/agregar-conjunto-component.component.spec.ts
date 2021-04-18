import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarConjuntoComponentComponent } from './agregar-conjunto-component.component';

describe('AgregarConjuntoComponentComponent', () => {
  let component: AgregarConjuntoComponentComponent;
  let fixture: ComponentFixture<AgregarConjuntoComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarConjuntoComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarConjuntoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
