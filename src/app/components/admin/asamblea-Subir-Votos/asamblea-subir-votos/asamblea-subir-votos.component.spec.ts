import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsambleaSubirVotosComponent } from './asamblea-subir-votos.component';

describe('AsambleaSubirVotosComponent', () => {
  let component: AsambleaSubirVotosComponent;
  let fixture: ComponentFixture<AsambleaSubirVotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsambleaSubirVotosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsambleaSubirVotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
