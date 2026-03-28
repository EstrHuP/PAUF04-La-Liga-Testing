import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JugadoresService } from './jugadores.service';

describe('JugadoresService', () => {
  let service: JugadoresService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JugadoresService]
    });

    service = TestBed.inject(JugadoresService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe obtener el listado de jugadores', () => {
    const mockJugadores = [
      { id: 1, nombre: 'Elena Mock', posicion: 'Portera', dorsal: 7, club_id: 2 },
      { id: 2, nombre: 'Carlos Mock', posicion: 'Defensa', dorsal: 3, club_id: 1 }
    ];
    
    service.getJugadores().subscribe(jugadores => {
      expect(jugadores.length).toBe(2);
      expect(jugadores[0].nombre).toBe('Elena Mock');
      expect(jugadores[1].nombre).toBe('Carlos Mock');
    });

    const req = httpMock.expectOne('/api/jugadores');
    expect(req.request.method).toBe('GET');
    req.flush(mockJugadores);
  });

  it('error 500 al obtener jugadores', () => {
    service.getJugadores().subscribe({
      next: () => { throw new Error('No debe devolver datos si el servidor falla') },
      error: (err) => { expect(err.status).toBe(500); }
    });

    const req = httpMock.expectOne('/api/jugadores');
    expect(req.request.method).toBe('GET');
    req.flush({ message: 'Error interno' }, { status: 500, statusText: 'Server Error' });
  });
});
