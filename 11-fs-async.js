const { readFile, writeFile } = require("fs");

// callback
readFile("./content/first.txt", "utf-8", (err, result) => {
  err ? console.log(err) : console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    err ? console.log(err) : console.log(result);
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the result ${first}, ${second}`,
      (err, result) => {
        err ? console.log(err) : console.log(result);
      }
    );
  });
});
