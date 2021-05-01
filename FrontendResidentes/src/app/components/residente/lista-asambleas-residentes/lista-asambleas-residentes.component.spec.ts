import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAsambleasResidentesComponent } from './lista-asambleas-residentes.component';

describe('ListaAsambleasResidentesComponent', () => {
  let component: ListaAsambleasResidentesComponent;
  let fixture: ComponentFixture<ListaAsambleasResidentesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAsambleasResidentesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAsambleasResidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
