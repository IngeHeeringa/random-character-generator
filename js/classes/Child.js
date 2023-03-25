import { displayCharacterProfile } from "../selectors.js";
import Character from "./Character.js";

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

export default Child;
