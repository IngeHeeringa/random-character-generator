import { advice } from "../database/personality.js";

const getRandomAdvice = () => advice[Math.floor(Math.random() * advice.length)];

export default getRandomAdvice;
