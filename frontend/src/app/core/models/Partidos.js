import mongoose from "mongoose"

const partidoSchema = new mongoose.Schema({
    deporte: { type: String, enum: ['futbol', 'baloncesto', 'volley'], default: 'futbol' },
    equipo1: { type: String },
    equipo2: { type: String },
    fecha: { type: String },
    arbitro: { type: String },
    ubicacion: { type: String }
});

export default mongoose.model('partidos', partidoSchema);