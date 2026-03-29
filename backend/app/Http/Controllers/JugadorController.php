<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jugador;

class JugadorController extends Controller
{
    // GET - Listar
    public function index() {
        return response()->json(Jugador::all());
    }

    // GET - Mostrar
    public function show(Jugador $jugador) {
        return $jugador -> load('club')->findOrFail($jugador);
    }

    // POST - Crear
    public function store(Request $request) {
        $request -> validate([
            'nombre' => 'required', 'string', 'max:100',
            'posicion' => 'required', 'string', 'max:100',
            'dorsal' => 'required', 'integer', 'between:1,100',
            'club_id' => 'required', 'integer'
        ]);
        return Jugador::create($request->all()); 
    }

    // PUT or PATCH - Actualizar
    public function update(Request $request, $id) {
        $request -> validate([
            'nombre' => 'required', 'string', 'max:100',
            'posicion' => 'required', 'string', 'max:100',
            'dorsal' => 'required', 'integer', 'between:1,100',
            'club_id' => 'required', 'integer'
        ]);
        $jugador = Jugador::findOrFail($id);
        $jugador->update($request->all());
        return $jugador;
    }

    // DELETE - Eliminar
    public function destroy($id) {
        $jugador = Jugador::findOrFail($id);
        $jugador->delete();
        return response('OK - Jugador removed',200);
    }
}