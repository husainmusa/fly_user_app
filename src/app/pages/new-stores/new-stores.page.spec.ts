import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewStoresPage } from './new-stores.page';

describe('NewStoresPage', () => {
  let component: NewStoresPage;
  let fixture: ComponentFixture<NewStoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
