export const getSessions = (req, res) => {
  const sessions = getSessionsPlaceholder();
  res.status(200).json({ status: "success", payload: sessions });
};


import { registerUser } from "../services/sessions.service.js";
import { registerUser, getSessionsPlaceholder } from "../services/sessions.service.js";

export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);
    res.status(201).json({ status: "success", payload: newUser });
  } catch (error) {
    const status = error.status || 500;
    res.status(status).json({ status: "error", message: error.message || "Error interno del servidor" });
  }
};
