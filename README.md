# GuruHotel Frontend Challenge

Desafio realizado para GuruHotel, consistente de crear una SPA que consuma datos de la GraphQL API de Yelp

Tecnologia usada:
  - ReactJs
  - Yelp GraphQL API
  - Html + Css + Js
  - GitHub
# Deployment
La aplicacion se preparo para producción con ```$yarn build``` y se hizo el deploy para su utilizacón a Netlify:
    https://cocky-joliot-1847ed.netlify.app/
## Iniciando el proyecto
Primero tenemos que clonar el proyecto
```sh
$ git clone https://github.com/danilodiez/GuruHotel-Challenge
```
Instalamos las dependencias necesarias
```sh
$ npm install
```

Y listo, ahora podemos ejecutar la aplicacion
```sh
$ yarn start
```
Lo anterior ejecutara la aplicacion en modo desarrollador, cabe destacar que si bien no es una buena practica, a fines del desafio, deje incluida el archivo que contiene la APIKey para poder utilizarla sin problemas.
La aplicacion puede ser accedida en:
 http://localhost:3000 

# Store Finder
Una vez iniciada la app, solo tendremos que ingresar el tipo de tienda o lugar querramos, la ubicacion deseada y presionar "Search".
Se mostraran 10 resultados, de estar disponibles. De cada resultado, se podrán obtener más detalles.



