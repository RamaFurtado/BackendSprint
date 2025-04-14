import mongoose from 'mongoose';

const sprintSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaInicio: { type: String, required: true },
  fechaCierre: { type: String, required: true },
  tareas: { type: [String], default: [] },
});

export const Sprint = mongoose.model('Sprint', sprintSchema);
