// local
// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimun, what we want to.) eg:
const secret = "super secret";
// share
const ashley = "Ashley";
const john = "John";
console.log(module);
//returns an object nos interesa el exports que es un {} nosotros seteamos los values de ese objeto que se encuentra dentro de module.
module.exports = {
  ashley,
  john,
};
// probamos esto de arriba en app js.
