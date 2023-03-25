import { storyYearInput } from "../selectors.js";
import getRandomAge from "./getRandomAge.js";

const getBirthYear = () => {
  const randomAge = getRandomAge();
  const birthYear = storyYearInput.value - randomAge;

  return birthYear;
};

export default getBirthYear;
