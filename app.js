// built-in module eg:
const os = require("os");
// info sobre el usuario actual
const user = os.userInfo();
console.log(user);
//retorna un objeto
/**{
  uid: "",
  gid: "",
  username: "",
  homedir: "",
  shell: null
} */
// metodo que retorna el tiempo de actividad en el sistema solo en segundos
//console.log(`The system uptime is ${os.uptime()} seconds`);
// retorno The system uptime is 768981 seconds (anda lenta mi pc xd)
// data util de mi sistema operativo con métodos con built-in
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
