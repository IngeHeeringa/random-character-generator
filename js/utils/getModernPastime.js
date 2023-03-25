const getModernPastime = (pastime, lifeStage) =>
  pastime.modern[lifeStage]
    .concat(pastime.modern.general)
    .concat(pastime.classic[lifeStage])
    .concat(pastime.classic.general);

export default getModernPastime;
