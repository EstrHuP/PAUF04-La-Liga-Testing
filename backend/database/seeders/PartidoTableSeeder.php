<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartidoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::table('partidos')->insert([
            [
                'liga_id' => 1,
                'club_local_id' => 1,
                'club_visitante_id'=> 2,
                'fecha' => '2026-02-10',
                'resultado' => '4-2',
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s'),
            ],
            [
                'liga_id' => 1,
                'club_local_id' => 3,
                'club_visitante_id'=> 1,
                'fecha' => '2026-02-17',
                'resultado' => '1-2',
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s'),
            ],
            [
                'liga_id' => 2,
                'club_local_id' => 2,
                'club_visitante_id'=> 1,
                'fecha' => '2026-03-17',
                'resultado' => '3-1',
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s'),
            ],
            [
                'liga_id' => 2,
                'club_local_id' => 2,
                'club_visitante_id'=> 3,
                'fecha' => '2026-03-28',
                'resultado' => '0-1',
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s'),
            ],
         ]);
    }
}
