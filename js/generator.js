import { namesUK, namesES, namesNL } from "./database/names.js";
import {
  personalityTypes,
  traits,
  dreams,
  starSigns,
  advice,
} from "./database/personality.js";
import { schoolExperience, studies, jobs } from "./database/occupation.js";
import { hobbies, interests } from "./database/pastimes.js";
import { familyMembers, residence } from "./database/livingSituation.js";
import {
  genderInput,
  lifeStageInput,
  countryInput,
  storyYearInput,
  generateButton,
  displayCharacter,
  displayFullName,
  displayCharacterProfile,
  displayPersonalityType,
  displayStarSign,
} from "./selectors.js";
import checkGender from "./utils/checkGender.js";

const checkLifeStage = () => {
  let lifeStage;

  for (const lifeStageButton of lifeStageInput) {
    if (lifeStageButton.checked) {
      lifeStage = lifeStageButton.value;
      break;
    }
  }

  return lifeStage;
};

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

const getRandomAge = () => {
  const ageRange = getAgeRange();
  const randomAge = Math.floor(
    Math.random() * (ageRange.max - ageRange.min) + ageRange.min
  );

  return randomAge;
};

const getBirthYear = () => {
  const randomAge = getRandomAge();
  const birthYear = storyYearInput.value - randomAge;

  return birthYear;
};

const getNamesByDecade = (namesByNationalityAndGender) => {
  const charBirthYear = getBirthYear();
  let randomName;

  if (charBirthYear < 1860) {
    randomName =
      namesByNationalityAndGender[1850][
        Math.floor(Math.random() * namesByNationalityAndGender[1850].length)
      ];
  } else if (charBirthYear < 1870) {
    randomName =
      namesByNationalityAndGender[1860][
        Math.floor(Math.random() * namesByNationalityAndGender[1860].length)
      ];
  } else if (charBirthYear < 1880) {
    randomName =
      namesByNationalityAndGender[1870][
        Math.floor(Math.random() * namesByNationalityAndGender[1870].length)
      ];
  } else if (charBirthYear < 1890) {
    randomName =
      namesByNationalityAndGender[1880][
        Math.floor(Math.random() * namesByNationalityAndGender[1880].length)
      ];
  } else if (charBirthYear < 1900) {
    randomName =
      namesByNationalityAndGender[1890][
        Math.floor(Math.random() * namesByNationalityAndGender[1890].length)
      ];
  } else if (charBirthYear < 1910) {
    randomName =
      namesByNationalityAndGender[1900][
        Math.floor(Math.random() * namesByNationalityAndGender[1900].length)
      ];
  } else if (charBirthYear < 1920) {
    randomName =
      namesByNationalityAndGender[1910][
        Math.floor(Math.random() * namesByNationalityAndGender[1910].length)
      ];
  } else if (charBirthYear < 1930) {
    randomName =
      namesByNationalityAndGender[1920][
        Math.floor(Math.random() * namesByNationalityAndGender[1920].length)
      ];
  } else if (charBirthYear < 1940) {
    randomName =
      namesByNationalityAndGender[1930][
        Math.floor(Math.random() * namesByNationalityAndGender[1930].length)
      ];
  } else if (charBirthYear < 1950) {
    randomName =
      namesByNationalityAndGender[1940][
        Math.floor(Math.random() * namesByNationalityAndGender[1940].length)
      ];
  } else if (charBirthYear < 1960) {
    randomName =
      namesByNationalityAndGender[1950][
        Math.floor(Math.random() * namesByNationalityAndGender[1950].length)
      ];
  } else if (charBirthYear < 1970) {
    randomName =
      namesByNationalityAndGender[1960][
        Math.floor(Math.random() * namesByNationalityAndGender[1960].length)
      ];
  } else if (charBirthYear < 1980) {
    randomName =
      namesByNationalityAndGender[1970][
        Math.floor(Math.random() * namesByNationalityAndGender[1970].length)
      ];
  } else if (charBirthYear < 1990) {
    randomName =
      namesByNationalityAndGender[1980][
        Math.floor(Math.random() * namesByNationalityAndGender[1980].length)
      ];
  } else if (charBirthYear < 2000) {
    randomName =
      namesByNationalityAndGender[1990][
        Math.floor(Math.random() * namesByNationalityAndGender[1990].length)
      ];
  } else if (charBirthYear < 2010) {
    randomName =
      namesByNationalityAndGender[2000][
        Math.floor(Math.random() * namesByNationalityAndGender[2000].length)
      ];
  } else if (charBirthYear < 2020) {
    randomName =
      namesByNationalityAndGender[2010][
        Math.floor(Math.random() * namesByNationalityAndGender[2010].length)
      ];
  }

  return randomName;
};

const getRandomName = () => {
  const { gender } = checkGender();
  const charNationality = countryInput.value;
  let randomName;

  switch (charNationality) {
    case "es":
      if (gender === "female") {
        randomName = getNamesByDecade(namesES.femaleNames);
      } else if (gender === "male") {
        randomName = getNamesByDecade(namesES.maleNames);
      }
      break;
    case "nl":
      if (gender === "female") {
        randomName = getNamesByDecade(namesNL.femaleNames);
      } else if (gender === "male") {
        randomName = getNamesByDecade(namesNL.maleNames);
      }
      break;
    case "uk":
      if (gender === "female") {
        randomName = getNamesByDecade(namesUK.femaleNames);
      } else if (gender === "male") {
        randomName = getNamesByDecade(namesUK.maleNames);
      }
      break;
  }

  return randomName;
};

const getRandomSurname = () => {
  const charNationality = countryInput.value;
  let randomSurname;

  switch (charNationality) {
    case "es":
      randomSurname = [
        namesES.surnames[Math.floor(Math.random() * namesES.surnames.length)],
        namesES.surnames[Math.floor(Math.random() * namesES.surnames.length)],
      ]
        .toString()
        .split(",")
        .join(" ");
      break;
    case "nl":
      randomSurname =
        namesNL.surnames[Math.floor(Math.random() * namesNL.surnames.length)];
      break;
    case "uk":
      randomSurname =
        namesUK.surnames[Math.floor(Math.random() * namesUK.surnames.length)];
      break;
  }

  return randomSurname;
};

const getRandomPersonalityType = () =>
  personalityTypes[Math.floor(Math.random() * personalityTypes.length)];

const getRandomStarSign = () =>
  starSigns[Math.floor(Math.random() * starSigns.length)];

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

const getRandomCharacterTraits = () => {
  const birthYear = getBirthYear();
  const classicQuirks = traits.quirks.classic;
  const modernQuirks = traits.quirks.modern.concat(classicQuirks);

  const randomTraits = {
    virtue: traits.virtues[Math.floor(Math.random() * traits.virtues.length)],
    weakness:
      traits.weaknesses[Math.floor(Math.random() * traits.weaknesses.length)],
    insecurity:
      traits.insecurities[
        Math.floor(Math.random() * traits.insecurities.length)
      ],
    fear: traits.fears[Math.floor(Math.random() * traits.fears.length)],
    style: traits.style[Math.floor(Math.random() * traits.style.length)],
    quirk: "",
  };

  if (birthYear < 1970) {
    randomTraits.quirk =
      classicQuirks[Math.floor(Math.random() * classicQuirks.length)];
  } else {
    randomTraits.quirk =
      modernQuirks[Math.floor(Math.random() * modernQuirks.length)];
  }

  return randomTraits;
};

const getRandomDream = () => dreams[Math.floor(Math.random() * dreams.length)];

const getModernPastime = (pastime, lifeStage) =>
  pastime.modern[lifeStage]
    .concat(pastime.modern.general)
    .concat(pastime.classic[lifeStage])
    .concat(pastime.classic.general);

const getRandomHobby = () => {
  const birthYear = getBirthYear();
  const lifeStage = checkLifeStage();
  let randomHobby;

  if (birthYear < 1970) {
    switch (lifeStage) {
      case "child":
        const classicChildHobbies = hobbies.classic.child.concat(
          hobbies.classic.general
        );
        randomHobby =
          classicChildHobbies[
            Math.floor(Math.random() * classicChildHobbies.length)
          ];
        break;
      case "teenager":
        const classicTeenagerHobbies = hobbies.classic.teenager.concat(
          hobbies.classic.general
        );
        randomHobby =
          classicTeenagerHobbies[
            Math.floor(Math.random() * classicTeenagerHobbies.length)
          ];
        break;
      case "youngadult":
      case "adult":
        const classicAdultHobbies = hobbies.classic.adult.concat(
          hobbies.classic.general
        );
        randomHobby =
          classicAdultHobbies[
            Math.floor(Math.random() * classicAdultHobbies.length)
          ];
        break;
      case "senior":
        const classicSeniorHobbies = hobbies.classic.senior.concat(
          hobbies.classic.general
        );
        randomHobby =
          classicSeniorHobbies[
            Math.floor(Math.random() * classicSeniorHobbies.length)
          ];
        break;
    }
  } else {
    switch (lifeStage) {
      case "child":
        const modernChildHobbies = getModernPastime(hobbies, "child");
        randomHobby =
          modernChildHobbies[
            Math.floor(Math.random() * modernChildHobbies.length)
          ];
        break;
      case "teenager":
        const modernTeenagerHobbies = getModernPastime(hobbies, "teenager");
        randomHobby =
          modernTeenagerHobbies[
            Math.floor(Math.random() * modernTeenagerHobbies.length)
          ];
        break;
      case "youngadult":
      case "adult":
        const modernAdultHobbies = getModernPastime(hobbies, "adult");
        randomHobby =
          modernAdultHobbies[
            Math.floor(Math.random() * modernAdultHobbies.length)
          ];
        break;
      case "senior":
        const modernSeniorHobbies = getModernPastime(hobbies, "senior");
        randomHobby =
          modernSeniorHobbies[
            Math.floor(Math.random() * modernSeniorHobbies.length)
          ];
        break;
    }
  }

  return randomHobby;
};

const getRandomInterests = () => {
  const birthYear = getBirthYear();
  const lifeStage = checkLifeStage();
  const randomInterests = {
    interest: "",
    food: interests.food[Math.floor(Math.random() * interests.food.length)],
    toys: interests.toys[Math.floor(Math.random() * interests.toys.length)],
  };

  if (birthYear < 1970) {
    switch (lifeStage) {
      case "child":
        const classicChildInterests = interests.classic.child.concat(
          interests.classic.general
        );
        randomInterests.interest =
          classicChildInterests[
            Math.floor(Math.random() * classicChildInterests.length)
          ];
        break;
      case "teenager":
        const classicTeenagerInterests = interests.classic.teenager.concat(
          interests.classic.general
        );
        randomInterests.interest =
          classicTeenagerInterests[
            Math.floor(Math.random() * classicTeenagerInterests.length)
          ];
        break;
      case "youngadult":
      case "adult":
      case "senior":
        const classicAdultInterests = interests.classic.adult.concat(
          interests.classic.general
        );
        randomInterests.interest =
          classicAdultInterests[
            Math.floor(Math.random() * classicAdultInterests.length)
          ];
        break;
    }
  } else {
    switch (lifeStage) {
      case "child":
        const modernChildInterests = getModernPastime(interests, "child");
        randomInterests.interest =
          modernChildInterests[
            Math.floor(Math.random() * modernChildInterests.length)
          ];
        break;
      case "teenager":
        const modernTeenagerInterests = getModernPastime(interests, "teenager");
        randomInterests.interest =
          modernTeenagerInterests[
            Math.floor(Math.random() * modernTeenagerInterests.length)
          ];
        break;
      case "youngadult":
      case "adult":
      case "senior":
        const modernAdultInterests = getModernPastime(interests, "adult");
        randomInterests.interest =
          modernAdultInterests[
            Math.floor(Math.random() * modernAdultInterests.length)
          ];
        break;
    }
  }

  return randomInterests;
};

const getRandomFamilyMembers = () => {
  const closeFamilyMembersMinor = familyMembers.close.minor;
  const closeFamilyMembersAdult = familyMembers.close.adult.concat(
    closeFamilyMembersMinor
  );
  const distantFamilyMembersMinor = familyMembers.distant.minor;
  const distantFamilyMembersAdult = familyMembers.distant.adult.concat(
    distantFamilyMembersMinor
  );

  const randomCloseFamilyMembers = {
    minor:
      closeFamilyMembersMinor[
        Math.floor(Math.random() * closeFamilyMembersMinor.length)
      ],
    adult:
      closeFamilyMembersAdult[
        Math.floor(Math.random() * closeFamilyMembersAdult.length)
      ],
  };

  const randomDistantFamilyMembers = {
    minor:
      distantFamilyMembersMinor[
        Math.floor(Math.random() * distantFamilyMembersMinor.length)
      ],
    adult:
      distantFamilyMembersAdult[
        Math.floor(Math.random() * distantFamilyMembersAdult.length)
      ],
  };

  return { randomCloseFamilyMembers, randomDistantFamilyMembers };
};

const getRandomResidence = () => {
  const randomAdjective =
    residence.adjective[Math.floor(Math.random() * residence.adjective.length)];
  const randomPlace =
    residence.place[Math.floor(Math.random() * residence.place.length)];

  return `${randomAdjective} ${randomPlace}`;
};

const getRandomAdvice = () => advice[Math.floor(Math.random() * advice.length)];

class Character {
  constructor(fullName, age, pronouns, personalityType, starSign) {
    this.fullName = fullName;
    this.firstName = fullName.firstName;
    this.pronouns = pronouns;
    this.age = age;
    this.personalityType = personalityType;
    this.starSign = starSign;
  }

  showCharacter() {
    displayFullName.innerText = `${this.firstName} ${this.fullName.middleName} ${this.fullName.surname}`;
    displayPersonalityType.innerText = `${this.firstName}'s personality type is ${this.personalityType.personality}, also known as ${this.personalityType.type}. ${this.personalityType.personality}s are often described as ${this.personalityType.description}.`;
    displayStarSign.innerHTML = `<img src="${this.starSign.sign}" class="star-sign__img" alt="${this.starSign.name} zodiac sign">
        <h3 class="star-sign__name">${this.starSign.name}</h3>
        <p class="star-sign__element__keytraits">${this.starSign.element.traits[0]} <span class="star-sign__element__symbol">${this.starSign.element.symbol}</span> ${this.starSign.element.traits[1]} <span class="star-sign__element__symbol">${this.starSign.element.symbol}</span> ${this.starSign.element.traits[2]}</p>
        `;
  }
}

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
