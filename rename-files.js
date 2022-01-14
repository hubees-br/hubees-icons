const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, './outline');
const imageDirPath2 = resolve(__dirname, './solid');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);
const files2 = readdirSync(imageDirPath2);

// Loop through each file that was retrieved
files.forEach((file) => {
  const newName = 'hubees-' + file.includes('=') ? file.split('=')[1] : file;
  rename(imageDirPath + `/${file}`, imageDirPath + `/${newName}`, () => {});
});

// Loop through each file that was retrieved
files2.forEach((file) => {
  const newName = 'hubees-' + file.includes('=') ? file.split('=')[1] : file;
  rename(imageDirPath + `/${file}`, imageDirPath + `/${newName}`, () => {});
});
