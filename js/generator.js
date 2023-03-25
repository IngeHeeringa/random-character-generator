import {
  genderInput,
  lifeStageInput,
  generateButton,
  displayCharacter,
  displayCharacterProfile,
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
import Character from "./classes/Character.js";
import Child from "./classes/Child.js";
import Teenager from "./classes/Teenager.js";
import YoungAdult from "./classes/YoungAdult.js";
import Adult from "./classes/Adult.js";

class Senior extends Character {
  constructor(
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
  ) {
    super(fullName, age, pronouns, personalityType, starSign);
    this.virtue = virtue;
    this.weakness = weakness;
    this.fear = fear;
    this.quirk = quirk;
    this.dream = dream;
    this.style = style;
    this.hobby = hobby;
    this.interest = interest;
    this.sideJob = sideJob;
    this.studies = studies;
    this.fullTimeJob = fullTimeJob;
    this.closeFamilyMember = closeFamilyMembersAdult;
    this.distantFamilyMember = distantFamilyMembersAdult;
    this.residence = residence;
    this.advice = advice;
  }

  showCharacter() {
    super.showCharacter();
    displayCharacterProfile.innerText = `${this.firstName} used to dream of ${this.dream}, but after years of working as ${this.fullTimeJob}, ${this.pronouns.subject} is happy to spend ${this.pronouns.possessive} days ${this.hobby}. Recently, at the ripe age of ${this.age}, ${this.pronouns.subject} has taken an interest in ${this.interest} and is reading books about ${this.studies}. You're never too old to learn something new!
       
        ${this.firstName} has fond memories of the summers with ${this.pronouns.possessive} ${this.distantFamilyMember}, who always dressed in the same ${this.style} way as ${this.pronouns.object}. ${this.pronouns.subjectU} is aware that ${this.pronouns.subject} can be ${this.weakness}, but hopes to be remembered for ${this.pronouns.possessive} ${this.virtue}. As long as they don't put on ${this.pronouns.possessive} epitaph that ${this.pronouns.subject} ${this.quirk}, haha!
        
        The one thing ${this.firstName} regrets after ${this.pronouns.possessive} many years on this planet, is not having bonded more with ${this.pronouns.possessive} ${this.closeFamilyMember}. Also, ${this.pronouns.subject} has been living in ${this.residence} for a long, long time now. Maybe it's time for a change? Anyway, if ${this.firstName} may offer you some of ${this.pronouns.possessive} wisdom, ${this.pronouns.subject} would say ${this.advice}.`;
  }
}

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
