import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAsasambleaAdminComponent } from './lista-asasamblea-admin.component';

describe('ListaAsasambleaAdminComponent', () => {
  let component: ListaAsasambleaAdminComponent;
  let fixture: ComponentFixture<ListaAsasambleaAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAsasambleaAdminComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAsasambleaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
