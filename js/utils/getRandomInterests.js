import { interests } from "../database/pastimes.js";
import checkLifeStage from "./checkLifeStage.js";
import getBirthYear from "./getBirthYear.js";
import getModernPastime from "./getModernPastime.js";

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

export default getRandomInterests;
