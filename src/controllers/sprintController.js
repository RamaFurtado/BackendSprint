import { Sprint } from '../models/Sprint.js';

export const getSprints = async (req, res) => {
  const sprints = await Sprint.find();
  res.json(sprints);
};

export const createSprint = async (req, res) => {
  const nuevoSprint = new Sprint(req.body);
  await nuevoSprint.save();
  res.status(201).json(nuevoSprint);
};
