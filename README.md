# La Comprita
La Aplicación Web para la competencia 'Hack A Virus [COVID-19]' de CODE[GYM].  El proposito es ayudar a puertorriqueños que salen a hacer compras y no consiguen los productos que deseaban.  Estas personas estan expuestas a contagiarse con el COVID-19. La aplicacion le permite al usuario poder hacer una busqueda de productos con parametros.  Los siguientes parametros son: 
* Tipo de Tienda: Supermercado, Farmacia, Colmado, etc...
* Categoria de Articulo: Limpieza, Alimentos, Primeros Auxilios, etc... 
* Pueblo: pueblo de Puerto Rico que se seleccione.

La aplicacion es completamente gratuita y hecha con mucho amor por estudiantes universitarios.

## Tabla de Contenido
1. Instalación
2. Instrucciones
3. Client side
4. Server side
5. Database

## Instalación
Antes de seguir con las instrucciones es importante tener las siguientes herramientas y tecnologias:
* npm
* node
* git

Luego de tener estas herramientas, ya puedes proceder con los pasos a siguiente.

1. Escribir en el terminal
```
$ git clone 'https://github.com/christianrosado20/La-Comprita.git'
```
2. Abrir el Proyecto en su Text Editor o IDE de preferencia.
3. Bajar todas las dependencias de los node_modules del server side.
```
$ npm install
```
4. Bajar todas las dependecias de los node_modules del client side.
```
$ npm run client-install
```

## Instrucciones
La aplicación fue creada utilizando el MERN (MongoDB, Express.js, React.js y Node.js) Stack.  La aplicacion tiene distintas maneras de poder ser corrida. 

Para correr la aplicación completa:
```
$ npm run dev
```

Para correr el servidor solamente:
```
$ nodemon app
```

Para correr el client-side solamente:
```
$ npm run client
```
## Client Folder
En el client folder se encuentra la aplicación utilizando React.js.  Hay distintos folders en los que se puede encontrar la aplicacion y sus stylesheets.  

En el `/src` folder podemos encontrar lo siguiente:
* `/components` : en este directorio puedes encontrar las paginas de la aplicacion y los componentes reusables.
* `/stylesheets` : en este directorio puedes encontrar todos los documentos de styling en el formato `.scss` que significa SASS.  Es importante tener conocimiento previo en Sass o por lo menos CSS.  Al no tener conocimiento sobre Sass, pueden accesar [aqui](https://www.w3schools.com/sass/default.asp) para aprender un poco mas.

Documentos importantes que se deberian explicar:
* `App.js` : Se encuentra el root component en donde se llaman todos los components y se crean los routes.
* `App.css` : Se encuentra el root stylesheet de la aplicacion.  Todo diseño que se escriba en este file, se aplicará en toda la aplicación.

## Server (Root Folder)
En el `root` folder podemos conseguir la aplicacion y el servidor con diferentes folders necesario para que la aplicación funcione.  Explicaremos a siguiente los folders y files que se pueden encontrar en el root folder.
* `/config` : encontramos el documento `keys.js` en donde encontramos la llave de acceso para la base de datos.
* `/models` : encontramos los `schemas` que son un tipo de 'template' para nuestros objectos en la base de datos.
* `/routes/api` : encontramos los api routes para poder pedir o enviar data al servidor o la base de datos.
* `app.js` : encontramos la configuración del servidor en donde crea la conección con la base de datos.

## Setting Up MongoDB
Para poder correr la aplicación es importante tener una cuenta de acceso para la base de datos.  Al tener una, se tiene que accesar al file en `/config/keys.js` y cambiar `<username>` por el username y `<password>` por el password.

## API
El API permite poder hacer llamadas al servidor para poder recibir data.  La data accesible al publico son las siguientes:

### Items
* `GET REQUEST` => route: `/api/items` => permite buscar todos los articulos en la base de datos.
* `GET REQUEST` => route: `/api/items/:name` => permite buscar un articulo especifico.

### Stores
* `GET REQUEST` => route: `/api/stores/` => permite buscar todas las tiendas en la base de datos.
* `GET REQUEST` => route: `/api/stores/:name` => permite buscar una tienda en especifica.



## Desarrolladores
Esta aplicacion web fue desarrollada con mucho amor por:
* Yaritza M. García Chaparro (UPRM)
* Alexander Guzman Pepin (PUPR)
* Orlando F. Marrero Soto (UPRM)
* Christian E. Rosado Feliciano (UPRM)
