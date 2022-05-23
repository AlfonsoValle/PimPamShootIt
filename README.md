# PimPamShootIt!

Rusty Game about shooting things. 

![alt text](https://i.gyazo.com/fde17662f78361035c74215621681e50.png "Logo Title Text 1")

Tabla de contenidos o índice

Indicación de las tecnologías empleadas
node, javascript, typescript, css, html.

Imágenes y vídeos

Motivación del proyecto
Me gustaba la idea de imitar un juego clásico de disparos, como el mítico duck hunt de Nintendo.
![alt text](https://i.gyazo.com/a1056036b5fad1c326e503bf54b50fb9.png "Duck Hunt NES")
Quería implementar la detección de clics en pantalla para poder disparar usando el ratón, así como intentar que a partir de la randimización de las dianas, cada partida fuese diferente.


Estructura del proyecto
```
├───📁 docs/
│  
├───📁 public/
│   └───📄 style.css
├───📁 src/
│   ├───📁 actors/
│   │   ├───📄 Actor.ts
│   │   ├───📄 Background.ts
│   │   ├───📄 Clicker.ts
│   │   ├───📄 Dartboard.ts
│   │   └───📄 FPSViewer.ts
│   ├───📁 assets/
│   │   ├───📄 background.png
│   │   ├───📄 dartboard.png
│   │   ├───📄 dartboardPIM.png
│   │   ├───📄 fusi.png
│   │   └───📄 gun.cur
│   ├───📁 state/
│   │   └───📄 DartBoardManager.ts
│   ├───📁 types/
│   │   └───📄 Point.ts
│   └───📄 script.ts
├───📄 .gitignore
├───📄 index.d.ts
├───📄 index.html
├───📄 package-lock.json
├───📄 package.json
├───📄 README.md

```

Acceso directo al juego
[Juega una partida pulsando aquí](https://www.google.com "PimPam ShootIt! Page")

Manual de instalación y deployment

Para instalar el juego solo tienes que acudir al repositorio https://github.com/AlfonsoValle/PimPamShootIt , clonarlo y ejecutar un npm run dev. 

Ejemplos de código

Entornos de ejecución

Variables globales

Listado de paquetes y dependencias

Estadísticas

Licencias

Agradecimientos

Otras consideraciones
