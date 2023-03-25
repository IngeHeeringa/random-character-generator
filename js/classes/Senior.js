import { displayCharacterProfile } from "../selectors.js";
import Character from "./Character.js";

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

export default Senior;
