import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurbsidePage } from './curbside.page';

describe('CurbsidePage', () => {
  let component: CurbsidePage;
  let fixture: ComponentFixture<CurbsidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurbsidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurbsidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
