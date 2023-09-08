import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesInfoComponent } from './currencies-info.component';

describe('CurrienciesInfoComponent', () => {
  let component: CurrenciesInfoComponent;
  let fixture: ComponentFixture<CurrenciesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrenciesInfoComponent]
    });
    fixture = TestBed.createComponent(CurrenciesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
