WIDTH = 800;
HEIGHT = 600;

var game = new Phaser.Game(WIDTH, HEIGHT, '', Phaser.AUTO, {
    preload: preload,
    create: create
});

function preload() {
    game.load.image('titlescreenbackground', 'assets/stl_bgts.png');
    game.load.image('titlescreentext', 'assets/stl_tstxt.png');

    game.load.spritesheet('titlescreenplaybutton', 'assets/stl_ss_pbts.png', 197, 92);
}

function create() {
    var titleScreenBackground = game.add.sprite(0, 0, 'titlescreenbackground');
    var titleScreenText = game.add.sprite(0, 0, 'titlescreentext');

    var titleScreenPlayButton = game.add.button(WIDTH / 2, HEIGHT / 2 - 80, 'titlescreenplaybutton', playGame, this, 0, 1, 2);
    titleScreenPlayButton.anchor.setTo(0.5);
}

function playGame() {
    console.log('Play Game function initiated');
}