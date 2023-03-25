import { genderInput } from "../selectors.js";

const checkGender = () => {
  let gender;
  let pronouns;

  for (const genderButton of genderInput) {
    if (genderButton.checked) {
      gender = genderButton.value;
      break;
    }
  }

  gender === "male"
    ? (pronouns = {
        subject: "he",
        subjectU: "He",
        object: "him",
        possessive: "his",
        possessiveU: "His",
      })
    : (pronouns = {
        subject: "she",
        subjectU: "She",
        object: "her",
        possessive: "her",
        possessiveU: "Her",
      });

  return { gender, pronouns };
};

export default checkGender;
