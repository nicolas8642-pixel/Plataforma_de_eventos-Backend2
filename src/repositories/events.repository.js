import { findAllEvents } from "../dao/events.dao.js";

export const getAllEvents = async () => {
  return await findAllEvents();
};
