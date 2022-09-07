const { readFile, writeFile } = require("fs");

// callback
// como tenemos este enfoque asincrono, en el momento que iniciamos la tarea, se ejecutará start, luego starting next task y por ultimo done whit this task
// en el enfoque sincronico, simplemente se ejecuta linea por linea de codigo.
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  err && console.log(err);
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    err && console.log(err);
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the result ${first}, ${second}`,
      { flag: "a" },
      (err) => {
        err ? console.log(err) : console.log("done whit this task!");
      }
    );
  });
});
console.log("starting next task");
