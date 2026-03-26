import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    name: { type: String },
    rol: { type: String, enum: ['admin', 'jugador', 'capitan', 'arbitro'], default: 'jugador' }
});

export default mongoose.model('User', userSchema, 'users');