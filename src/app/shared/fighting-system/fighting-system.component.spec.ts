import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingSystemComponent } from './fighting-system.component';

describe('FightingSystemComponent', () => {
  let component: FightingSystemComponent;
  let fixture: ComponentFixture<FightingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
