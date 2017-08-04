///<reference path="../node_modules/phaser-ce/typescript/phaser.comments.d.ts"/>

import {Play} from "./play";

export class Title extends Phaser.State {

    create(): void {
    }


    update(): void {
        // if (this.game.input.activePointer.isDown) {
        //     this.game.state.start(Play.NAME);
        // }
        this.game.state.start(Play.NAME);
    }

}