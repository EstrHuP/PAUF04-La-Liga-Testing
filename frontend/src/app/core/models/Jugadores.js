import mongoose from "mongoose"

const jugadorSchema = new mongoose.Schema({
    deporte: { type: String, enum: ['futbol', 'baloncesto', 'volley'], default: 'futbol' },
    nombre: { type: String },
    nombreEquipo: { type: String }
});

export default mongoose.model('jugadores', jugadorSchema);