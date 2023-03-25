import { namesES, namesNL, namesUK } from "../database/names.js";
import { countryInput } from "../selectors.js";

const getRandomSurname = () => {
  const charNationality = countryInput.value;
  let randomSurname;

  switch (charNationality) {
    case "es":
      randomSurname = [
        namesES.surnames[Math.floor(Math.random() * namesES.surnames.length)],
        namesES.surnames[Math.floor(Math.random() * namesES.surnames.length)],
      ]
        .toString()
        .split(",")
        .join(" ");
      break;
    case "nl":
      randomSurname =
        namesNL.surnames[Math.floor(Math.random() * namesNL.surnames.length)];
      break;
    case "uk":
      randomSurname =
        namesUK.surnames[Math.floor(Math.random() * namesUK.surnames.length)];
      break;
  }

  return randomSurname;
};

export default getRandomSurname;
