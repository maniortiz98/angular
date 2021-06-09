import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeruesComponent } from './herues.component';

describe('HeruesComponent', () => {
  let component: HeruesComponent;
  let fixture: ComponentFixture<HeruesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeruesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeruesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
