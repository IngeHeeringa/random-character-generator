import { schoolExperience } from "../database/occupation.js";
import getBirthYear from "./getBirthYear.js";

const getRandomSchoolExperience = () => {
  const birthYear = getBirthYear();
  const classicAfterSchoolActivities =
    schoolExperience.teenager.afterSchoolActivities.classic;
  const modernAfterSchoolActivities =
    schoolExperience.teenager.afterSchoolActivities.modern.concat(
      schoolExperience.teenager.afterSchoolActivities.classic
    );

  const randomSchoolExperienceChild = {
    subjects:
      schoolExperience.child.subjects[
        Math.floor(Math.random() * schoolExperience.child.subjects.length)
      ],
    experience:
      schoolExperience.child.experience[
        Math.floor(Math.random() * schoolExperience.child.experience.length)
      ],
  };

  const randomSchoolExperienceTeenager = {
    subjects:
      schoolExperience.teenager.subjects[
        Math.floor(Math.random() * schoolExperience.teenager.subjects.length)
      ],
    experience:
      schoolExperience.teenager.experience[
        Math.floor(Math.random() * schoolExperience.teenager.experience.length)
      ],
    afterSchoolActivities: "",
  };
  if (birthYear < 1970) {
    randomSchoolExperienceTeenager.afterSchoolActivities =
      classicAfterSchoolActivities[
        Math.floor(Math.random() * classicAfterSchoolActivities.length)
      ];
  } else
    randomSchoolExperienceTeenager.afterSchoolActivities =
      modernAfterSchoolActivities[
        Math.floor(Math.random() * modernAfterSchoolActivities.length)
      ];

  return { randomSchoolExperienceChild, randomSchoolExperienceTeenager };
};

export default getRandomSchoolExperience;
