import Event from "../models/Event.js";

export const findAllEvents = async () => {
  return await Event.find();
};