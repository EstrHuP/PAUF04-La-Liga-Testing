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

    // MARK: - Testing

    // Comprueba que el dorsal tenga un numero entre 1-99
    public function isDorsalOK(): bool {
        return filter_var($this->dorsal, FILTER_VALIDATE_INT, [
            'options' => ['min_range' => 1, 'max_range' => 99],
        ]) !== false;
    }

    // Comprueba el nombre del jugador quitándole espacios en caso de que los tuviera
    public function nombreFormat(): string {
        return trim((string) $this->nombre);
    }
}
