import { TestBed } from '@angular/core/testing';
import { PartidoService } from './partidos.service';


describe('PartidoService', () => {
  let service: PartidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
