import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcercaNosotrosComponentComponent } from './acerca-nosotros-component.component';

describe('AcercaNosotrosComponentComponent', () => {
  let component: AcercaNosotrosComponentComponent;
  let fixture: ComponentFixture<AcercaNosotrosComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaNosotrosComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcercaNosotrosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
