import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageJugadores } from './admin-page-jugadores';

describe('AdminPageJugadores', () => {
  let component: AdminPageJugadores;
  let fixture: ComponentFixture<AdminPageJugadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPageJugadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPageJugadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
