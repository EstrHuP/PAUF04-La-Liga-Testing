import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationsPage } from './clasifications-page';

describe('ClasificationsPage', () => {
  let component: ClasificationsPage;
  let fixture: ComponentFixture<ClasificationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasificationsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificationsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
