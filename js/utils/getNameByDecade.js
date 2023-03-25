import getBirthYear from "./getBirthYear.js";

const getNameByDecade = (namesByNationalityAndGender) => {
  const charBirthYear = getBirthYear();
  let randomNameByDecade;

  if (charBirthYear < 1860) {
    randomNameByDecade =
      namesByNationalityAndGender[1850][
        Math.floor(Math.random() * namesByNationalityAndGender[1850].length)
      ];
  } else if (charBirthYear < 1870) {
    randomNameByDecade =
      namesByNationalityAndGender[1860][
        Math.floor(Math.random() * namesByNationalityAndGender[1860].length)
      ];
  } else if (charBirthYear < 1880) {
    randomNameByDecade =
      namesByNationalityAndGender[1870][
        Math.floor(Math.random() * namesByNationalityAndGender[1870].length)
      ];
  } else if (charBirthYear < 1890) {
    randomNameByDecade =
      namesByNationalityAndGender[1880][
        Math.floor(Math.random() * namesByNationalityAndGender[1880].length)
      ];
  } else if (charBirthYear < 1900) {
    randomNameByDecade =
      namesByNationalityAndGender[1890][
        Math.floor(Math.random() * namesByNationalityAndGender[1890].length)
      ];
  } else if (charBirthYear < 1910) {
    randomNameByDecade =
      namesByNationalityAndGender[1900][
        Math.floor(Math.random() * namesByNationalityAndGender[1900].length)
      ];
  } else if (charBirthYear < 1920) {
    randomNameByDecade =
      namesByNationalityAndGender[1910][
        Math.floor(Math.random() * namesByNationalityAndGender[1910].length)
      ];
  } else if (charBirthYear < 1930) {
    randomNameByDecade =
      namesByNationalityAndGender[1920][
        Math.floor(Math.random() * namesByNationalityAndGender[1920].length)
      ];
  } else if (charBirthYear < 1940) {
    randomNameByDecade =
      namesByNationalityAndGender[1930][
        Math.floor(Math.random() * namesByNationalityAndGender[1930].length)
      ];
  } else if (charBirthYear < 1950) {
    randomNameByDecade =
      namesByNationalityAndGender[1940][
        Math.floor(Math.random() * namesByNationalityAndGender[1940].length)
      ];
  } else if (charBirthYear < 1960) {
    randomNameByDecade =
      namesByNationalityAndGender[1950][
        Math.floor(Math.random() * namesByNationalityAndGender[1950].length)
      ];
  } else if (charBirthYear < 1970) {
    randomNameByDecade =
      namesByNationalityAndGender[1960][
        Math.floor(Math.random() * namesByNationalityAndGender[1960].length)
      ];
  } else if (charBirthYear < 1980) {
    randomNameByDecade =
      namesByNationalityAndGender[1970][
        Math.floor(Math.random() * namesByNationalityAndGender[1970].length)
      ];
  } else if (charBirthYear < 1990) {
    randomNameByDecade =
      namesByNationalityAndGender[1980][
        Math.floor(Math.random() * namesByNationalityAndGender[1980].length)
      ];
  } else if (charBirthYear < 2000) {
    randomNameByDecade =
      namesByNationalityAndGender[1990][
        Math.floor(Math.random() * namesByNationalityAndGender[1990].length)
      ];
  } else if (charBirthYear < 2010) {
    randomNameByDecade =
      namesByNationalityAndGender[2000][
        Math.floor(Math.random() * namesByNationalityAndGender[2000].length)
      ];
  } else if (charBirthYear < 2020) {
    randomNameByDecade =
      namesByNationalityAndGender[2010][
        Math.floor(Math.random() * namesByNationalityAndGender[2010].length)
      ];
  }

  return randomNameByDecade;
};

export default getNameByDecade;
