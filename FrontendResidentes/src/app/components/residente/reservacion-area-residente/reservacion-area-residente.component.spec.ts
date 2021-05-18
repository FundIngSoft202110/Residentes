import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservacionAreaResidenteComponent } from './reservacion-area-residente.component';

describe('ReservacionAreaResidenteComponent', () => {
  let component: ReservacionAreaResidenteComponent;
  let fixture: ComponentFixture<ReservacionAreaResidenteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacionAreaResidenteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservacionAreaResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
