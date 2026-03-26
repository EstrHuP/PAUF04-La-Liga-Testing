<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LigaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::table('ligas')->insert([
            [
                'nombre'=> 'La Liga',
                'deporte' => 'Fútbol',
                'temporada'=> '2025-2026',
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s'),
            ],
            [
                'nombre'=> 'UEFA Champions',
                'deporte' => 'Fútbol',
                'temporada'=> '2025-2026',
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s'),
            ],
         ]);
    }
}
