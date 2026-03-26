<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Liga;

class LigaController extends Controller
{
    // GET - Listar
    public function index() {
        return Liga::all();
    }

    // GET - Mostrar
    public function show(Liga $liga) {
        return $liga -> load('partidos');
    }

    // POST - Crear
    public function store(Request $request) {
        $request -> validate([
            'nombre' => 'required', 'string', 'max:100',
            'deporte' => 'required', 'string', 'max:100',
            'temporada' => 'required', 'string', 'max:100'
        ]);
        return Liga::create($request->all()); 
    }

    // PUT or PATCH - Actualizar
    public function update(Request $request, $id) {
        $request -> validate([
            'nombre' => 'required', 'string', 'max:100',
            'deporte' => 'required', 'string', 'max:100',
            'temporada' => 'required', 'string', 'max:100'
        ]);
        $liga = Liga::findOrFail($id);
        $liga->update($request->all());
        return $liga;
    }

    // DELETE - Eliminar
    public function destroy($id) {
        $liga = Liga::findOrFail($id);
        $liga->delete();
        return response('OK - Liga removed',200);
    }
}