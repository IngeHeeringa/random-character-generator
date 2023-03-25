import { lifeStageInput } from "../selectors.js";

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

export default checkLifeStage;
