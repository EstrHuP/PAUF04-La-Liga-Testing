<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Jugador;
use App\Models\Club;

class JugadoresApiTest extends TestCase {
    use RefreshDatabase;

    protected function setUp(): void {
        parent::setUp();
        // Permitir ejecutar rutas sin protección, es decir, autentificación
        $this->withoutMiddleware();
    }

    public function test_api_return_lista_jugadores() {
        $club = Club::factory()->create();
        Jugador::factory()->create(['nombre'=>'Ana Pérez', 'posicion'=>'Portera', 'dorsal'=>1, 'club_id'=>$club->id]);
        $response = $this->getJson('/api/jugadores');
        $response->assertStatus(200)
                ->assertJsonFragment(['nombre'=>'Ana Pérez'])
                ->assertJsonStructure([
                    '*' => ['id', 'nombre', 'posicion', 'dorsal', 'club_id'],
                ]);
    }

    public function test_create_jugador(): void {
        $club = Club::factory()->create();
        $payload = ['nombre' => 'Elena Suarez', 'posicion' => 'Delantera', 'dorsal' => 7, 'club_id' => $club->id];

        $this->postJson('/api/jugadores', $payload)
            ->assertStatus(201)
            ->assertJsonFragment(['nombre' => 'Elena Suarez']);

        $this->assertDatabaseHas('jugadores', ['nombre' => 'Elena Suarez', 'dorsal' => 7, 'club_id' => $club->id]);
    }

    public function test_invalid(): void {
        $payload = ['nombre' => '', 'posicion' => '', 'dorsal' => 0, 'club_id' => ''];
        $this->postJson('/api/jugadores', $payload)
            ->assertStatus(422);
    }

    public function test_api_error(): void {
        $res = $this->getJson('/api/jugadores/999999');
        $res->dump();
        $res->assertStatus(404);
    }


    public function test_delete(): void {
        $jugador = Jugador::factory()->create();
        $res = $this->deleteJson("/api/jugadores/{$jugador->id}");
        $res->assertStatus(200);
        $this->assertDatabaseMissing('jugadores', ['id' => $jugador->id]);
    }
}