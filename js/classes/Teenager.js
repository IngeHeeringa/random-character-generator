import { displayCharacterProfile } from "../selectors.js";
import Character from "./Character.js";

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

export default Teenager;
