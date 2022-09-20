const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt");
    const second = await readFile("./content/second.txt");
    await writeFile(
      "./content/result.txt",
      `this is awesome ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//node's option

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf-8");
//     const second = await readFilePromise("./content/second.txt", "utf-8");
//     await writeFilePromise(
//       "./content/result.txt",
//       `this is awesome ${first} ${second}`
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();
