const request = require('request');
const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request('http://example.edu', (error, response, body) => {
  if(!error && response.statusCode === 200) {
    rl.question('Valid file (Y/N)? ', ans => {
      if (ans === "Y") {
        fs.writeFile('./index.html', body, err => {
          if (err) {
            console.error(err);
            return;
          } else {
            console.log("Downloaded and saved 1235 bytes to ./index.html.");
          }
          //file written successfully
        });
        rl.close();
      } else {
        process.exit();
      }
    });
  } else {
    console.log(error);
  }
  
});