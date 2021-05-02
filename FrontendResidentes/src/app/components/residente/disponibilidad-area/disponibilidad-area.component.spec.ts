import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisponibilidadAreaComponent } from './disponibilidad-area.component';

describe('DisponibilidadAreaComponent', () => {
  let component: DisponibilidadAreaComponent;
  let fixture: ComponentFixture<DisponibilidadAreaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponibilidadAreaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisponibilidadAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
