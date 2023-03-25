import { studies } from "../database/occupation.js";
import getBirthYear from "./getBirthYear.js";

const getRandomStudies = () => {
  const classicStudies = studies.classic;
  const modernStudies = classicStudies.concat(studies.modern);
  const randomClassicStudies =
    classicStudies[Math.floor(Math.random() * classicStudies.length)];
  const randomModernStudies =
    modernStudies[Math.floor(Math.random() * modernStudies.length)];

  const birthYear = getBirthYear();
  const randomStudies = {
    studies: "",
    studyExperience:
      studies.experience[Math.floor(Math.random() * studies.experience.length)],
  };

  if (birthYear < 1970) {
    randomStudies.studies = randomClassicStudies;
  } else randomStudies.studies = randomModernStudies;

  return randomStudies;
};

export default getRandomStudies;
