<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Jugador;

class JugadorTest extends TestCase {
    public function test_nombre_recorta_espacios(): void {
        $jugador = new Jugador(['nombre' => ' Ana Pérez ']);
        $this->assertSame('Ana Pérez', $jugador->nombreFormat());
    }

    public function test_is_dorsal_ok(): void {
        $this->assertTrue((new Jugador(['dorsal' => 1]))->isDorsalOK()); //true
        $this->assertTrue((new Jugador(['dorsal' => 99]))->isDorsalOK()); //true
        $this->assertFalse((new Jugador(['dorsal' => 0]))->isDorsalOK()); //false
        $this->assertFalse((new Jugador(['dorsal' => 120]))->isDorsalOK()); //false
    }
}