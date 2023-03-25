import {
  displayFullName,
  displayPersonalityType,
  displayStarSign,
} from "../selectors.js";

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

export default Character;
