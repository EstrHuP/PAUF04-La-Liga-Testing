<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory; // Testing

    protected $table = "clubes";
    protected $fillable = ['nombre', 'ciudad', 'categoria'];

    public function jugadores(){
        return $this->hasMany(Jugador::class);
    }
}
