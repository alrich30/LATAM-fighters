# 🥊 LATAM Fighters – TikTok Live Interactive Game  
Juego 2D interactivo donde los espectadores controlan a los peleadores enviando regalos en TikTok Live.  

---

## 🌟 Descripción General

**LATAM Fighters** es un juego de pelea 2D desarrollado en **Phaser 3** y conectado a **TikTok Live** mediante Node.js y WebSockets.  

Los espectadores pueden **interactuar en tiempo real** enviando regalos durante la transmisión, lo que se traduce en acciones dentro del juego:

- 🥋 Golpes  
- 🛡️ Bloqueos  
- 🏃 Movimiento  
- 🔥 Habilidades especiales (dependiendo del gift)

Este proyecto combina **game development**, **real-time systems**, **API/SDK de TikTok Live** y una arquitectura sencilla pero bien organizada.  
Es uno de mis proyectos principales de portafolio debido a su naturaleza **creativa**, **técnica** y **original**.

---

## 🎮 Características Principales

✔ Control del juego mediante regalos de TikTok Live  
✔ Juego 2D completo con escenas: Inicio, Juego y Fin  
✔ WebSockets para comunicación en tiempo real  
✔ Manejo de eventos personalizados (`roseReceived`, `attackReceived`, etc.)  
✔ Arquitectura clara separada entre servidor (Node) y juego (Phaser)  
✔ Sonidos, sprites y animaciones personalizadas  
✔ Diseño listo para streaming en TikTok Live Studio

---

## 🧩 Tecnologías Utilizadas

### **Frontend (Juego)**
- Phaser 3  
- HTML5 Canvas  
- JavaScript (ES6)  

### **Backend (Servidor / TikTok Live)**
- Node.js  
- WebSockets  
- TikTok-Live-Connector (o WebCast API según versión)  

### **Otros**
- Assets personalizados (sprites, sonidos, backgrounds)  
- Arquitectura por escenas  


---

## 🗂️ Estructura del Proyecto

public/
  index.html
  assets/
    img/
    sounds/
    sprites/
    videos/
  src/
    game.js
    scenes/
      StartScene.js
      GameScene.js
      EndScene.js
      

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio
git clone https://github.com/tu-usuario/LATAM-fighters.git

###2️⃣ Instalar dependencias
npm install

###3️⃣ Configurar credenciales de TikTok Live
Crea un archivo .env en la raíz del proyecto:
TIKTOK_USERNAME=TU_USUARIO
TIKTOK_ROOM_ID=LA_ROOM_ID_DE_TU_LIVE

###4️⃣ Ejecutar el servidor
npm start

###5️⃣ Ejecutar el juego
Abre en el navegador:
http://localhost:3000

🧠 Lógica del Juego y Conexión con TikTok

El servidor escucha los regalos enviados en el Live:

```js
socket.on('gift', (data) => {
   if (data.giftName === 'Rose') {
       io.emit('roseReceived');
   }
});
```


Ese evento llega al cliente (Phaser), activando una acción:

```js
socket.on('roseReceived', () => {
   player.moveForward();
});
```


![Screenshot](./public/assets/img/screenshot1.png)
![Screenshot](./public/assets/img/screenshot2.png)


📣 Sobre el Proyecto

Este juego nació como parte de mi interés por:
Desarrollo de videojuegos
Sistemas interactivos
Streaming en tiempo real
Integración con APIs externas
Es uno de mis proyectos favoritos por la mezcla de creatividad + lógica + redes + animación.


🧑‍💻 Autor

Richard Torres
Desarrollador de software
Músico en la Sinfónica Nacional
Estudiante de Ingeniería de Software (ITLA)
GitHub


⭐ Contribuciones

Apreciadas mediante PR o sugerencias.
Este proyecto sirve como demostración técnica y creativa, pero siempre está abierto a mejoras.

