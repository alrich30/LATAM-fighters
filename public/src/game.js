const config = {
  type: Phaser.AUTO,
  width: 1500,
  height: 933.5,
  physics: {
    default: 'arcade',
    arcade: {
        //gravity: {/*x: 300,*/  y: 250},
        debug: false
    }
  },
  scene: [/*StartScene, */GameScene, EndScene]
};

const game = new Phaser.Game(config);