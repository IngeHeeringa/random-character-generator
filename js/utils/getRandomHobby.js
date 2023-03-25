import { hobbies } from "../database/pastimes.js";
import checkLifeStage from "./checkLifeStage.js";
import getBirthYear from "./getBirthYear.js";

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

export default getRandomHobby;
