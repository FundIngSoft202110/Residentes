import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticiasResidenteComponentComponent } from './noticias-residente-component.component';

describe('NoticiasResidenteComponentComponent', () => {
  let component: NoticiasResidenteComponentComponent;
  let fixture: ComponentFixture<NoticiasResidenteComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasResidenteComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasResidenteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
