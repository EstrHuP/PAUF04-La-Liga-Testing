import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AdminPage } from './admin-page';

describe('AdminPage', () => {
  let component: AdminPage;
  let fixture: ComponentFixture<AdminPage>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AdminPage]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPage);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    
    await fixture.whenStable();
  });

  it('ngOnInit -> GET partidos y actualiza la lista', () => {
    fixture.detectChanges();

    const req = httpMock.expectOne((r) => r.url.endsWith('/api/partidos'));
    req.flush([]);

    fixture.detectChanges();
  });
});
