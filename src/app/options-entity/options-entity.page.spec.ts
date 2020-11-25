import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptionsEntityPage } from './options-entity.page';

describe('OptionsEntityPage', () => {
  let component: OptionsEntityPage;
  let fixture: ComponentFixture<OptionsEntityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsEntityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsEntityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
