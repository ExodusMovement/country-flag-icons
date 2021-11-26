const fs = require("fs");
const path = "./";
const indexPath = path + "index.js";

const filesArray = fs
  .readdirSync(path)
  .filter(
    (file) => fs.lstatSync(path + file).isFile() && file.includes(".png")
  );

if (fs.existsSync(indexPath)) {
  fs.unlinkSync(indexPath);
}

let mapTemplate = "const images = {\n";

let imageMap = "";
filesArray.forEach((file) => {
  const code = file.replace(".png", "");
  imageMap += "\t" + code + ': require("./' + code + '.png"),\n';
});
mapTemplate += imageMap;
mapTemplate += "}";

console.log(mapTemplate);

// mapTemplate.replace('imageMap', imageMap)

fs.writeFileSync(indexPath, mapTemplate);
