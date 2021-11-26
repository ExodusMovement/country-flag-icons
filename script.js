const fs = require("fs");
const path = "./3x2/";
const alphaMap = require("./alpha2-alpha3-map.json");

const filesArray = fs
  .readdirSync(path)
  .filter((file) => fs.lstatSync(path + file).isFile());

alphaMap.forEach((map) => {
  for (let i = 0; i < filesArray.length; i++) {
    const file = filesArray[i];
    if (file.replace(".svg", "") === map[0]) {
      fs.renameSync(path + file, './3x2_alpha_3/' + map[1] + ".svg");
      break;
    }
  }
});

// console.log(filesArray);
