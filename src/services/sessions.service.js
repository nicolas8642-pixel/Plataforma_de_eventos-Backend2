import { getUserByEmail, saveUser } from "../repositories/users.repository.js";
import { hashPassword } from "../utils/hash.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export const registerUser = async ({ first_name, last_name, email, password }) => {
  if (!first_name || !last_name || !email || !password) {
    throw { status: 400, message: "Faltan campos obligatorios" };
  }

    if (!EMAIL_REGEX.test(email)) {
    throw { status: 400, message: "Formato de email inválido" };
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    throw { status: 400, message: "La contraseña debe tener al menos 8 caracteres" };
  }

  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = await getUserByEmail(normalizedEmail);
  if (existingUser) {
    throw { status: 409, message: "El email ya está registrado" };
  }
  const hashedPassword = await hashPassword(password);

  const newUser = await saveUser({
    first_name,
    last_name,
    email: normalizedEmail,
    password: hashedPassword,
  });

  return {
    id: newUser._id,
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
    role: newUser.role,
  };
};