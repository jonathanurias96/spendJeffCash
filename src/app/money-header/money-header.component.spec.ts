import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyHeaderComponent } from './money-header.component';

describe('MoneyHeaderComponent', () => {
  let component: MoneyHeaderComponent;
  let fixture: ComponentFixture<MoneyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
