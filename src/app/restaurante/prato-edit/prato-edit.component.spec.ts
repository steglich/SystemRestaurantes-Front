import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoEditComponent } from './prato-edit.component';

describe('PratoEditComponent', () => {
  let component: PratoEditComponent;
  let fixture: ComponentFixture<PratoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
