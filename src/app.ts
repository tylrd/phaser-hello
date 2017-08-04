import 'pixi';
import 'p2';
import 'phaser';

import {Boot} from "./boot";
import {Load} from "./load";
import {Title} from "./title";
import {Play} from "./play";

class App extends Phaser.Game {

    constructor(config: Phaser.IGameConfig) {
        super(config);
        this.state.add("boot", Boot);
        this.state.add("load", Load);
        this.state.add("title", Title);
        this.state.add("play", Play);
        this.state.start("boot");
    }



}

function start(): void {
    let gameConfig: Phaser.IGameConfig = {
        width: 480,
        height: 360,
        renderer: Phaser.AUTO,
        parent: '',
        resolution: 1
    };
    new App(gameConfig);
}

window.onload = () => {
    start();
};