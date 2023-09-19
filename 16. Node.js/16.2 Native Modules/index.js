//https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fswritefilefile-data-options-callback

//fs-> filesystem module
const fs = require("fs");

//now lete use one method from fs module
fs.writeFile("message.txt", "Hello From NodeJS!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  //lets try to read from a file now using fs module

fs.readFile('./message.txt', "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 