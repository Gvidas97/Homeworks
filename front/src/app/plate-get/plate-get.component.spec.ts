import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateGetComponent } from './plate-get.component';

describe('PlateGetComponent', () => {
  let component: PlateGetComponent;
  let fixture: ComponentFixture<PlateGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
