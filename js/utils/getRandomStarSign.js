import { starSigns } from "../database/personality.js";

const getRandomStarSign = () =>
  starSigns[Math.floor(Math.random() * starSigns.length)];

export default getRandomStarSign;
