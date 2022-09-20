/*

npm nos permite hacer tres cosas: reusar nuestro código en otros proyectos, 
usar código de terceros y compartir nuestras soluciones con otros devs.
https://www.npmjs.com/
Un proyecto en node, tendrá más de un paquete npm instalado como así también dependencias.
No hay control de calidad en los registros de npm; cualquiera puede publicar lo que desee.
npm commands:
npm global que viene con node:
npm --version
dependencias locales:
npm i seguido del nombre del paquete.
dependencias globales, se pueden usar en cualquier proyecto:
npm install -g seguido del nombre del paquete.

package.json archivo de manifiesto, guarda información importante sobre el proyecto/paquete.
podemos hacerlo de manera manual, siempre en la raíz del proyecto. Obviamente tendremos que crear
de manera manual cada property del json.
Podemos automatizarlo de 2 diferentes maneras 
la primera:
npm init (paso por paso , apretar enter para saltear)
la segunda:
npm init -y (setea todo por defecto)
¿Porqué necesitamos el package.json?
porque si quisiera instalar un paquete local, (este paquete estará guardado como una dependencia)
corremos el comando npm i lodash (una libería de utilidades) lo instalamos solo como ejemplo,
porqué? no hay polque. bueno en fin: el package json lo necesitamos para proveer información acerca de
nuestro proyecto, una propiedad muy importante es la de dependencias, por que ahí es donde guardaremos
las dependencias que nuestro proyecto usará.
tambien se almacenan en la carpeta node modules, cada dependecia que instalemos.
El json nos sirve por que si queremos subir cambios a github, la carpeta node_modules es demasiado pesada,
en cambio, el json no, de esta manera lo subimos y si alguien quiere clonar el proyecto, simplemente
instala las dependencias con npm i, que estarán almacenadas en dicho archivo.

lodash tiene un método llamado flattenDeep() al cuál tenemos acceso porque 
instalamos la dependencia y la verdad que es MUY útil, hermoso.
*/

//por convención podemos llamar la variable _
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello");
/* 
nodemon config automaticamente reinicia la app y corre los logs 
sin tener que estar ejecutando siempre node appjs, 
cambiamos el script de package.json para que esto suceda:
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  previo a instalar npm i nodemon -D
  para desinstalar  npm uninstall package name
  npm run dev
  nodemon app.js
*/
/*
El package-lock.json guarda todas las versiones especificas de todos los paquetes, 
no solo los de las dependencias. Esto es necesario, ya que si no, nuestro proyecto
quedaría obsoleto para otras personas que quizás quieran usarlo.
+ info: https://nodesource.com/blog/the-basics-of-package-json
de ahora en mas solo usaremos como comando para visualizar y actualizar la app: nodemon
*/
