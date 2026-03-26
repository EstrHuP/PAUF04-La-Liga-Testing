<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClubTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('clubes')->insert([
            [
                'id'=> 1,
                'nombre'=> 'Barcelona',
                'ciudad' => 'Barcelona',
                'categoria'=> 'Fútbol',
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at'=> now()->format('Y-m-d H:i:s'),
            ],
            [
                'id'=> 2,
                'nombre'=> 'Athletic Club Bilbao',
                'ciudad'=> 'Bilbao',
                'categoria'=> 'Fútbol',
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at'=> now()->format('Y-m-d H:i:s'),
            ],
            [
                'id'=> 3,
                'nombre'=> 'Valencia C.F.',
                'ciudad' => 'Valencia',
                'categoria' => 'Valencia',
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at'=> now()->format('Y-m-d H:i:s')
            ]
        ]);
    }
}
