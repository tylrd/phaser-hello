///<reference path="../node_modules/phaser-ce/typescript/phaser.comments.d.ts"/>

export class Load extends Phaser.State {

    preload(): void {
        this.game.add.text(80, 150, "Loading...", {
            font: '30 px Courier',
            fill: '#ffffff'
        });

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
    }

    create(): void {
        this.state.start("title");
    }

}