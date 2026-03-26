import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitanPage } from './capitan-page';

describe('CapitanPage', () => {
  let component: CapitanPage;
  let fixture: ComponentFixture<CapitanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitanPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitanPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
