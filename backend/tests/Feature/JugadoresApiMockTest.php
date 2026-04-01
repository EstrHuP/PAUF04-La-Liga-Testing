<?php

namespace Tests\Feature;

use App\Models\Club;
use App\Models\Jugador;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class JugadoresApiMockTest extends TestCase
{
    use RefreshDatabase;

    public function test_returns_jugador_data_with_mocked_http(): void
    {
        Http::fake([
            'api.miservicio.com/test/jugadores' => Http::response(['ok' => true], 200),
        ]);

        $response = Http::get('https://api.miservicio.com/test/jugadores');

        $this->assertTrue($response->ok());
        $this->assertSame(true, $response->json('ok'));
    }

    public function test_api_jugadores_mockeada(): void
    {
        $club = Club::factory()->create();

        Jugador::factory()->create([
            'nombre' => 'Laura Mock',
            'posicion' => 'Defensa',
            'dorsal' => 2,
            'club_id' => $club->id,
        ]);

        $this->getJson('/api/jugadores')
            ->assertStatus(200)
            ->assertJsonFragment(['nombre' => 'Laura Mock']);
    }
}
