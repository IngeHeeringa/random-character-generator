import { traits } from "../database/personality.js";
import getBirthYear from "./getBirthYear.js";

const getRandomCharacterTraits = () => {
  const birthYear = getBirthYear();
  const classicQuirks = traits.quirks.classic;
  const modernQuirks = traits.quirks.modern.concat(classicQuirks);

  const randomTraits = {
    virtue: traits.virtues[Math.floor(Math.random() * traits.virtues.length)],
    weakness:
      traits.weaknesses[Math.floor(Math.random() * traits.weaknesses.length)],
    insecurity:
      traits.insecurities[
        Math.floor(Math.random() * traits.insecurities.length)
      ],
    fear: traits.fears[Math.floor(Math.random() * traits.fears.length)],
    style: traits.style[Math.floor(Math.random() * traits.style.length)],
    quirk: "",
  };

  if (birthYear < 1970) {
    randomTraits.quirk =
      classicQuirks[Math.floor(Math.random() * classicQuirks.length)];
  } else {
    randomTraits.quirk =
      modernQuirks[Math.floor(Math.random() * modernQuirks.length)];
  }

  return randomTraits;
};

export default getRandomCharacterTraits;
