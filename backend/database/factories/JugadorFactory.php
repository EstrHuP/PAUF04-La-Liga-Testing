<?php

namespace Database\Factories;

use App\Models\Jugador;
use Illuminate\Database\Eloquent\Factories\Factory;

class JugadorFactory extends Factory
{
    protected $model = Jugador::class;

    public function definition(): array {
        return [
            'nombre' => $this->faker->name(),
            'posicion' => $this->faker->randomElement(['Portera', 'Defensa', 'Centrocampista', 'Delantera']),
            'dorsal' => $this->faker->numberBetween(1, 99),
            'club_id' => \App\Models\Club::factory(),
        ];
    }
}
