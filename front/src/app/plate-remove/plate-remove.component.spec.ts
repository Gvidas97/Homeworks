import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateRemoveComponent } from './plate-remove.component';

describe('PlateRemoveComponent', () => {
  let component: PlateRemoveComponent;
  let fixture: ComponentFixture<PlateRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
