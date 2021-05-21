# Notas:

En la carpeta manejo_argumentos fue un acercamiento a cómo funciona la parte de argv de node.

En la carpeta yargs, escribiendo en la linea de comandos dentro de ésta carpeta lo siguiente: ```node app --help``` se visualizan las opciones de las flags que acepta el programa

```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Es la base de la tabla de multiplicar      [número] [requerido]
  -l, --listar   Lista la tabla de multiplicar en consola
                                                     [booleano] [defecto: false]
  -h, --hasta    Limite hasta que numero se va a multiplicar la base
                                                          [número] [defecto: 10]
```