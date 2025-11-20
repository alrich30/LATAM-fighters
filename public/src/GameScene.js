//Arreglar un error de que cuando se manda volando a un peleado y este choca de la pared no se puede mover.
const socket = io.connect('http://localhost:3000');

class GameScene extends Phaser.Scene{

    
    constructor(){
        super({key: "GameScene"})
    }

    preload(){

        this.load.image("background", "sprite_sheets/Background 2.webp");
        this.load.image("mexico logo", "sprite_sheets/Mexico.png");
        this.load.image("argentina logo", "sprite_sheets/argentina.png")
        
        this.load.spritesheet('mexFighter_idle_1', 'sprite_sheets/idle-right-spritesheet-0.png', { frameWidth: 357, frameHeight: 850 });
        this.load.spritesheet('mexFighter_idle_2', 'sprite_sheets/idle-right-spritesheet-1.png', { frameWidth: 357, frameHeight: 850 });
        this.load.spritesheet('mexFighter_idle_3', 'sprite_sheets/idle-right-spritesheet-2.png', { frameWidth: 357, frameHeight: 850 });
        this.load.spritesheet('mexFighter_idle_left_1', 'sprite_sheets/idle-left-spritesheet-0.png', { frameWidth: 357, frameHeight: 850 });
        this.load.spritesheet('mexFighter_idle_left_2', 'sprite_sheets/idle-left-spritesheet-1.png', { frameWidth: 357, frameHeight: 850 });
        this.load.spritesheet('mexFighter_idle_left_3', 'sprite_sheets/idle-left-spritesheet-2.png', { frameWidth: 357, frameHeight: 850 });

        this.load.spritesheet('mexFighter_running_right_1', 'sprite_sheets/running-sprites-right-0.png', { frameWidth: 632, frameHeight: 742 });
        this.load.spritesheet('mexFighter_running_right_2', 'sprite_sheets/running-sprites-right-1.png', { frameWidth: 632, frameHeight: 742 });
        this.load.spritesheet('mexFighter_running_right_3', 'sprite_sheets/running-sprites-right-2.png', { frameWidth: 632, frameHeight: 742 });
        this.load.spritesheet('mexFighter_running_right_4', 'sprite_sheets/running-sprites-right-3.png', { frameWidth: 632, frameHeight: 742 });
        this.load.spritesheet('mexFighter_running_left_1', 'sprite_sheets/running-left-spritesheet-0.png', {frameWidth: 632, frameHeight: 742});
        this.load.spritesheet('mexFighter_running_left_2', 'sprite_sheets/running-left-spritesheet-1.png', {frameWidth: 632, frameHeight: 742});
        this.load.spritesheet('mexFighter_running_left_3', 'sprite_sheets/running-left-spritesheet-2.png', {frameWidth: 632, frameHeight: 742});
        this.load.spritesheet('mexFighter_running_left_4', 'sprite_sheets/running-left-spritesheet-3.png', {frameWidth: 632, frameHeight: 742});


        this.load.spritesheet('mexFighter_combo_right_1', 'sprite_sheets/combo-right-spritesheet-0.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_right_2', 'sprite_sheets/combo-right-spritesheet-1.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_right_3', 'sprite_sheets/combo-right-spritesheet-2.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_right_4', 'sprite_sheets/combo-right-spritesheet-3.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_right_5', 'sprite_sheets/combo-right-spritesheet-4.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_right_6', 'sprite_sheets/combo-right-spritesheet-5.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_right_7', 'sprite_sheets/combo-right-spritesheet-6.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_right_8', 'sprite_sheets/combo-right-spritesheet-7.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_right_9', 'sprite_sheets/combo-right-spritesheet-8.png', {frameWidth: 762, frameHeight: 850});

        this.load.spritesheet('mexFighter_combo_left_1', 'sprite_sheets/combo-left-spritesheet-0.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_left_2', 'sprite_sheets/combo-left-spritesheet-1.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_left_3', 'sprite_sheets/combo-left-spritesheet-2.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_left_4', 'sprite_sheets/combo-left-spritesheet-3.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_left_5', 'sprite_sheets/combo-left-spritesheet-4.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_left_6', 'sprite_sheets/combo-left-spritesheet-5.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_left_7', 'sprite_sheets/combo-left-spritesheet-6.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_left_8', 'sprite_sheets/combo-left-spritesheet-7.png', {frameWidth: 762, frameHeight: 850});
        this.load.spritesheet('mexFighter_combo_left_9', 'sprite_sheets/combo-left-spritesheet-8.png', {frameWidth: 762, frameHeight: 850});

        this.load.spritesheet('mexFighter_gettingHit_right_1', 'sprite_sheets/gettingHit-right-spritesheet-0.png', {frameWidth: 537, frameHeight: 738});
        this.load.spritesheet('mexFighter_gettingHit_right_2', 'sprite_sheets/gettingHit-right-spritesheet-1.png', {frameWidth: 537, frameHeight: 738});
        this.load.spritesheet('mexFighter_gettingHit_right_3', 'sprite_sheets/gettingHit-right-spritesheet-2.png', {frameWidth: 537, frameHeight: 738});
        this.load.spritesheet('mexFighter_gettingHit_left_1', 'sprite_sheets/gettingHit-left-spritesheet-0.png', {frameWidth: 537, frameHeight: 738});
        this.load.spritesheet('mexFighter_gettingHit_left_2', 'sprite_sheets/gettingHit-left-spritesheet-1.png', {frameWidth: 537, frameHeight: 738});
        this.load.spritesheet('mexFighter_gettingHit_left_3', 'sprite_sheets/gettingHit-left-spritesheet-2.png', {frameWidth: 537, frameHeight: 738});

        this.load.spritesheet('mexFighter_fallingDown_right_1', 'sprite_sheets/fallingDown-right-spritesheet-0.png', {frameWidth: 994, frameHeight: 656});
        this.load.spritesheet('mexFighter_fallingDown_right_2', 'sprite_sheets/fallingDown-right-spritesheet-1.png', {frameWidth: 994, frameHeight: 656});
        this.load.spritesheet('mexFighter_fallingDown_right_3', 'sprite_sheets/fallingDown-right-spritesheet-2.png', {frameWidth: 994, frameHeight: 656});
        this.load.spritesheet('mexFighter_fallingDown_right_4', 'sprite_sheets/fallingDown-right-spritesheet-3.png', {frameWidth: 994, frameHeight: 656});
        this.load.spritesheet('mexFighter_fallingDown_left_1', 'sprite_sheets/fallingDown-left-spritesheet-0.png', {frameWidth: 994, frameHeight: 656});
        this.load.spritesheet('mexFighter_fallingDown_left_2', 'sprite_sheets/fallingDown-left-spritesheet-1.png', {frameWidth: 994, frameHeight: 656});
        this.load.spritesheet('mexFighter_fallingDown_left_3', 'sprite_sheets/fallingDown-left-spritesheet-2.png', {frameWidth: 994, frameHeight: 656});
        this.load.spritesheet('mexFighter_fallingDown_left_4', 'sprite_sheets/fallingDown-left-spritesheet-3.png', {frameWidth: 994, frameHeight: 656});

        /*this.load.spritesheet('mexFighter_distanceAttack_right_1', 'sprite_sheets/distanceAttack-right-spritesheet-0.png', {frameWidth: 822, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_right_2', 'sprite_sheets/distanceAttack-right-spritesheet-1.png', {frameWidth: 822, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_right_3', 'sprite_sheets/distanceAttack-right-spritesheet-2.png', {frameWidth: 822, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_right_4', 'sprite_sheets/distanceAttack-right-spritesheet-3.png', {frameWidth: 822, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_right_5', 'sprite_sheets/distanceAttack-right-spritesheet-4.png', {frameWidth: 822, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_right_6', 'sprite_sheets/distanceAttack-right-spritesheet-5.png', {frameWidth: 822, frameHeight: 734});*/

        this.load.spritesheet('mexFighter_distanceAttack_right_1', 'sprite_sheets/distanceAttack-right-spritesheetV2-0.png', {frameWidth: 685, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_right_2', 'sprite_sheets/distanceAttack-right-spritesheetV2-1.png', {frameWidth: 685, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_right_3', 'sprite_sheets/distanceAttack-right-spritesheetV2-2.png', {frameWidth: 685, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_right_4', 'sprite_sheets/distanceAttack-right-spritesheetV2-3.png', {frameWidth: 685, frameHeight: 734});

        this.load.spritesheet('mexFighter_distanceAttack_left_1', 'sprite_sheets/distanceAttack-left-spritesheet-0.png', {frameWidth: 685, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_left_2', 'sprite_sheets/distanceAttack-left-spritesheet-1.png', {frameWidth: 685, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_left_3', 'sprite_sheets/distanceAttack-left-spritesheet-2.png', {frameWidth: 685, frameHeight: 734});
        this.load.spritesheet('mexFighter_distanceAttack_left_4', 'sprite_sheets/distanceAttack-left-spritesheet-3.png', {frameWidth: 685, frameHeight: 734});

        this.load.spritesheet('mexFighter_healthBar', 'sprite_sheets/barraVida-spritesheet.png', {frameWidth: 192, frameHeight: 64});
    
        this.load.spritesheet('energy blast_right', 'sprite_sheets/energyBlast-right-spritesheet.png', {frameWidth: 348, frameHeight: 734});
        this.load.spritesheet('energy blast_left', 'sprite_sheets/energyBlast-left-spritesheet.png', {frameWidth: 348, frameHeight: 734});

        this.load.video('MexicoWins', 'videos/Untitled video - Made with Clipchamp (4).mp4', /*'videos/Endscene Mexico wins.mp4',*/ 'loadeddata', false, true);

        //Audios
        this.load.audio('readyFight', 'sounds/ready-fight-37973.mp3'); // Reemplaza con la ruta de tu archivo
        this.load.audio('punchSounds', 'sounds/punchSounds - Made with Clipchamp (audio-extractor.net).mp3'); 
        this.load.audio('energyBlast', "sounds/esm_8bit_explosion_medium_bomb_boom_blast_cannon_retro_old_school_classic_cartoon.mp3" )
       // this.load.audio('backgroundmusic', "sounds/fight-151125.mp3")
    }

    create(){

        socket.on('connect', () => {  //Verificacion de que se pudo coneectar al servidor websocket local con exito

            console.log('Conectado al servidor WebSockets');

        });

        //Version Redundante

        socket.on('newComment', data => {

            let comment = data.newComment;

            if(comment === 'MEX' || comment === 'ARG' || comment === 'PER' || comment === 'COL'){

                let userId = data.userId;
                const countries = ['MEX', 'ARG', 'PER', 'COL'];

                const updateComment = (array) => {

                for (let country of countries) {

                    for (let i = 0; i < this.id_and_comments[country].length; i++) {

                        if (data.userId === this.id_and_comments[country][i].userId) {

                            this.id_and_comments[country].splice(this.id_and_comments[country][i], 1);
                            console.log(this.id_and_comments)
                        }
                    }
                }

                array.push({ userId: userId, comment: comment });

                };

                // Dependiendo del comentario, actualizamos el array correspondiente
                switch(comment) {
                    case "MEX":
                        updateComment(this.id_and_comments.MEX);
                        break;
                    case "ARG":
                        updateComment(this.id_and_comments.ARG);
                        break;
                    case "PER":
                        updateComment(this.id_and_comments.PER);
                        break;
                    case "COL":
                        updateComment(this.id_and_comments.COL);
                        break;
                }

                console.log(this.id_and_comments);

                } else {

                        const personajes = {
                            MEX: this.personaje1State,
                            ARG: this.personaje2State,
                            COL: this.personaje3State,
                            PER: this.personaje4State // Si tienes más personajes, los puedes agregar aquí
                        };
                    
                        // Función para manejar el movimiento basado en el país y la dirección
                        function activarMovimiento(pais, emoji) {
                            const personaje = personajes[pais];
                            if (personaje) {
                                if (emoji === '\u{1F602}') { // Emoji de "cara con lágrimas de risa"
                                    personaje.direction = "right";
                                } else if (emoji === '\u{1F605}') { // Emoji de "cara sudando"
                                    personaje.direction = "left";
                                }
                                personaje.isRunning = true;
                                personaje.remainingDistance = 200;
                                console.log(`¡'${pais}' seguido del emoji detectado!`);
                            }
                        }

                        function activarComboGolpes(pais){
                            const personaje = personajes[pais];
                            personaje.isPunching = true;
                            console.log(`¡'${pais}' lanzó un ataque a corta distancia!`)
                        }
                        

                        /*function manejarAtaqueADistancia(pais){ /////////////////////////////Codigo importante

                            const personaje = personajes[pais];
                            personaje.fireballsLeft = 1;
                            personaje.isThrowingDistanceAttack = true;
                            console.log(`¡'${pais}' lanzó un ataque a distancia!`);
                        }*/
                    
                        // Expresión regular dinámica para extraer el país y el emoji
                        const regexMovimiento = /^(MEX|ARG|COL|PER)(\u{1F602}|\u{1F605})$/iu;
                        const regexAtaqueCortaDistancia = /^(MEX|ARG|COL|PER)\u{1F601}$/iu; // Emoji para el ataque a distancia
                    
                        // Verifica si el comentario coincide con el movimiento (con los emojis '1F602' o '1F605')
                        const matchMovimiento = comment.match(regexMovimiento);
                        if (matchMovimiento) {
                            const pais = matchMovimiento[1].toUpperCase();
                            const emoji = matchMovimiento[2];
                            activarMovimiento(pais, emoji);
                        }
                    
                        // Verifica si el comentario coincide con el ataque a distancia (con el emoji '1F601')
                        //const matchAtaque = comment.match(regexAtaque);
                        /*if (matchAtaque) {
                            const pais = matchAtaque[1];
                            //manejarAtaqueADistancia(pais);
                        }    */
                        /*const matchAtaque = comment.match(regexAtaque);
                        if(matchAtaque){
                            const pais = matchAtaque[1].toUpperCase();
                            manejarAtaqueADistancia(pais);
                        }*/
                        const matchAtaqueCortaDistancia = comment.match(regexAtaqueCortaDistancia);
                        if(matchAtaqueCortaDistancia){
                            const pais = matchAtaqueCortaDistancia[1].toUpperCase();
                            activarComboGolpes(pais);
                        }
                        
                }

        });


        /*const moveFighter = (data, direction) => {
            const countries = ['MEX', 'ARG', 'PER', 'COL'];
        
            const selectFighterToMove = (personajeState) => {
                for (let country of countries) {
                    for (let i = 0; i < this.id_and_comments[country].length; i++) {
                        if (data.uniqueId === this.id_and_comments[country][i].userId) {
                            if (this.id_and_comments[country][i].comment === personajeState.country) {
                                personajeState.remainingDistance = data.numberOfGifts * 100;
                                personajeState.isRunning = true;
                                personajeState.direction = direction; // Definimos la dirección
                                personajeState.commentsCounterActivation = true;
                                console.log(`Iniciando movimiento hacia ${direction} por ${personajeState.remainingDistance} píxeles.`);
                                this.id_and_comments[country].splice(i, 1); // Corregido, el índice es 'i'
                            }
                        }
                    }
                }
            };
        
            selectFighterToMove(this.personaje1State);
            selectFighterToMove(this.personaje2State);
            console.log(this.id_and_comments);
        };*/
        
        //Usamos la función genérica en los eventos
        /*socket.on('Rose', data => {
            moveFighter(data, "right"); // Movemos a la derecha con la rosa
        });*/
        
       /* socket.on('White rose', data => {
            moveFighter(data, "left"); // Movemos a la izquierda con la rosa blanca
        });*/

        /*socket.on('Music play', data => {

            const countries = ['MEX', 'ARG', 'PER', 'COL'];

            const selectFighterToJump = (personajeState) => {
                for (let country of countries) {
                    for (let i = 0; i < this.id_and_comments[country].length; i++) {
                        if (data.uniqueId === this.id_and_comments[country][i].userId) {
                            if (this.id_and_comments[country][i].comment === personajeState.country) {
                                personajeState.remainingYDistance = 100;
                                personajeState.isJumping = true;      
                                console.log(`Iniciando salto de ${personajeState.remainingYDistance} píxeles.`);             
                                this.id_and_comments[country].splice(i, 1); // Corregido, el índice es 'i'
                            }
                        }
                    }
                }
            }

            selectFighterToJump(this.personaje1State);
            selectFighterToJump(this.personaje2State);
            console.log(this.id_and_comments);
        });*/

        /*socket.on('Rose' , data => {/////////////////////////////////////////////////////////////////////////////////////codigo importante y util

            const countries = ['MEX', 'ARG', 'PER', 'COL'];

            const selectFighterToPunch = (personajeState) => {
                for (let country of countries) {
                    for (let i = 0; i < this.id_and_comments[country].length; i++) {
                        if (data.uniqueId === this.id_and_comments[country][i].userId) {
                            if (this.id_and_comments[country][i].comment === personajeState.country) {
                                personajeState.punchesLeft =  data.numberOfGifts;
                                personajeState.isPunching = true;      
                                console.log(`Iniciando movimiento de ${personajeState.punchesLeft} golpes`);            
                                this.id_and_comments[country].splice(i, 1); // Corregido, el índice es 'i'
                            }
                        }
                    }
                }
            }

            selectFighterToPunch(this.personaje1State);
            selectFighterToPunch(this.personaje2State);
            console.log(this.id_and_comments);

        });*/


        socket.on('Rose', data => {

            
            const selectFighterToActivateDistanceAttack = (personajeState) => {
                personajeState.energyBlastCount =  data.numberOfGifts;
                personajeState.isThrowingDistanceAttack = true;      
                console.log(`Lanzando ${personajeState.energyBlastCount} bolas de fuego`);        
                //this.id_and_comments[country].splice(i, 1); // Corregido, el índice es 'i'
            }
            
            selectFighterToActivateDistanceAttack(this.personaje1State);
            //selectFighterToActivateDistanceAttack(this.personaje2State);
        });

        socket.on('White rose', data => {

            
            const selectFighterToActivateDistanceAttack = (personajeState) => {
                personajeState.energyBlastCount =  data.numberOfGifts;
                personajeState.isThrowingDistanceAttack = true;      
                console.log(`Lanzando ${personajeState.energyBlastCount} bolas de fuego`);        
                //this.id_and_comments[country].splice(i, 1); // Corregido, el índice es 'i'
            }
            
            selectFighterToActivateDistanceAttack(this.personaje2State);
            //selectFighterToActivateDistanceAttack(this.personaje2State);
        });

        
        this.personaje1State = {

            runningIsOn: false,
            comboIsOn: false,
            fallingIsOn: false,
            gettingHittedIsOn: false,
            distanceAttackIsOn: false,
            gotHitted: false,

            direction: 'right',
            isAllowedToMove: true,
            secondsBetweenEnergyBlastTimer: 80
        
        


         //Salud de los peleadores
        /*health: 100,
        country: 'MEX',

        //Estados en los que pueden estar los peleadores
        wasKicked: false,
        gotKnockedOut: false,
        isHittable: true,
        isOnAir: false,
        isAllowedToMove: true,
        isMoving: false,
        isFalling: false, 

         //Direccion en la que pueden estar los peleadores
        direction: "right",

         //contadores 
        remainingDistance: 0,
        timer: 0,
        stepsCounter: 0,
        commentsCounter: 0,
        fireballsLeft: 0*/
        };

        this.personaje2State = {

           //New update variables

           runningIsOn: false,
           comboIsOn: false,
           fallingIsOn: false,
           gettingHittedIsOn: false,
           distanceAttackIsOn:  false,
           gotHitted: false,

           direction: 'left',
           isAllowedToMove: true,
           secondsBetweenEnergyBlastTimer: 80

            //Salud de los peleadores
           /* health: 100,
            country: 'ARG',

            //Estados en los que pueden estar los peleadores
            //willGetHitByFireball: false,
            wasKicked: false,
            gotKnockedOut: false,
            isHittable: true,
            isOnAir: false,
            isAllowedToMove: true,
            isMoving: false,
            isFalling: false, 

            //Direccion en la que pueden estar los peleadores
            direction: "left",
        
            
            //contadores
            remainingDistance: 0, 
            timer: 0,
            stepsCounter: 0,
            commentsCounter: 0,
            fireballsLeft: 0*/
        };
        
        //Backgrounds y personajes
        const canvasWidth = this.sys.game.config.width;  // Ancho del canvas
        const canvasHeight = this.sys.game.config.height; // Alto del canvas

        const bg = this.add.image(canvasWidth / 2, canvasHeight / 2, 'background');
        bg.setOrigin(0.5, 0.5);  // Establecer el origen al centro de la imagen

        // Agregar el audio
        /*const music = this.sound.add('backgroundmusic', {
            volume: 0.05, // Ajusta el volumen
            loop: true,  // Habilita el loop
        });*/
        // Reproducir el audio
        //music.play();

        this.peleador1 = this.physics.add.sprite(400, 600, 'idle_right').setScale(.8)
        //this.peleador1 = this.physics.add.sprite(150,325,'fighter') //Codigo de prueba
        this.peleador2 = this.physics.add.sprite(1200, 600, 'idle_left').setScale(.8)
        //this.peleador1 = this.physics.add.sprite(500, 600, 'mexFighter_standing')//.setScale(.8)
        //this.peleador1 = this.add.image(500, 600, 'fighter1Frame').setScale(.75)
         // Crear la barra de vida como un sprite
        this.healthBar1 = this.physics.add.sprite(375, 100, 'mexFighter_healthBar').setScale(2)
        this.healthBar2 = this.physics.add.sprite(1125, 100, 'mexFighter_healthBar').setScale(2)
        const mexicoLogo = this.add.image(230, 100, 'mexico logo').setScale(.7)
        const argentinaLogo = this.add.image(980, 100, 'argentina logo').setScale(.7)

        this.peleador1.setCollideWorldBounds(true);
        this.peleador2.setCollideWorldBounds(true);

        this.physics.world.on('worldbounds', (body) => {
            if (body.gameObject === this.fireballs[this.fireballs.length - 1]) {
                let currentEnergyBlast = this.fireballs[this.fireballs.length - 1]
                this.fireballs.splice(this.fireballs.length - 1 , 1); 
                console.log(this.fireballs.length)
                currentEnergyBlast.anims.resume()
                currentEnergyBlast.energyBlastIsOn = true
                this.sound.play('energyBlast', { volume: 1 });

                currentEnergyBlast.on('animationcomplete', (animation) =>{

                    if((animation.key === 'blast explosion_right' || animation.key === 'blast explosion_left') && currentEnergyBlast.energyBlastIsOn){
                        console.log("energy blast eliminada")
                        currentEnergyBlast.destroy()
                        currentEnergyBlast.energyBlastIsOn = false
                        
                    }
               })
            }

            
        });

        this.peleador1.body.setSize(357,850);
        this.peleador2.body.setSize(357,850)
        //this.peleador1.body.setOffset(25, 30);
        //this.peleador2.body.setSize(125,420);
        //this.peleador2.body.setOffset(25,30);

        //Ajustar colisiones con los bordes del canva pero hacer que las colisiones no hagan mover a los peleadores
        this.physics.world.setBoundsCollision(true, true, true, true);
        this.peleador1.setImmovable(true)
        this.peleador2.setImmovable(true)
        this.peleador1.health = 100;
        this.peleador2.health = 100;

        const animationDetails = {
            healthBar: {
                frames: [
                    {key: 'mexFighter_healthBar', start: 0, end: 10}
                ],
                frameRate: 0,
                repeat: 0
            },
            idle_right: {
                frames: [
                    { key: 'mexFighter_idle_1', start: 0, end: 9 },
                    { key: 'mexFighter_idle_2', start: 0, end: 9 },
                    { key: 'mexFighter_idle_3', start: 0, end: 9 }
                ],
                frameRate: 8,
                repeat: -1
            },
            idle_left: {
                frames: [
                    { key: 'mexFighter_idle_left_1', start: 0, end: 9 },
                    { key: 'mexFighter_idle_left_2', start: 0, end: 9 },
                    { key: 'mexFighter_idle_left_3', start: 0, end: 9 }
                ],
                frameRate: 8,
                repeat: -1
            },
            run: {
                frames: [
                    { key: 'mexFighter_running_right_1', start: 0, end: 5 },
                    { key: 'mexFighter_running_right_2', start: 0, end: 5 },
                    { key: 'mexFighter_running_right_3', start: 0, end: 5 },
                    { key: 'mexFighter_running_right_4', start: 0, end: 1 }
                ],
                frameRate: 25,
                repeat: -1
            },
            run_left: {
                frames: [
                    { key: 'mexFighter_running_left_1', start: 0, end: 5 },
                    { key: 'mexFighter_running_left_2', start: 0, end: 5 },
                    { key: 'mexFighter_running_left_3', start: 0, end: 5 },
                    { key: 'mexFighter_running_left_4', start: 0, end: 1 }
                ],
                frameRate: 25,
                repeat: -1
            },
            punch: {
                frames: [
                    { key: 'mexFighter_combo_right_1', start: 0, end: 3 },
                    { key: 'mexFighter_combo_right_2', start: 0, end: 3 },
                    { key: 'mexFighter_combo_right_3', start: 0, end: 3 },
                    { key: 'mexFighter_combo_right_4', start: 0, end: 3 },
                    { key: 'mexFighter_combo_right_5', start: 0, end: 3 },
                    { key: 'mexFighter_combo_right_6', start: 0, end: 3 },
                    { key: 'mexFighter_combo_right_7', start: 0, end: 3 },
                    { key: 'mexFighter_combo_right_8', start: 0, end: 3 },
                    { key: 'mexFighter_combo_right_9', start: 0, end: 2 }
                ],
                frameRate: 20,
                repeat: 0
            },
            punch_left: {
                frames: [
                    { key: 'mexFighter_combo_left_1', start: 0, end: 3 },
                    { key: 'mexFighter_combo_left_2', start: 0, end: 3 },
                    { key: 'mexFighter_combo_left_3', start: 0, end: 3 },
                    { key: 'mexFighter_combo_left_4', start: 0, end: 3 },
                    { key: 'mexFighter_combo_left_5', start: 0, end: 3 },
                    { key: 'mexFighter_combo_left_6', start: 0, end: 3 },
                    { key: 'mexFighter_combo_left_7', start: 0, end: 3 },
                    { key: 'mexFighter_combo_left_8', start: 0, end: 3 },
                    { key: 'mexFighter_combo_left_9', start: 0, end: 2 }    
                ],
                frameRate: 20,
                repeat: 0
            },
            getting_hit_right: {
                frames: [
                    { key: 'mexFighter_gettingHit_right_1', start: 0, end: 5 },
                    { key: 'mexFighter_gettingHit_right_2', start: 0, end: 5 },
                    { key: 'mexFighter_gettingHit_right_3', start: 0, end: 3 }
                ],
                frameRate: 25,
                repeat: 0
            },
            getting_hit_left: {
                frames: [
                    { key: 'mexFighter_gettingHit_left_1', start: 0, end: 5 },
                    { key: 'mexFighter_gettingHit_left_2', start: 0, end: 5 },
                    { key: 'mexFighter_gettingHit_left_3', start: 0, end: 3 }
                ],
                frameRate: 25,
                repeat: 0
            },
            fall_right: {
                frames: [
                    { key: 'mexFighter_fallingDown_right_1', start: 0, end: 5 },
                    { key: 'mexFighter_fallingDown_right_2', start: 0, end: 5},
                    { key: 'mexFighter_fallingDown_right_3', start: 0, end: 5},
                    { key: 'mexFighter_fallingDown_right_4', start: 0, end: 1},
                ],
                frameRate: 25,
                repeat: 0
            },
            fall_left: {
                frames: [
                    { key: 'mexFighter_fallingDown_left_1', start: 0, end: 5 },
                    { key: 'mexFighter_fallingDown_left_2', start: 0, end: 5},
                    { key: 'mexFighter_fallingDown_left_3', start: 0, end: 5},
                    { key: 'mexFighter_fallingDown_left_4', start: 0, end: 1},
                ],
                frameRate: 25,
                repeat: 0
            },
            'distance attack_right': {
                frames: [
                    { key: 'mexFighter_distanceAttack_right_1', start: 0, end: 3 },
                    { key: 'mexFighter_distanceAttack_right_2', start: 0, end: 3},
                    { key: 'mexFighter_distanceAttack_right_3', start: 0, end: 3},
                    { key: 'mexFighter_distanceAttack_right_4', start: 0, end: 2},
                    /*{ key: 'mexFighter_distanceAttack_right_5', start: 0, end: 3},
                    { key: 'mexFighter_distanceAttack_right_6', start: 0, end: 1},*/
                ],
                frameRate: 15,
                repeat: 0
            },
            'distance attack_left': {
                frames: [
                    { key: 'mexFighter_distanceAttack_left_1', start: 0, end: 3 },
                    { key: 'mexFighter_distanceAttack_left_2', start: 0, end: 3},
                    { key: 'mexFighter_distanceAttack_left_3', start: 0, end: 3},
                    { key: 'mexFighter_distanceAttack_left_4', start: 0, end: 2},
                    /*{ key: 'mexFighter_distanceAttack_right_5', start: 0, end: 3},
                    { key: 'mexFighter_distanceAttack_right_6', start: 0, end: 1},*/
                ],
                frameRate: 15,
                repeat: 0
            },
            'blast explosion_right':{
                frames: [
                    {key: 'energy blast_right', start: 0, end: 6}
                ],
                frameRate: 25,
                repeat: 0
            },
            'blast explosion_left':{
                frames: [
                    {key: 'energy blast_left', start: 0, end: 6}
                ],
                frameRate: 25,
                repeat: 0
            }
        }
    
        Object.entries(animationDetails).forEach(([key, { frames, frameRate, repeat }]) => {
            this.anims.create({
                key,
                frames: frames.flatMap(({ key, start, end }) =>
                    this.anims.generateFrameNumbers(key, { start, end })
                ),
                frameRate,
                repeat
            });
        });
        
        //Funcionalidades para las acciones de los personajes.
        this.comboStage_personaje1 = 0;
        this.comboStage_personaje2 = 0;
        //this.fireballsLeft = 0;
        this.fireballs = [];
        this.diludedFireball = [];
        this.punchValidator;
        this.distanceAttackValidator;
        this.deteccionActiva = true;
        this.movementStep = 5;
        this.id_and_comments = {MEX: [], ARG: [], PER: [], COL: []}
        this.secondsElapsed = 0;

        this.idleAnimationPlayer(this.peleador1, this.personaje1State);
        this.idleAnimationPlayer(this.peleador2, this.personaje2State);
        this.gettingHittedColliderActivator(this.peleador1, this.peleador2, this.personaje2State, this.healthBar2);
        this.gettingHittedColliderActivator(this.peleador2, this.peleador1,this.personaje1State, this.healthBar1);
        this.gettingEnergyBlastedColliderActivator(this.fireballs, this.peleador2, this.personaje2State, this.healthBar2);
        this.gettingEnergyBlastedColliderActivator(this.fireballs, this.peleador1, this.personaje1State, this.healthBar1);
        //this.gettingEnergyBlastedColliderActivator(this.fireballs, this.peleador1, this.personaje1State, this.healthBar1);
        this.updateHealthBar(this.peleador1, this.healthBar1);
        this.updateHealthBar(this.peleador2,this.healthBar2);
        
    }
    //Este metodo se activa unas 60 veces por segundo siempre y util para llamar otros metodos que permiten el movimiento y cambios de imagenes, dando la percepcion de que se
    //se mueven de manera fluida.  
    update(){

        this.correr(this.peleador1, this.personaje1State);
        this.correr(this.peleador2, this.personaje2State);

        this.golpear(this.peleador1, this.peleador2, this.personaje1State, this.personaje2State)
        this.golpear(this.peleador2, this.peleador1, this.personaje2State, this.personaje1State)

        this.distanceAttack(this.peleador2, this.personaje2State)
        this.distanceAttack(this.peleador1, this.personaje1State)

        this.gettingHitted(this.peleador2, this.peleador1, this.personaje2State, this.personaje1State)
        this.gettingHitted(this.peleador1,this.peleador2,this.personaje1State, this.personaje2State)

       /* this.golpear(this.peleador1, this.peleador2, this.keyJ, this.personaje1State, this.personaje2State)
        this.golpear(this.peleador2, this.peleador1, this.key4, this.personaje2State, this.personaje1State)

        this.distanceAttack(this.peleador2, this.key5, this.personaje2State)
        this.distanceAttack(this.peleador1, this.keyK, this.personaje1State)

        this.gettingHitted(this.peleador2, this.peleador1, this.personaje2State, this.personaje1State)
        this.gettingHitted(this.peleador1,this.peleador2,this.personaje1State, this.personaje2State)*/

        //this.golpear(this.peleador1, this.peleador2, this.personaje1State, this.personaje2State);
        //this.golpear(this.peleador2, this.peleador1, this.personaje2State, this.personaje1State);

        /*this.commentsCounterFunc(this.personaje1State);
        this.commentsCounterFunc(this.personaje2State);*/

         // Verificar salud y cambiar a EndScene
    if (this.peleador1.health < 0) {
        this.scene.start('EndScene', { winner: 'Mexico' });
    } else if (this.peleador2.health < 0) {
        this.scene.start('EndScene', { winner: 'Mexico' });
    }

    }

    idleAnimationPlayer(peleador, personajeState){
    

        if(personajeState.direction === "right"){   //Probablemente esta condicional no sea necesaria

            /*if(!personajeState.idleActivation){
                console.log('Activando la animacion Idle al cargar el juego por primera vez')
                peleador.anims.play('idle_right', true)
                personajeState.idleActivation = true;
                console.log(peleador.y)
                //console.log(peleador.x)
                personajeState.isAllowedToMove = true
            }*/
            console.log('Animacion Idle_right siendo activada cuando sea invocado este metodo.')
            //console.log(peleador.y)
            //peleador.anims.play('healthBar', true) 
            peleador.anims.play('idle_right', true)
            console.log(peleador.y)
            //console.log(peleador.y)
            peleador.setSize(230,850)
            peleador.body.setOffset(50,50)
            //console.log(peleador.x)
            personajeState.isAllowedToMove = true
            personajeState.isAllowedToPunch = true
            personajeState.isAllowedToThrowDistanceAttacks = true
            
        }
        if(personajeState.direction === "left"){  //Probablemente esta condicional no sea necesaria

            /*if(!personajeState.idleActivation){
                console.log('Activando la animacion Idle al cargar el juego por primera vez')
                peleador.anims.play('idle_left', true)
                personajeState.idleActivation = true;
                console.log(peleador.y)
                //console.log(peleador.x)
                personajeState.isAllowedToMove = true
            }*/
            console.log('Animacion Idle_left siendo activada cuando sea invocado este metodo.')
            //console.log(peleador.y)
            peleador.anims.play('idle_left', true) 
            console.log(peleador.y)
            peleador.setSize(230,850)                           //Probablemente deba sacar esto y ponerlo en cada metodo por separado
            peleador.body.setOffset(80,50)                      //Probablemente deba sacar esto y ponerlo en cada metod opor separado
            //console.log(peleador.x)
            personajeState.isAllowedToMove = true
            personajeState.isAllowedToPunch = true
            personajeState.isAllowedToThrowDistanceAttacks = true
        }
    }

    //idleAnimationPlayer(peleador, personajeState){
    

        /*if(!personajeState.isIdleOn){
            console.log('Activando la animacion Idle al cargar el juego por primera vez')
            peleador.anims.play('idle', true)
            personajeState.isIdleOn = true;
        }
        console.log('Animacion Idle siendo activada cuando sea invocado este metodo.')
        peleador.anims.play('idle', true) 
    }*/

    /*commentsCounterFunc(personajeState){

        if(personajeState.commentsCounterActivation){
    
            personajeState.commentsCounter++;
    
            if(personajeState.commentsCounter >= 300){
    
                // Verificamos si hay elementos en el array para eliminar de this.userCommentsCopy
                if (this.userCommentsCopy.MEX.length > 0) {
                    this.userCommentsCopy.MEX.shift(); // Elimina el primer elemento de MEX
                } else if (this.userCommentsCopy.ARG.length > 0) {
                    this.userCommentsCopy.ARG.shift(); // Elimina el primer elemento de ARG
                } else if (this.userCommentsCopy.PER.length > 0) {
                    this.userCommentsCopy.PER.shift(); // Elimina el primer elemento de PER
                } else if (this.userCommentsCopy.COL.length > 0) {
                    this.userCommentsCopy.COL.shift(); // Elimina el primer elemento de COL
                }
    
                personajeState.commentsCounterActivation = false; // Desactivamos el contador
                personajeState.commentsCounter = 0; // Reiniciamos el contador
            }
        }*/
    //}
    
    gettingHittedColliderActivator(peleadorAtacante, peleadorAtacado, atacadoState, healthBar){

        this.physics.add.collider(
            peleadorAtacante,
            peleadorAtacado,
            () => {
                console.log("El ataque hizo contacto!");

                /*if(peleadorAtacado.anims.currentAnim?.key === 'punch' || peleadorAtacado.anims.currentAnim?.key === 'punch_left'){
                    peleadorAtacado.setY(peleadorAtacado - 76.5)
                }*/
                console.log(peleadorAtacado.y)
                
                if(peleadorAtacado.anims.currentAnim?.key === 'punch' || peleadorAtacado.anims.currentAnim?.key === 'punch_left') {
                    peleadorAtacado.setY(peleadorAtacado.y + 76.5)
                    console.log('Posicion "Y" de gettingHittedColliderActivator ajustada 1')
                } else if(peleadorAtacado.anims.currentAnim?.key !== 'distance attack_right' || peleadorAtacado.anims.currentAnim?.key !== 'distance attack_left'){
                    peleadorAtacado.setY(peleadorAtacado.y + 46.5)
                    console.log('Posicion "Y" gettingHittedColliderActivator ajustada 2')
                } /*else if(peleadorAtacado.anims.currentAnim?.key === 'run' || peleadorAtacado.anims.currentAnim?.key === 'run_left'){
                    console.log('Posicion "Y" gettingHittedColliderActivator ajustada 3')
                    atacadoState.isRunning = false
                    atacadoState.remainingDistance = 300
                }*/
                atacadoState.direction === "right"? peleadorAtacado.anims.play('getting_hit_right') : peleadorAtacado.anims.play('getting_hit_left') //Por alguina maldita razon que no chequeare ahora, esta condicional solo funciona bien al estar inversa
                atacadoState.direction === "right"? peleadorAtacado.anims.chain('fall_right',true) : peleadorAtacado.anims.chain('fall_left',true)
                
                

                //console.log(peleadorAtacado.y)
                peleadorAtacado.setSize(500,800) 
                //peleadorAtacado.setScale(.85) // Hay que ver si es necesario
                //atacadoState.gettingHittedIsOn = true
                atacadoState.gettingHittedAndFallingIsOn = true;  //Activador del gettingHit and falling
                //atacadoState.fallingIsOn = true;
                peleadorAtacado.health = peleadorAtacado.health - 10
                this.updateHealthBar(peleadorAtacado, healthBar)
                this.sound.play('punchSounds', { volume: 1 });
                atacadoState.isAllowedToMove = false
                atacadoState.isAllowedToPunch = false
                atacadoState.isAllowedToThrowDistanceAttacks = false
            },
            (peleadorAtacante, peleadorAtacado) => {

                return (peleadorAtacante.anims.currentAnim?.key === 'punch' || peleadorAtacante.anims.currentAnim?.key === 'punch_left') && peleadorAtacante.anims.currentFrame.index === 12 &&
                peleadorAtacado.anims.currentAnim?.key !== 'getting_hit_left' && peleadorAtacado.anims.currentAnim?.key !== 'getting_hit_right'
            },
            this
        );
   }

   


   gettingEnergyBlastedColliderActivator(energyBlasts ,peleadorAtacado, atacadoState, healthBar){
        
        this.physics.add.collider(
            energyBlasts,
            peleadorAtacado,
            () => {
                //console.log("La energy blast ha hecho contacto con el target")

                let currentEnergyBlast = energyBlasts[energyBlasts.length - 1]
                energyBlasts.splice(energyBlasts.length - 1 , 1); 
                console.log(energyBlasts)
                currentEnergyBlast.anims.resume()
                currentEnergyBlast.energyBlastIsOn = true
                this.sound.play('energyBlast', { volume: 1 });
                if(peleadorAtacado.anims.currentAnim?.key === 'punch' || peleadorAtacado.anims.currentAnim?.key === 'punch_left') {
                    peleadorAtacado.setY(peleadorAtacado.y + 76.5)
                    console.log('Posicion "Y" de gettingEnergyBlastedColliderActivator ajustada 1')
                } else if(peleadorAtacado.anims.currentAnim?.key !== 'distance attack_right' || peleadorAtacado.anims.currentAnim?.key !== 'distance attack_left'){
                    peleadorAtacado.setY(peleadorAtacado.y + 46.5)
                    console.log('Posicion "Y" de gettingEnergyBlastedColliderActivator ajustada 2')
                }
                //atacadoState.isAllowedToMove = false
                atacadoState.direction === "right"? peleadorAtacado.anims.play('getting_hit_right') : peleadorAtacado.anims.play('getting_hit_left') //Por alguina maldita razon que no chequeare ahora, esta condicional solo funciona bien al estar inversa
                peleadorAtacado.setSize(229,340) 
                peleadorAtacado.setScale(.85) 
                atacadoState.gettingHittedIsOn = true;  //Activador del gettinghit
                peleadorAtacado.health = peleadorAtacado.health - 10
                this.updateHealthBar(peleadorAtacado, healthBar)
                atacadoState.isAllowedToMove = false
                atacadoState.isAllowedToPunch = false
                atacadoState.isAllowedToThrowDistanceAttacks = false

                currentEnergyBlast.on('animationcomplete', (animation) =>{

                    if((animation.key === 'blast explosion_right' || animation.key === 'blast explosion_left') && currentEnergyBlast.energyBlastIsOn){
                        console.log("energy blast eliminada")
                        currentEnergyBlast.destroy()
                        currentEnergyBlast.energyBlastIsOn = false
                        
                    }
               })
            },
            (energyBlast, peleadorAtacado) => {

                return (energyBlast.anims.currentAnim?.key === 'blast explosion_right' || energyBlast.anims.currentAnim?.key === 'blast explosion_left') && energyBlast.anims.currentFrame.index === 1 && 
                peleadorAtacado.anims.currentAnim?.key !== 'getting_hit_left' && peleadorAtacado.anims.currentAnim?.key !== 'getting_hit_right'    //Ahi que tener en cuenta que si el peleador atacado no ha vuelto a idle antes de que otra energy
                                                                                                                                                    //blast colisione, la energy blast puede traspasar al peleador atacado
            }
        );
   }

    correr(peleador, personajeState) {

        if(personajeState.isRunning){

            //let movementStep = 5;

            if (/*keyboardkeyRight.isDown &&*/ personajeState.remainingDistance > 0 && personajeState.isAllowedToMove && personajeState.direction === 'right') {

                peleador.x += this.movementStep;
                personajeState.remainingDistance -= this.movementStep
                //peleador.setVelocityX(300);

                if (peleador.anims.currentAnim?.key !== 'run') {
                
                    console.log('peleador corriendo a la derecha')
                    peleador.anims.play('run', true);
                    peleador.body.setSize(632, 742)
                    personajeState.runningIsOn = true   
                    personajeState.direction = "right" 
                    personajeState.isAllowedToPunch = false 
                    personajeState.isAllowedToThrowDistanceAttacks = false                          
                }
            /*if(personajeState.remainingDistance < 0 && runningIsOn){

                personajeState.runningIsOn = false;
                peleador.anims.play('idle_right', true);
            }*/

            } else if (personajeState.remainingDistance > 0 && personajeState.isAllowedToMove && personajeState.direction === 'left') {

                //peleador.x -= movementStep;
                //peleador.setVelocityX(-300);
                peleador.x -= this.movementStep;
                personajeState.remainingDistance -= this.movementStep

                if (peleador.anims.currentAnim?.key !== 'run_left') {

                    console.log('peleador corriendo a la izquierda')
                    peleador.anims.play('run_left', true);
                    peleador.body.setSize(632, 742)
                    personajeState.runningIsOn = true
                    personajeState.direction = "left"
                    personajeState.isAllowedToPunch = false 
                    personajeState.isAllowedToThrowDistanceAttacks = false
                }
            }

            else if(personajeState.remainingDistance <= 0) {

                console.log('Fin del metodo "correr"')
                personajeState.isRunning = false
                this.idleAnimationPlayer(peleador, personajeState) 
                personajeState.remainingDistance = 300
            }
        }
        
    }
    //pre-update version ___________________________________________________________________________________________________
    
    /*correr(peleador, personajeState) {

        if (personajeState.isRunning ) {

            let movementStep = 5; // Definimos cuántos píxeles se mueve en cada ciclo
            
            if (personajeState.remainingDistance > 0 && personajeState.direction === "right") {
                //personajeState.stepsCounter += 1;
                peleador.x += movementStep; // Movemos el personaje
                personajeState.remainingDistance -= movementStep; // Reducimos la distancia restante

                if (peleador.anims.currentAnim?.key !== 'run') {
                
                    console.log('peleador corriendo a la derecha')
                    peleador.anims.play('run', true);
                    peleador.body.setSize(210, 350)
                    personajeState.runningIsOn = true                               
                }
                
            } else if(personajeState.remainingDistance > 0 && personajeState.direction === "left"){
                

                //personajeState.stepsCounter += 1;
                peleador.x -= movementStep; // Movemos el personaje
                personajeState.remainingDistance -= movementStep; // Reducimos la distancia restante

                if (peleador.anims.currentAnim?.key !== 'run_left') {
                    console.log('peleador corriendo a la izquierda')
                    peleador.anims.play('run_left', true);
                    peleador.body.setSize(210, 350)
                    personajeState.runningIsOn = true
                }

            } else {
                personajeState.isRunning = false; // Detenemos el movimiento cuando haya recorrido la distancia
                //personajeState.direction === "right"? peleador.setTexture(personajeState.staticPositionRight.name) : peleador.setTexture(personajeState.staticPositionLeft.name);
                this.idleAnimationPlayer(peleador,personajeState)
                peleador.setSize(125,420)
                peleador.body.setOffset(25,30)
                console.log('Movimiento completado.');
            }
        }
    }*/
    //pre-update version _________________________________________________________________________________________________________

    /*correr(peleador, personajeState) {

        if (personajeState.isRunning && !personajeState.isOnAir) {

            let movementStep = 5; // Definimos cuántos píxeles se mueve en cada ciclo
            
            if (personajeState.remainingDistance > 0 && personajeState.direction === "right") {

                personajeState.stepsCounter += 1;
                peleador.x += movementStep; // Movemos el personaje
                personajeState.remainingDistance -= movementStep; // Reducimos la distancia restante
                
                switch (personajeState.stepsCounter) {
                    case 1: 
                        peleador.setTexture(personajeState.runningRight1.name);
                        break;
                    case 10: 
                        peleador.setTexture(personajeState.runningRight2.name);
                        break;
                    case 20: 
                        personajeState.stepsCounter = 0;
                        break; // Aunque el contador se reinicie, es una buena práctica cerrar con 'break'
                }
            
            } else if(personajeState.remainingDistance > 0 && personajeState.direction === "left"){

                personajeState.stepsCounter += 1;
                peleador.x -= movementStep; // Movemos el personaje
                personajeState.remainingDistance -= movementStep; // Reducimos la distancia restante

                switch (personajeState.stepsCounter) {

                    case 1: 
                        peleador.setTexture(personajeState.runningLeft1.name);
                        break;
                    case 10: 
                        peleador.setTexture(personajeState.runningLeft2.name);
                        break;
                    case 20: 
                        personajeState.stepsCounter = 0;
                        break; // Aunque el contador se reinicie, es una buena práctica cerrar con 'break'
                }
            } else {
                personajeState.isRunning = false; // Detenemos el movimiento cuando haya recorrido la distancia
                personajeState.direction === "right"? peleador.setTexture(personajeState.staticPositionRight.name) : peleador.setTexture(personajeState.staticPositionLeft.name);
                console.log('Movimiento completado.');
            }
        }
    }*/


 //pre updated Golpe____________________________________________________________________________________________________________________________________
    
 /*golpear(peleadorAtacante, peleadorAtacado, atacanteState, atacadoState){

        if(atacanteState.isPunching && peleadorAtacante.anims.currentAnim?.key !== 'punch'){

            console.log('La animacion "punch" ha comenzado')
            atacanteState.comboIsOn = true
            peleadorAtacante.anims.play('punch', true)  
            peleadorAtacante.setSize(360,400)
            peleadorAtacante.body.setOffset(20,50)

        peleadorAtacante.on('animationupdate', (animation,frame) => {
        
            if (animation.key === 'punch' && frame.index === 12 && !this.punchValidator){

                console.log('El peleador atacante ha echo contacto con el jab')
                atacadoState.gotHitted = true
                this.punchValidator = true
            }
        })
        peleadorAtacante.on('animationcomplete', (animation, frame) => {

            if (animation.key === 'punch' && atacanteState.comboIsOn) {

                   console.log('La animación "punch" ha terminado');
                   //peleador.setScale(.8)
                   //console.log(peleadorAtacante.y)
                   this.idleAnimationPlayer(peleadorAtacante, atacanteState)    //Disparidad de codigo entre pleitoUrbano - copia y este proyecto
                   //peleadorAtacante.setY(peleadorAtacante.y)                              
                   //peleador.anims.play('idle', true);
                   peleadorAtacante.setY(peleadorAtacante.y + 13.6)
                   peleadorAtacante.setSize(125,420)
                   peleadorAtacante.body.setOffset(25,30)
                   //console.log(peleador.y)
                   //peleador.body.setOffset(50,50)
                   //personajeState.comboIsFinished = true
                   atacanteState.comboIsOn = false;
                   //atacadoState.gotHitted = true
                   //this.punchCollider.active = true;
                   this.punchValidator = false
                   atacanteState.isPunching = false

            }
        });*/
        //pre updated Golpe____________________________________________________________________________________________________________________________________

            
        golpear(peleadorAtacante, peleadorAtacado, atacanteState, atacadoState){
        
            if(atacanteState.isPunching && peleadorAtacante.anims.currentAnim?.key !== 'punch' && peleadorAtacante.anims.currentAnim?.key !== 'punch_left' && atacanteState.isAllowedToPunch){ //Hay que chequear aqui reemplazar peleadorAtacado por peleadorAtacante
                    
                console.log('La animacion "punch" ha comenzado')
                
                atacanteState.comboIsOn = true
                atacanteState.direction === "right"? peleadorAtacante.anims.play('punch') : peleadorAtacante.anims.play('punch_left')
                //peleadorAtacante.anims.play('punch', true)
                console.log(peleadorAtacante.y)
                peleadorAtacante.setY(peleadorAtacante.y - 76.5)
                //peleadorAtacante.setScale(.9)  
                peleadorAtacante.setSize(400,850)
                atacanteState.direction === "right"? peleadorAtacante.body.setOffset(300,75) : peleadorAtacante.body.setOffset(50,75)
                //atacanteState.isAllowedToThrowDistanceAttacks = false
                //peleadorAtacante.setSize(400,850)
                atacanteState.isAllowedToMove = false
                atacanteState.isAllowedToThrowDistanceAttacks = false
                
                
            }
    
            peleadorAtacante.on('animationcomplete', (animation, frame) => {
    
                 if ((animation.key === 'punch' || animation.key === 'punch_left') && atacanteState.comboIsOn /* punchValidator*/) {
    
                        //console.log('La animación "punch" ha terminado');
                        //let postPunchAnimYposition = peleadorAtacante.y
                        //console.log(postPunchAnimYposition)
                        //this.idleAnimationPlayer(peleadorAtacante, atacadoState)   //Disparidad de codigo entre pleitourbano y este proyecto
                        peleadorAtacante.setScale(.8)  
                        //peleadorAtacante.setY(peleadorAtacante.y + postPunchAnimYposition)
                        //console.log(postPunchAnimYposition + peleadorAtacante.y)
                        atacanteState.comboIsOn = false;
                        //atacanteState.isAllowedToMove = true
                        this.idleAnimationPlayer(peleadorAtacante, atacanteState) 
                        peleadorAtacante.setY(peleadorAtacante.y + 76.5)
                        atacanteState.isPunching = false
                 }
             });
    
             
        }

        gettingHitted(peleadorAtacante, peleadorAtacado, atacanteState, atacadoState, energyBlast){     //Hay que incluir tanto la propiedad de peleadorAtacante como peleadorAtacado
        

            peleadorAtacado.on('animationcomplete', (animation, frame) => {
    
                if((animation.key === 'getting_hit_left' || animation.key === 'getting_hit_right') && atacadoState.gettingHittedIsOn){ ///////////////Codigo importante
    
                    atacadoState.gettingHittedIsOn = false
                    //let postPunchAnimYposition = peleadorAtacado.y
                    //console.log(postPunchAnimYposition)
                    //console.log('El peleador fue golpeado por los dos primeros golpes del combo')
                    //peleadorAtacado.setX(peleadorAtacado.x + 67)
                    this.idleAnimationPlayer(peleadorAtacado, atacadoState)
                    //peleadorAtacante.setY(peleadorAtacante.y + postPunchAnimYposition)
                    //console.log(postPunchAnimYposition + peleadorAtacante.y)
                    peleadorAtacado.setScale(.8)
                    
                    //peleadorAtacado.setSize(497,328) 
                    //peleadorAtacado.setY(peleadorAtacado + 77.6)
                }
            })
            
                
            peleadorAtacado.on('animationcomplete', (animation, frame) => {
    
    
                if ((animation.key === 'fall_right' || animation.key === 'fall_left') && atacadoState.gettingHittedAndFallingIsOn) {
    
                        console.log('La animacion "fall ha concluido, volviendo a posicion idle')
                        //let postPunchAnimYposition = peleadorAtacado.y
                        //console.log(postPunchAnimYposition)
                        //console.log(peleadorAtacado.y)
                        this.idleAnimationPlayer(peleadorAtacado, atacadoState)
                        //peleadorAtacante.setY(peleadorAtacante.y + postPunchAnimYposition)
                        //console.log(postPunchAnimYposition + peleadorAtacante.y)
                        //peleadorAtacado.setY(peleadorAtacado.y + 3)
                        peleadorAtacado.setScale(.8) 
                        console.log(peleadorAtacado.y)
                        //peleadorAtacado.setX(peleadorAtacado.x - 67)                   
                        atacadoState.gettingHittedAndFallingIsOn = false;
     
    
                }
            })
    
            
        }

        distanceAttack(peleador, personajeState) {

            if(personajeState.secondsBetweenEnergyBlastTimer < 80){
    
                personajeState.secondsBetweenEnergyBlastTimer += 1;
            }

            if(personajeState.isThrowingDistanceAttack){

                if (personajeState.isAllowedToThrowDistanceAttacks && personajeState.energyBlastCount >= 1 
                    && peleador.anims.currentAnim?.key !== 'distance attack_right' && 
                    peleador.anims.currentAnim?.key !== 'distance attack_left') {
                    
                    personajeState.isAllowedToMove = false
                    console.log("lanzando ataque a distancia")
                    console.log(peleador.y)
                    personajeState.direction === 'right'? peleador.anims.play('distance attack_right', true) : peleador.anims.play('distance attack_left', true)
                    peleador.setSize(300,734) 
                    console.log(peleador.y)
                    peleador.setY(peleador.y - 46.5)
                    //console.log(peleador.y)
                    //peleador.setY(peleador.y - 10)
                    peleador.setScale(0.85);
                    personajeState.distanceAttackIsOn = true
                    personajeState.isAllowedToPunch = false
                    personajeState.isAllowedToMove = false
                    //personajeState.isAllowedToThrowDistanceAttacks = true
                }
                        
                    
                if((peleador.anims.currentAnim?.key === 'distance attack_right' || peleador.anims.currentAnim?.key === 'distance attack_left') 
                    && peleador.anims.currentFrame.index === 11 && personajeState.secondsBetweenEnergyBlastTimer >= 80  && personajeState.energyBlastCount >= 1/*this.timer >= 160 && this.energyBlastNum >= 1*/){
        
                    console.log('Energy blast creada y lanzada')
                    peleador.anims.pause()
                    personajeState.energyBlastCount -= 1
                    personajeState.secondsBetweenEnergyBlastTimer = 0
                    personajeState.direction === 'right'? this.energyBlast = this.physics.add.sprite((peleador.x + 310), (peleador.y + 15), 'blast explosion_right').setScale(.9) : this.energyBlast = this.physics.add.sprite((peleador.x - 310), (peleador.y - 15), 'blast explosion_left').setScale(.9)
                    let currentEnergyBlast = this.energyBlast;
                    personajeState.direction === 'right'? currentEnergyBlast.anims.play('blast explosion_right', true) : currentEnergyBlast.anims.play('blast explosion_left', true)
                    personajeState.direction === 'right'? currentEnergyBlast.setVelocityX(1000) : currentEnergyBlast.setVelocityX(-1000)
                    currentEnergyBlast.setCollideWorldBounds(true);
                    currentEnergyBlast.body.onWorldBounds = true;
                    //currentEnergyBlast.body.onWorldBounds = true;
                    currentEnergyBlast.body.setSize(348, 734)
                    currentEnergyBlast.anims.pause()
                    //dapeleador.setY(peleador.y - 46.5)
                    this.fireballs.push(currentEnergyBlast)
                    //if(this.energyBlastNum === 1 ){peleador.anims.resume()}
    
                    
                }
        
                if((peleador.anims.currentAnim?.key === 'distance attack_right' ||
                    peleador.anims.currentAnim?.key === 'distance attack_left') && peleador.anims.currentFrame.index === 11 &&  
                    personajeState.secondsBetweenEnergyBlastTimer >= 80 && personajeState.energyBlastCount <= 0 
                    && !this.distanceAttackValidator){
        
                    peleador.anims.resume()
                    console.log("quitandole la pausa a la animacion")
                    this.distanceAttackValidator = true
                }
        
                
                peleador.on('animationcomplete', (animation) => {
        
                    if ((animation.key === 'distance attack_right' || animation.key === 'distance attack_left') && personajeState.distanceAttackIsOn) {
                        //console.log(peleador.y)
                            console.log('La animacion "distance attack ha concluido, volviendo a posicion idle')
                            //let postPunchAnimYposition = peleador.y
                            //console.log(postPunchAnimYposition)
                            this.idleAnimationPlayer(peleador, personajeState)
                            peleador.setScale(0.8);
                            //peleador.setY(peleador.y + postPunchAnimYposition)
                            //console.log(postPunchAnimYposition + peleador.y)
                            peleador.setY(peleador.y + 46.5)
                            personajeState.distanceAttackIsOn = false
                            this.distanceAttackValidator = false
                            personajeState.isAllowedToMove = true
                            personajeState.isThrowingDistanceAttack = false
                            personajeState.energyBlastCount = 5
                    }
                }); 
            }
            
    
            
    
                
    
                
            
        }
    /*ataqueADistancia(peleadorAtacante, atacanteState, fighterImages, fireballLocX){

        if(atacanteState.isThrowingDistanceAttack){

            atacanteState.timer += 1;
            
            if (atacanteState.timer === 15) {
                
                atacanteState.direction === "right"? peleadorAtacante.setTexture(atacanteState.distanceAttackRight.name) : peleadorAtacante.setTexture(atacanteState.distanceAttackLeft.name);
                let fireball = this.physics.add.image((peleadorAtacante.x + fireballLocX), (peleadorAtacante.y - 25), fighterImages.fireball.name);
                //let fireball = peleadorAtacante.direction === "right"? 
                let velocidad = (fireballLocX > 0) ? 600 : -600;
                fireball.setCollideWorldBounds(true);
                fireball.setVelocityX(velocidad);
                fireball.body.onWorldBounds = true;
                this.fireballsLeft -= 1;
                this.fireballs.push(fireball);
                atacanteState.timer = 0;


            } else if(this.fireballsLeft <= 0){

                atacanteState.isThrowingDistanceAttack = false;
                atacanteState.timer = 0;
                atacanteState.direction === "right"? peleadorAtacante.setTexture(atacanteState.staticPositionRight.name) : peleadorAtacante.setTexture(atacanteState.staticPositionLeft.name);
            }
        } 
    }*/
    


    //Pre-updated version_______________________________________________________________________________________________________________________________________________________________________________
    /*ataqueADistancia(peleadorAtacante, atacanteState, fighterImages, fireballLocX){

        if(atacanteState.isThrowingDistanceAttack){

            atacanteState.timer += 1;
            
            if (atacanteState.fireballsLeft > 0) {
                
                atacanteState.direction === "right"? peleadorAtacante.setTexture(atacanteState.distanceAttackRight.name) : peleadorAtacante.setTexture(atacanteState.distanceAttackLeft.name);
                let fireball = this.physics.add.image((peleadorAtacante.x + fireballLocX), (peleadorAtacante.y - 25), fighterImages.fireball.name);
                //let fireball = peleadorAtacante.direction === "right"? 
                let velocidad = (fireballLocX > 0) ? 600 : -600;
                fireball.setCollideWorldBounds(true);
                fireball.setVelocityX(velocidad);
                fireball.body.onWorldBounds = true;
                atacanteState.fireballsLeft -= 1;
                this.fireballs.push(fireball);
                

            } 
            
            else if(atacanteState.timer > 60){

                atacanteState.isThrowingDistanceAttack = false;
                atacanteState.timer = 0;
                atacanteState.direction === "right"? peleadorAtacante.setTexture(atacanteState.staticPositionRight.name) : peleadorAtacante.setTexture(atacanteState.staticPositionLeft.name);
            }
        } 
    }*/
    //Pre-updated version_______________________________________________________________________________________________________________________________________________________________________________



    updateHealthBar(peleador, healthBar) {

        if (peleador.health === 90) {
            healthBar.setFrame(1); // Frame para salud casi completa
        } else if (peleador.health === 80) {
            healthBar.setFrame(2); // Frame para salud alta
        } else if (peleador.health === 70) {
            healthBar.setFrame(3); // Frame para salud moderada
        } else if (peleador.health === 60) {
            healthBar.setFrame(4); // Frame para salud media-alta
        } else if (peleador.health === 50) {
            healthBar.setFrame(5); // Frame para salud media
        } else if (peleador.health === 40) {
            healthBar.setFrame(6); // Frame para salud baja
        } else if (peleador.health === 30) {
            healthBar.setFrame(7); // Frame para salud muy baja
        } else if (peleador.health === 20) {
            healthBar.setFrame(8); // Frame para salud crítica
        } else if(peleador.health === 10){
            healthBar.setFrame(9); // Frame para salud agotada (o fuera de rango)
        } else if(peleador.health === 0){
            healthBar.setFrame(10)
        }
        
    }
    
}

