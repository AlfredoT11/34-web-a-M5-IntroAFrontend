# Notas de la clase

1. JSX es la sintaxis que vamos a utilizar para crear interfaces gráficas (aplicaciones frontend) con React. NO es un lenguaje de programación.
2. Cada archivo con sintaxis JSX debe tener la extensión .jsx.
3. Cada archivo DEBE (de preferencia) tener un único componente que se llame igual que el archivo.
4. Un componente se compone de los siguientes elementos:
    - Un return que regresa el contenido de lo que queremos ver en pantalla. Este contenido se especifica con HTML + JS. IMPORTANTE: El return SOLAMENTE debe regresar UN ÚNICO elemento padre.
    - Sus properties (props).
5. Se deben seguir las siguientes reglas al crear componentes:
    - Nombrar los componentes con PascalCase (primera en mayúscula y las palabras subsecuentes con mayúscula la primera letra).
    - La extensión debe ser en minúscula (.jsx).
    - El proprty children es un prop especial que nos permite acceder a los elementos hijos de un componente. 