import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereesPage } from './referees-page';

describe('RefereesPage', () => {
  let component: RefereesPage;
  let fixture: ComponentFixture<RefereesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefereesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefereesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
