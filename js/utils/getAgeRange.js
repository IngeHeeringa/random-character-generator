import checkLifeStage from "./checkLifeStage.js";

const getAgeRange = () => {
  const lifeStage = checkLifeStage();
  const ageRange = {
    min: "",
    max: "",
  };

  switch (lifeStage) {
    case "child":
      ageRange.min = 4;
      ageRange.max = 13;
      break;
    case "teenager":
      ageRange.min = 13;
      ageRange.max = 19;
      break;
    case "youngadult":
      ageRange.min = 19;
      ageRange.max = 25;
      break;
    case "adult":
      ageRange.min = 25;
      ageRange.max = 66;
      break;
    case "senior":
      ageRange.min = 66;
      ageRange.max = 105;
      break;
  }

  return ageRange;
};

export default getAgeRange;
