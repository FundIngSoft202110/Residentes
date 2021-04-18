import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuejasResidenteComponentComponent } from './quejas-residente-component.component';

describe('QuejasResidenteComponentComponent', () => {
  let component: QuejasResidenteComponentComponent;
  let fixture: ComponentFixture<QuejasResidenteComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejasResidenteComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuejasResidenteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
