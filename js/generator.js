import {
  genderInput,
  lifeStageInput,
  generateButton,
  displayCharacter,
} from "./selectors.js";
import checkGender from "./utils/checkGender.js";
import checkLifeStage from "./utils/checkLifeStage.js";
import getRandomAge from "./utils/getRandomAge.js";
import getRandomName from "./utils/getRandomName.js";
import getRandomSurname from "./utils/getRandomSurname.js";
import getRandomPersonalityType from "./utils/getRandomPersonalityType.js";
import getRandomStarSign from "./utils/getRandomStarSign.js";
import getRandomStudies from "./utils/getRandomStudies.js";
import getRandomJob from "./utils/getRandomJob.js";
import getRandomSchoolExperience from "./utils/getRandomSchoolExperience.js";
import getRandomCharacterTraits from "./utils/getRandomCharacterTraits.js";
import getRandomDream from "./utils/getRandomDream.js";
import getRandomHobby from "./utils/getRandomHobby.js";
import getRandomInterests from "./utils/getRandomInterests.js";
import getRandomFamilyMembers from "./utils/getRandomFamilyMembers.js";
import getRandomResidence from "./utils/getRandomResidence.js";
import getRandomAdvice from "./utils/getRandomAdvice.js";
import Child from "./classes/Child.js";
import Teenager from "./classes/Teenager.js";
import YoungAdult from "./classes/YoungAdult.js";
import Adult from "./classes/Adult.js";
import Senior from "./classes/Senior.js";

const generateCharacter = () => {
  const fullName = {
    firstName: getRandomName(),
    middleName: getRandomName(),
    surname: getRandomSurname(),
  };
  const age = getRandomAge();
  const { pronouns } = checkGender();
  const { style, quirk, virtue, weakness, fear, insecurity } =
    getRandomCharacterTraits();
  const { interest, food, toys } = getRandomInterests();
  const {
    randomCloseFamilyMembers: {
      minor: closeFamilyMembersMinor,
      adult: closeFamilyMembersAdult,
    },
    randomDistantFamilyMembers: {
      minor: distantFamilyMembersMinor,
      adult: distantFamilyMembersAdult,
    },
  } = getRandomFamilyMembers();
  const {
    randomSchoolExperienceChild: {
      experience: schoolExperienceChild,
      subjects: schoolSubjectChild,
    },
    randomSchoolExperienceTeenager: {
      experience: schoolExperienceTeenager,
      subjects: schoolSubjectTeenager,
      afterSchoolActivities: afterSchoolActivities,
    },
  } = getRandomSchoolExperience();
  const { studies, studyExperience } = getRandomStudies();
  const { sideJob, fullTimeJob, jobExperience } = getRandomJob();
  const dream = getRandomDream();
  const hobby = getRandomHobby();
  const residence = getRandomResidence();
  const advice = getRandomAdvice();
  const personalityType = getRandomPersonalityType();
  const starSign = getRandomStarSign();

  let myCharacter;
  let myLifeStage = checkLifeStage();

  switch (myLifeStage) {
    case "child":
      myCharacter = new Child(
        fullName,
        age,
        pronouns,
        personalityType,
        starSign,
        virtue,
        weakness,
        fear,
        dream,
        quirk,
        hobby,
        interest,
        fullTimeJob,
        schoolExperienceChild,
        schoolSubjectChild,
        closeFamilyMembersMinor,
        distantFamilyMembersMinor,
        toys,
        food
      );
      break;
    case "teenager":
      myCharacter = new Teenager(
        fullName,
        age,
        pronouns,
        personalityType,
        starSign,
        virtue,
        weakness,
        fear,
        dream,
        style,
        quirk,
        hobby,
        interest,
        schoolExperienceTeenager,
        schoolSubjectTeenager,
        afterSchoolActivities,
        studies,
        closeFamilyMembersMinor,
        distantFamilyMembersMinor,
        fullTimeJob,
        food,
        insecurity
      );
      break;
    case "youngadult":
      myCharacter = new YoungAdult(
        fullName,
        age,
        pronouns,
        personalityType,
        starSign,
        virtue,
        weakness,
        fear,
        dream,
        style,
        quirk,
        hobby,
        interest,
        studies,
        studyExperience,
        sideJob,
        closeFamilyMembersAdult,
        distantFamilyMembersAdult,
        insecurity
      );
      break;
    case "adult":
      myCharacter = new Adult(
        fullName,
        age,
        pronouns,
        personalityType,
        starSign,
        virtue,
        weakness,
        fear,
        dream,
        style,
        quirk,
        hobby,
        interest,
        studies,
        fullTimeJob,
        closeFamilyMembersAdult,
        distantFamilyMembersAdult,
        insecurity,
        residence,
        jobExperience,
        food
      );
      break;
    case "senior":
      myCharacter = new Senior(
        fullName,
        age,
        pronouns,
        personalityType,
        starSign,
        virtue,
        weakness,
        fear,
        dream,
        style,
        quirk,
        hobby,
        interest,
        sideJob,
        fullTimeJob,
        closeFamilyMembersAdult,
        distantFamilyMembersAdult,
        insecurity,
        residence,
        studies,
        advice
      );
      break;
  }

  const lifeStageFilter = [...lifeStageInput].filter((input) => input.checked);
  const genderFilter = [...genderInput].filter((input) => input.checked);

  if (lifeStageFilter.length === 0 || genderFilter.length === 0) {
    return;
  }

  myCharacter.showCharacter();
  displayCharacter.classList.remove("hidden");
};

generateButton.addEventListener("click", generateCharacter);
