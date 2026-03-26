<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jugador extends Model
{
    protected $table = "jugadores";
    protected $fillable = ['nombre', 'posicion', 'dorsal', 'club_id'];

    public function club(){
        return $this->belongsTo(Club::class);
    }
}
