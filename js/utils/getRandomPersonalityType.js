import { personalityTypes } from "../database/personality.js";

const getRandomPersonalityType = () =>
  personalityTypes[Math.floor(Math.random() * personalityTypes.length)];

export default getRandomPersonalityType;
