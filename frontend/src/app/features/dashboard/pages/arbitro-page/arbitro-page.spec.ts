import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroPage } from './arbitro-page';

describe('ArbitroPage', () => {
  let component: ArbitroPage;
  let fixture: ComponentFixture<ArbitroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbitroPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitroPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
