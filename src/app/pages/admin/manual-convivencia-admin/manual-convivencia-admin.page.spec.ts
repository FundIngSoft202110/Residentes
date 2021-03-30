import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualConvivenciaAdminPage } from './manual-convivencia-admin.page';

describe('ManualConvivenciaAdminPage', () => {
  let component: ManualConvivenciaAdminPage;
  let fixture: ComponentFixture<ManualConvivenciaAdminPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualConvivenciaAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualConvivenciaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
