import { familyMembers } from "../database/livingSituation.js";

const getRandomFamilyMembers = () => {
  const closeFamilyMembersMinor = familyMembers.close.minor;
  const closeFamilyMembersAdult = familyMembers.close.adult.concat(
    closeFamilyMembersMinor
  );
  const distantFamilyMembersMinor = familyMembers.distant.minor;
  const distantFamilyMembersAdult = familyMembers.distant.adult.concat(
    distantFamilyMembersMinor
  );

  const randomCloseFamilyMembers = {
    minor:
      closeFamilyMembersMinor[
        Math.floor(Math.random() * closeFamilyMembersMinor.length)
      ],
    adult:
      closeFamilyMembersAdult[
        Math.floor(Math.random() * closeFamilyMembersAdult.length)
      ],
  };

  const randomDistantFamilyMembers = {
    minor:
      distantFamilyMembersMinor[
        Math.floor(Math.random() * distantFamilyMembersMinor.length)
      ],
    adult:
      distantFamilyMembersAdult[
        Math.floor(Math.random() * distantFamilyMembersAdult.length)
      ],
  };

  return { randomCloseFamilyMembers, randomDistantFamilyMembers };
};

export default getRandomFamilyMembers;
