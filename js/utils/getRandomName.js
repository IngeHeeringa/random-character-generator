import { namesES, namesNL, namesUK } from "../database/names.js";
import { countryInput } from "../selectors.js";
import checkGender from "./checkGender.js";
import getNameByDecade from "./getNameByDecade.js";

const getRandomName = () => {
  const { gender } = checkGender();
  const charNationality = countryInput.value;
  let randomName;

  switch (charNationality) {
    case "es":
      if (gender === "female") {
        randomName = getNameByDecade(namesES.femaleNames);
      } else if (gender === "male") {
        randomName = getNameByDecade(namesES.maleNames);
      }
      break;
    case "nl":
      if (gender === "female") {
        randomName = getNameByDecade(namesNL.femaleNames);
      } else if (gender === "male") {
        randomName = getNameByDecade(namesNL.maleNames);
      }
      break;
    case "uk":
      if (gender === "female") {
        randomName = getNameByDecade(namesUK.femaleNames);
      } else if (gender === "male") {
        randomName = getNameByDecade(namesUK.maleNames);
      }
      break;
  }

  return randomName;
};

export default getRandomName;
