const path = require("path");
// console.log(path.sep);
// con join buscamos el contenido de la carpeta
const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);

// basename () retorna la ultima porcion de un path, a menudo se usa para extraer el nombre del archivo de una ruta completa.
const base = path.basename(filePath);
// console.log(base);

// buscamos la ruta absoluta usando la primer variable global __direname, que es nuestra app js, y luego le indicamos lo que queremos que resuelva.
const absolute = path.resolve(__dirname, "/content", "subfolder", "test.txt");
console.log(absolute);
