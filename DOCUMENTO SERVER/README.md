# INSTALACIÓN Y USO DE JSON SERVER

Paso 1: Verificar la versión de Node.js
Abre Git Bash y verifica la versión actual de Node.js con el siguiente comando: 

```
node -v
```

Paso 2: Instalación de Node.js
Si la versión no es la requerida (v20.15.0), descarga Node.js desde el sitio oficial:

1.Abre tu navegador y busca "Node.js".

```
Node.js
```

PASO 3: Instalación de Node.js

1.Selecciona el primer resultado y descarga la versión adecuada.
2.Ejecuta el instalador descargado, siguiendo las instrucciones de instalación estándar. (esperamos unos minutos a que se descargue, despues de que ya lo tengamos descargado, lo abrimos y como normalmente se va a instalar algo, empezamos a darle Next a todo y al final sale para instalar).

3.Reiniciamos nuestro computador para que la version si se nos actualice, despues de hacer, volvemos abrir la consola Git Bash, escribimos el primer comando para ver que version tenemos y ya nos deberia salir la version (v20.15.0) y si esto nos sale es que se instalo correctamente nuestra version

PASO 4: Ahora lo que vamos hacer es a instalar demanera global json-server y que nos funcione en todo el computador.

Paso 5: Instalación global de JSON Server

1.Abre tu navegador y busca "JSON Server".
2.Accede al sitio oficial y consulta la sección de instalación.

```
json server
```

3.Ejecuta el siguiente comando en Git Bash para instalar JSON Server globalmente:

```
npm install -g json-server
```

PASO 6: Creación del entorno de trabajo

1.Crea una nueva carpeta llamada "server" desde Git Bash:

```
mkdir server
cd server
```

2.Abre Visual Studio Code en la carpeta recién creada:

```
code .
```

Paso 7: Preparación del archivo JSON
1.Crea un archivo llamado db.json en la carpeta "server".
Copia y pega el contenido del archivo JSON que desees simular o podemos copiar el archio que nos aparece en la pagina, para que sigamos con la explicacion y podamos observar.

```
db.json 
```

Paso 8: Activación de JSON Server
En Git Bash, ejecuta el siguiente comando para activar JSON Server con tu archivo db.json:

```
npx json-server db.json
```

PASO 9: Acceso a JSON Server desde el navegador

1.Abre tu navegador web y visita:

```
localhost:3000
```

2.Aquí podrás ver y interactuar con los datos del archivo JSON simulado.

Aqui podemos visualizar una ventana que dice JSON Server y podemos observar los archivos json que nosotros hemos colocado, le damos click ahi y nos va a mostrar el archivo json

PASO 10: Detener JSON Server
Para detener JSON Server, presiona Ctrl + C en la terminal donde se está ejecutando.

Notas adicionales:
1.Asegúrate de que JSON Server esté activo siempre que desees acceder a los datos simulados.

2.Puedes practicar con diferentes archivos JSON para explorar diversas simulaciones.