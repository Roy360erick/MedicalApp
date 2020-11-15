import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphics01Component } from './graphics01.component';

describe('Graphics01Component', () => {
  let component: Graphics01Component;
  let fixture: ComponentFixture<Graphics01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphics01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphics01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
