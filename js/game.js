WIDTH = 800;
HEIGHT = 600;

var game = new Phaser.Game(WIDTH, HEIGHT, '', Phaser.AUTO, {
    preload: preload,
    create: create
});

function preload() {
    game.load.image('titlescreenbackground', 'assets/stl_bgts.png');
    game.load.image('titlescreenplaybutton', 'assets/stl_pbts.png');
    game.load.image('titlescreentext', 'assets/stl_tstxt.png');
}

function create() {
    var titleScreenBackground = game.add.sprite(0, 0, 'titlescreenbackground');
    var titleScreenText = game.add.sprite(0, 0, 'titlescreentext');

    var titleScreenPlayButton = game.add.sprite(WIDTH / 2, HEIGHT / 2 + 80, 'titlescreenplaybutton');
    titleScreenPlayButton.anchor.setTo(0.5);
}