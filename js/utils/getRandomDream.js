import { dreams } from "../database/personality.js";

const getRandomDream = () => dreams[Math.floor(Math.random() * dreams.length)];

export default getRandomDream;
