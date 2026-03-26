<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JugadorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('jugadores')->insert([
            [
                'nombre' => 'Elena Suarez',
                'posicion' => 'Delantera',
                'dorsal' => 7,
                'club_id' => 1,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at'=> now()->format('Y-m-d H:i:s'),
            ],
            [
                'nombre' => 'Carlos González',
                'posicion' => 'Centrocampista',
                'dorsal' => 8,
                'club_id' => 1,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at'=> now()->format('Y-m-d H:i:s'),
            ],
            [
                'nombre' => 'Manuel Sevilla',
                'posicion' => 'Defensa',
                'dorsal' => 4,
                'club_id' => 2,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at'=> now()->format('Y-m-d H:i:s'),
            ],
            [
                'nombre' => 'Sara Pérez',
                'posicion' => 'Portera',
                'dorsal' => 1,
                'club_id' => 3,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at'=> now()->format('Y-m-d H:i:s'),
            ],
        ]);
    }
}
