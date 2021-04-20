import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClavesComponent } from './claves-component.component';

describe('ClavesComponentComponent', () => {
  let component: ClavesComponent;
  let fixture: ComponentFixture<ClavesComponent>;
 
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClavesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
