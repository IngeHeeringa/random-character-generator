import { displayCharacterProfile } from "../selectors.js";
import Character from "./Character.js";

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

export default YoungAdult;
