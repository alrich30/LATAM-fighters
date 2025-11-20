class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' });
  }

  init(data) {
    this.winner = data.winner; // Recibir el ganador desde GameScene
  }

  create() {
    if (this.winner === 'Mexico') {
      // Agregar y reproducir el video en loop solo si gana México
      const video = this.add.video(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        'MexicoWins' // Nombre del video cargado en preload
      );
      video.setOrigin(0.5).play(true); // Reproduce el video en loop
    } else {
      // Mostrar un fondo estático o realizar otra acción si no hay video para el otro ganador
      this.add.text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        `${this.winner} ha ganado!`, // Mensaje para otros ganadores
        { fontSize: '64px', color: '#FFF', fontStyle: 'bold' }
      ).setOrigin(0.5);
    }

    // Escuchar la tecla para reiniciar
    this.input.keyboard.on('keydown-R', () => {
      this.scene.start('GameScene'); // Reinicia el juego volviendo a GameScene
      this.sound.play('readyFight', { volume: 1 });
    });
  }
}