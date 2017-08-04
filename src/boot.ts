///<reference path="../node_modules/phaser-ce/typescript/phaser.comments.d.ts"/>

export class Boot extends Phaser.State {

    preload(): void {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }


    create(): void {
        this.game.state.start("load")
    }

}