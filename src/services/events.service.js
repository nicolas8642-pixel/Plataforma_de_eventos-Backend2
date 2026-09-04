import { getAllEvents } from "../repositories/events.repository.js";

export const listEvents = async () => {
  return await getAllEvents();
};