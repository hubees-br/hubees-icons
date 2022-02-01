const { readdirSync, rename, mkdirSync, existsSync } = require('fs');
const { resolve } = require('path');

// Get path to image directory
// const outlinePath = resolve(__dirname, './outline');
// const solidPath = resolve(__dirname, './solid');

// Get an array of the files inside the folder
//const outlineFiles = readdirSync(outlinePath);
//const solidFiles = readdirSync(solidPath);

// // Loop through each file that was retrieved
// outlineFiles.forEach((outlineFile) => {
//   const formattedOutlineName = outlineFile.includes('=') ? outlineFile.split('=')[1] : outlineFile;
//   const newOutlineName = `hubees-${formattedOutlineName}`;
//   rename(outlinePath + `/${outlineFile}`, outlinePath + `/${newOutlineName}`, () => {});
// });

// // Loop through each file that was retrieved
// solidFiles.forEach((solidFile) => {
//   const formattedSolidName = solidFile.includes('=') ? solidFile.split('=')[1] : solidFile;
//   const newSolidName = `hubees-${formattedSolidName}`;
//   rename(solidPath + `/${solidFile}`, solidPath + `/${newSolidName}`, () => {});
// });

const path = resolve(__dirname, './Icons');
const files = readdirSync(path);

const newPath = resolve(__dirname, './hubees');
if (!existsSync(newPath)) {
  mkdirSync(newPath);
}

files.forEach((file) => {
  console.log('-');
  const formattedName = file.includes('=') ? file.split('=')[1] : file;
  const newName = `${formattedName.toLowerCase()}`;
  rename(path + `/${file}`, newPath + `/${newName}`, () => {});
});
