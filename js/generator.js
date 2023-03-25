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

class Child extends Character {
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
  ) {
    super(fullName, age, pronouns, personalityType, starSign);
    this.favoriteSubject = schoolSubjectChild;
    this.schoolExperience = schoolExperienceChild;
    this.dream = dream;
    this.job = fullTimeJob;
    this.closeFamilyMember = closeFamilyMembersMinor;
    this.distantFamilyMember = distantFamilyMembersMinor;
    this.fear = fear;
    this.virtue = virtue;
    this.weakness = weakness;
    this.food = food;
    this.quirk = quirk;
    this.hobby = hobby;
    this.toys = toys;
    this.interest = interest;
  }

  showCharacter() {
    super.showCharacter();
    displayCharacterProfile.innerText = `${this.firstName} is ${this.age} years old and loves ${this.interest}. ${this.pronouns.possessiveU} favorite subject is ${this.favoriteSubject} and ${this.pronouns.subject} does not like ${this.food}. ${this.pronouns.subjectU} thinks school is ${this.schoolExperience}. One of ${this.pronouns.possessive} classmates ${this.quirk}, which always makes ${this.firstName} laugh.
      
        ${this.firstName} is so afraid of ${this.fear} that it gives ${this.pronouns.object} nightmares. People often praise ${this.pronouns.object} for ${this.pronouns.possessive} ${this.virtue}, but also say ${this.pronouns.subject} should be a little less ${this.weakness}.
        
        ${this.pronouns.possessiveU} favorite thing ever is ${this.hobby} with ${this.pronouns.possessive} ${this.distantFamilyMember} during family visits. ${this.pronouns.subjectU} dreams of ${this.dream} one day, or becoming ${this.job} like ${this.pronouns.possessive} ${this.closeFamilyMember}, but for the moment ${this.pronouns.subject} is busy playing with ${this.pronouns.possessive} ${this.toys}.`;
  }
}

class Teenager extends Character {
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
    schoolExperienceTeenager,
    schoolSubjectTeenager,
    afterSchoolActivities,
    studies,
    closeFamilyMembersMinor,
    distantFamilyMembersMinor,
    fullTimeJob,
    food,
    insecurity
  ) {
    super(fullName, age, pronouns, personalityType, starSign);
    this.subject = schoolSubjectTeenager;
    this.schoolExperience = schoolExperienceTeenager;
    this.afterSchoolActivity = afterSchoolActivities;
    this.studies = studies;
    this.job = fullTimeJob;
    this.hobby = hobby;
    this.interest = interest;
    this.food = food;
    this.dream = dream;
    this.virtue = virtue;
    this.weakness = weakness;
    this.fear = fear;
    this.insecurity = insecurity;
    this.quirk = quirk;
    this.style = style;
    this.closeFamilyMember = closeFamilyMembersMinor;
    this.distantFamilyMember = distantFamilyMembersMinor;
  }

  showCharacter() {
    super.showCharacter();
    displayCharacterProfile.innerText = `Life isn't easy at ${this.age} years old! Between school (which is ${this.schoolExperience}, by the way), maintaining a social life and enduring the highly annoying presence of ${this.pronouns.possessive} ${this.closeFamilyMember}, ${this.firstName} has to keep ${this.pronouns.object}self standing.
        
        ${this.pronouns.subjectU} cares a LOT about ${this.interest}, is proud of ${this.pronouns.possessive} ${this.style} style and you can wake ${this.pronouns.object} for ${this.food} anytime. Besides school, ${this.firstName} ${this.afterSchoolActivity}, and in ${this.pronouns.possessive} spare time ${this.pronouns.subject} likes ${this.hobby}.
       
        ${this.firstName} is a bit insecure about ${this.pronouns.possessive} ${this.insecurity} and sometimes feels like ${this.pronouns.possessive} friends think ${this.pronouns.subject}'s ${this.weakness}, but ${this.pronouns.possessive} ${this.distantFamilyMember}'s praise of ${this.pronouns.possessive} ${this.virtue} always make ${this.firstName} feel better about ${this.pronouns.object}self. ${this.pronouns.subjectU} used to be afraid of ${this.fear}, but hasn\'t given it much thought lately. Oh, and ${this.pronouns.subject} ${this.quirk}, but that's between ${this.firstName} and ${this.pronouns.possessive} diary. Just like ${this.pronouns.possessive} bad grades in ${this.subject}...
       
        ${this.firstName} is thinking of studying ${this.studies} when ${this.pronouns.subject} graduates, but nothing is set in stone. Or maybe ${this.dream}, that would be kinda cool. Anyway, as long as ${this.pronouns.subject} doesn't become ${this.job} like ${this.pronouns.possessive} ${this.closeFamilyMember}, there is still hope.`;
  }
}

class YoungAdult extends Character {
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
    studies,
    studyExperience,
    sideJob,
    closeFamilyMembersAdult,
    distantFamilyMembersAdult,
    insecurity
  ) {
    super(fullName, age, pronouns, personalityType, starSign);
    this.studies = studies;
    this.studyExperience = studyExperience;
    this.job = sideJob;
    this.style = style;
    this.virtue = virtue;
    this.weakness = weakness;
    this.fear = fear;
    this.insecurity = insecurity;
    this.quirk = quirk;
    this.closeFamilyMember = closeFamilyMembersAdult;
    this.distantFamilyMember = distantFamilyMembersAdult;
    this.hobby = hobby;
    this.interest = interest;
  }

  showCharacter() {
    super.showCharacter();
    displayCharacterProfile.innerText = `${this.firstName} leads a busy life as a student of ${this.studies}, which ${this.studyExperience}. On weekends and evenings ${this.pronouns.subject} works as ${this.job} and in ${this.pronouns.possessive} spare time ${this.pronouns.subject} enjoys ${this.hobby}.
        
        After trying on a variety of styles and identities in school, ${this.firstName} feels most like ${this.pronouns.object}self wearing ${this.style} clothes, despite the disapproval of ${this.pronouns.possessive} ${this.distantFamilyMember}. ${this.pronouns.subjectU} is very open about ${this.pronouns.possessive} passion for ${this.interest}, but only ${this.pronouns.possessive} closest friends know that ${this.pronouns.subject} ${this.quirk}.
        
        Even though ${this.firstName} tends to be a little ${this.weakness}, ${this.pronouns.possessive} ${this.virtue} is inspiring to the people around ${this.pronouns.object}. ${this.firstName}'s fear of ${this.fear} has never stopped ${this.pronouns.object} from living life the way ${this.pronouns.subject} wants, but sometimes ${this.pronouns.subject} wishes ${this.pronouns.subject} felt less self-conscious about ${this.pronouns.possessive} ${this.insecurity}.   
        
        ${this.firstName} could not imagine ${this.pronouns.possessive} life without ${this.pronouns.possessive} ${this.closeFamilyMember}, who is always there for ${this.pronouns.object}, whether ${this.pronouns.subject} needs a shoulder to cry on or a partner in crime for a fun time.`;
  }
}

class Adult extends Character {
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
    studies,
    fullTimeJob,
    closeFamilyMembersAdult,
    distantFamilyMembersAdult,
    insecurity,
    residence,
    jobExperience,
    food
  ) {
    super(fullName, age, pronouns, personalityType, starSign);
    this.job = fullTimeJob;
    this.jobExperience = jobExperience;
    this.residence = residence;
    this.studies = studies;
    this.interest = interest;
    this.hobby = hobby;
    this.fear = fear;
    this.virtue = virtue;
    this.weakness = weakness;
    this.insecurity = insecurity;
    this.quirk = quirk;
    this.food = food;
    this.dream = dream;
    this.style = style;
    this.closeFamilyMember = closeFamilyMembersAdult;
    this.distantFamilyMember = distantFamilyMembersAdult;
  }

  showCharacter() {
    super.showCharacter();
    displayCharacterProfile.innerText = `${this.firstName} is ${this.age} years old and lives in ${this.residence}. After studying ${this.studies}, ${this.pronouns.subject} ended up becoming ${this.job}, which ${this.jobExperience}. ${this.firstName} is into ${this.interest} and likes to spend ${this.pronouns.possessive} time ${this.hobby}.
        
        ${this.pronouns.possessiveU} best friend is ${this.pronouns.possessive} ${this.closeFamilyMember}, who always calls ${this.firstName} by ${this.pronouns.possessive} middle name ${this.fullName.middleName} and gives ${this.pronouns.object} peptalks when ${this.pronouns.subject} feels insecure about ${this.pronouns.possessive} ${this.insecurity} again.
        
        ${this.firstName}'s family and friends love ${this.pronouns.object} for ${this.pronouns.possessive} ${this.virtue}, even though sometimes ${this.pronouns.subject} can be a bit ${this.weakness}. ${this.firstName} is not a fan of ${this.food} and avoids ${this.pronouns.possessive} ${this.distantFamilyMember} at all costs. ${this.pronouns.subjectU} is trying to cope with ${this.pronouns.possessive} fear of ${this.fear}, which isn't always easy, and ${this.pronouns.subject} ${this.quirk}, but we all have our things, don't we?
        
        ${this.firstName} has been dreaming of ${this.dream} since ${this.pronouns.subject} was a child. If only there was a way...`;
  }
}

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
