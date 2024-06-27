# INSTALAR 

PASO 1: Antes de todo en la consola de Git Bash vamos averificar que version tenemos de Node, vamos a colocar el siguiente comando: 

```
node -v
```

PASO 2: Ya que la version que tenemos que tener es la v20.15.0, si tenemos una version diferente a esta, a continuacion vamos a instalarla, nos dirigimos a nuestro navegador de preferencia y vamos a colocar lo siguiente: 

```
Node.js
```

PASO 3: Le damos en el primero que nos salga, lo abrimos y seguido nos va a salir para descargamos la vesion, lo hacemos y esperamos unos minutos a que se descargue, despues de que ya lo tengamos descargado, lo abrimos y como normalmente se va a instarlar algo, empezamos a darle Next a todo y al final sale para instarlar

Reiniciamos nuestro computador para que la version si se nos actualice, despues de hacer, volvemos abrir la consola Git Bash, escribimos el primer comando para ver que version tenemos y ya nos deberia salir la version (v20.15.0) y esto nos sale, es que se instalo correctamente nuestra version

PASO 4: Ahora lo que vamos hacer es a instalar demanera global json-server y que nos funcione en todo el computador, en nuestro nevagador de preferencia buscamos la siguiente pagina:

```
json server
```

PASO 5: Abrimos la primera que nos salga, para observar diferentes comandos, como podemos observar en la pagina, donde nos sale el comando install, tomamos ese comando, pero a ese comando le tenemos que agregar la -g para que sea global, lo podemos ver en el siguiente comando: 

```
npm install -g json-server
```

PASO 6: vamos a crear una nueva carpeta en nuestra consola de Git Bash que se llame server para poder trabajar bien, depues de que la creemos abrimos nuestro visual 

```
code .
```

PASO 7: vamos a crear un archivo json, en la carpeta que creamos, cuando ya la tengamos creada vamos a copiar el archivo json que nosotros queramos o podemos copiar el archio que nos aparece en la pagina, para que sigamos con la explicacion y podamos observar.

```
db.json 
```

PASO 8: aqui depues de colocar nuestro archivo json vamos a colocar el siguiente comando en Git Bash, para que podamos activar nuestro json-server

```
npx json-server db.json
```

PASO 9: Ahora en nuestro navegador vamos a colocar lo siguiente que esto lo podemos visualizar depues de activar el json-sever

```
localhost:3000
```

Aqui podemos visualizar una ventana que dice JSON Server y podemos observar los archivos json que nosotros hemos colocado, le damos click ahi y nos va a mostrar el archivo json

PASO 10: asi podemos colocar archios json y hacer una simulacion, para apagar nuestro json-server solo le damos (ctrl c), tenemos que verificar que nuestra json-server no este apagada, cuando queremos visualizar un json porque no va a salir

Podemos practicar con diferentes archivos json para que se puedan visualizar 

Ahora vamos hacer 