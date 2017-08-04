///<reference path="../node_modules/phaser-ce/typescript/phaser.comments.d.ts"/>

export class Play extends Phaser.State {

    static NAME: string = "play";

    circle: Phaser.Sprite;

    preload(): void {
        console.log("On play");
    }

    create(): void {
        let bmd: Phaser.BitmapData = this.game.add.bitmapData(100, 100);

        bmd.ctx.beginPath();
        bmd.ctx.arc(0, 0, 100, 100);
        bmd.ctx.fillStyle = "#ff0000";
        bmd.ctx.fill();

        this.circle = this.game.add.sprite(200, 200, bmd);
        this.game.physics.arcade.enable(this.circle);
        (<Phaser.Physics.Arcade.Body>this.circle.body).collideWorldBounds = true;
        (<Phaser.Physics.Arcade.Body>this.circle.body).allowRotation = true;
        (<Phaser.Physics.Arcade.Body>this.circle.body).bounce.y = 0.5;
        (<Phaser.Physics.Arcade.Body>this.circle.body).bounce.x = 0.1;
        (<Phaser.Physics.Arcade.Body>this.circle.body).gravity.y = 200;
        (<Phaser.Physics.Arcade.Body>this.circle.body).drag.x = 10;
    }

    update(): void {
        let body: Phaser.Physics.Arcade.Body = this.circle.body;
        if (this.game.input.activePointer.isDown) {
            if (this.game.input.activePointer.x < this.circle.centerX) {
                body.velocity.x -= 10;
            } else {
                body.velocity.x += 10;
            }

            if (this.game.input.activePointer.y < this.circle.centerY) {
                body.velocity.y -= 10;
            } else {
                body.velocity.y += 10;
            }
        }

    }
}