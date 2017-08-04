///<reference path="../node_modules/phaser-ce/typescript/phaser.comments.d.ts"/>

export class Boot extends Phaser.State {

    preload(): void {
        console.log("preload")
    }


    create(): void {
        this.game.state.start("preloader")
    }

}