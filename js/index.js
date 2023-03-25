import generateCharacter from "./generateCharacter/generateCharacter.js";
import { generateButton } from "./selectors.js";

generateButton.addEventListener("click", generateCharacter);
