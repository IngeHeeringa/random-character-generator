import getAgeRange from "./getAgeRange.js";

const getRandomAge = () => {
  const ageRange = getAgeRange();
  const randomAge = Math.floor(
    Math.random() * (ageRange.max - ageRange.min) + ageRange.min
  );

  return randomAge;
};

export default getRandomAge;
