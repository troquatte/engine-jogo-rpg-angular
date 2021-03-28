import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnMitoComponent } from './turn-mito.component';

describe('TurnMitoComponent', () => {
  let component: TurnMitoComponent;
  let fixture: ComponentFixture<TurnMitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnMitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnMitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
