import { displayCharacterProfile } from "../selectors.js";
import Character from "./Character.js";

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

export default Adult;
