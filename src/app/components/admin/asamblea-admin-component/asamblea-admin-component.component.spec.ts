import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsambleaAdminComponentComponent } from './asamblea-admin-component.component';

describe('AsambleaAdminComponentComponent', () => {
  let component: AsambleaAdminComponentComponent;
  let fixture: ComponentFixture<AsambleaAdminComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsambleaAdminComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsambleaAdminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
