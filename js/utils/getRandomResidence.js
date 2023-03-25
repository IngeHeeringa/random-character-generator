import { residence } from "../database/livingSituation.js";

const getRandomResidence = () => {
  const randomAdjective =
    residence.adjective[Math.floor(Math.random() * residence.adjective.length)];
  const randomPlace =
    residence.place[Math.floor(Math.random() * residence.place.length)];

  return `${randomAdjective} ${randomPlace}`;
};

export default getRandomResidence;
