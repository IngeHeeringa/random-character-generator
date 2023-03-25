import { jobs } from "../database/occupation.js";
import getBirthYear from "./getBirthYear.js";

const getRandomJob = () => {
  const birthYear = getBirthYear();
  const classicFullTimeJobs = jobs.classic.fullTimeJobs;
  const classicSideJobs = jobs.classic.sideJobs;
  const modernFullTimeJobs =
    jobs.modern.fullTimeJobs.concat(classicFullTimeJobs);
  const modernSideJobs = jobs.modern.sideJobs.concat(classicSideJobs);

  const randomJob = {
    fullTimeJob: "",
    sideJob: "",
    jobExperience:
      jobs.experience[Math.floor(Math.random() * jobs.experience.length)],
  };

  if (birthYear < 1970) {
    randomJob.fullTimeJob =
      classicFullTimeJobs[
        Math.floor(Math.random() * classicFullTimeJobs.length)
      ];
    randomJob.sideJob =
      classicSideJobs[Math.floor(Math.random() * classicSideJobs.length)];
  } else {
    randomJob.fullTimeJob =
      modernFullTimeJobs[Math.floor(Math.random() * modernFullTimeJobs.length)];
    randomJob.sideJob =
      modernSideJobs[Math.floor(Math.random() * modernSideJobs.length)];
  }

  return randomJob;
};

export default getRandomJob;
