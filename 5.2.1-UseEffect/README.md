# Hook useEffect

## Repaso
Para crear una aplicación de React con la herramienta Vite necesitamos ejecutar el siguiente comando:

```bash
npm create vite@latest
```

Tenemos que responder a un formulario para seleccionar el nombre del proyecto, el nombre del paquete, el framework o biblioteca a utilizar y la sintaxis a utilizar.
    - En la opción del framework o biblioteca seleccionamos React
    - En la opción del lenguaje o sintaxis seleccionamos JavaScript

NOTA: Recordar que git bash no se puede interactuar con las opciones de la creación de la aplicación.

Después de crear la aplicación, debemos instalar las dependencias con el siguiente comando:

```bash
npm install
```
IMPORTANTE: Asegurarnos que en nuestra terminal estamos en la carpeta donde tenemos el package.json

Una vez que instalamos las dependencias, ejecutamos el proyecto:
```bash
npm run dev
```

El comando dev viene dentro del package.json en la sección de scripts

Paso opcional: Agregar --host al script dev en el package.json

## Hooks
Los hooks son funciones especiales para acceder a ciertas funciones de los componentes de React. Tienen las siguientes características:
- Todos empiezan con la palabra use (useState, useEffect, useRef, useContext, useReduce...)
- Todos se deben importar.

React cuenta con hooks predefinidos, sin embargo, nosotros podemos crear nuestros propios hooks a partir de hooks predefinidos.

### useEffect
Este hook nos permite sincronizar un componente con un sistema externo.

Un sistema externo es cualquier elemento de software que nuestra aplicación no controla, por ejemplo:
- El sistema operativo.
- Un contador creado con setTimeout() (Es una función que nos permite crear un temporizador).
- Una petición a un servidor externo (o un API).

Este hook se va a ejecutar por primera cuando cargamos el componente, además se va a ejecutar ANTES de renderizar contenidos en pantalla del componente.