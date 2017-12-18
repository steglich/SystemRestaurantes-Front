import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoCadComponent } from './prato-cad.component';

describe('PratoCadComponent', () => {
  let component: PratoCadComponent;
  let fixture: ComponentFixture<PratoCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
