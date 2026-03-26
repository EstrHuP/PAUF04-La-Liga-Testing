<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Liga extends Model
{
    protected $table = "ligas";
    protected $fillable = ['nombre', 'deporte', 'temporada'];

    public function partidos(){
        return $this->hasMany(Partido::class);
    }
}
