const http = require("http");

// Usualmente y por buenas prácticas los parametros se llaman req & res como todo parámetro puedo ponerle jerbito y va a seguir funcionando.    El primer parámetro representa la solicitud entrante: imagina que el cliente/usuario está solicitando algo desde la web, entonces, trendremos información acerca del método y toda la información útil en esa solicitud. Y el parámetro res es lo que enviaremos como respuesta a dicha solicitud.
const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our history");
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>404 we can't seem to find the page you're looking for</p>
  <a href="/">Back home</a>
  `);
  //   res.write("Welcome to our home page");
  //   res.end();
});
server.listen(5000); // http://localhost:5000/

// si trabajamos con dom o React nuestra home page es / en nuestro caso con node necesitamos el req, que devuelve un objeto gigante, del cual necesitamos la propiedad URL, por que de esta manera sabremos qué dirección/endpoint el usuario/cliente está solicitando.
