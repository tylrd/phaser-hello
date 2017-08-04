import 'pixi';
import 'p2';
import 'phaser';

import {Boot} from "./boot";

class App extends Phaser.Game {

    constructor(config: Phaser.IGameConfig) {
        super(config);
        this.state.add("boot", Boot);
        this.state.start("boot");
    }

}

function start(): void {
    let gameConfig: Phaser.IGameConfig = {
        width: 200,
        height: 200,
        renderer: Phaser.AUTO,
        parent: '',
        resolution: 1
    };
    new App(gameConfig);
}

window.onload = () => {
    start();
};