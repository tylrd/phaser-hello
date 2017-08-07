///<reference path="../node_modules/phaser-ce/typescript/phaser.comments.d.ts"/>

export class Play extends Phaser.State {

    static NAME: string = "play";

    circle: Phaser.Sprite;
    circle2: Phaser.Sprite;

    leftButton: Phaser.Key;
    rightButton: Phaser.Key;
    upButton: Phaser.Key;
    downButton: Phaser.Key;
    accelButton: Phaser.Key;

    lastBurst: number;

    timer: Phaser.Timer;

    preload(): void {
        console.log("On play");
    }

    create(): void {
        let bmd: Phaser.BitmapData = this.game.make.bitmapData(32, 32);
        let bmd2: Phaser.BitmapData = this.game.make.bitmapData(8, 8);

        bmd.circle(16, 16, 16, "#ff0000");
        bmd2.circle(4, 4, 4, "#ffff00");

        this.circle = this.game.add.sprite(0, 0, bmd);
        this.circle2 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, bmd2);
        this.game.physics.arcade.enable(this.circle);
        this.game.physics.arcade.enable(this.circle2);

        (<Phaser.Physics.Arcade.Body>this.circle.body).setCircle(16);
        (<Phaser.Physics.Arcade.Body>this.circle.body).collideWorldBounds = true;
        (<Phaser.Physics.Arcade.Body>this.circle.body).bounce.y = .2;
        (<Phaser.Physics.Arcade.Body>this.circle.body).bounce.x = .2;
        (<Phaser.Physics.Arcade.Body>this.circle.body).drag.setTo(5, 5);

        (<Phaser.Physics.Arcade.Body>this.circle2.body).setCircle(4);
        (<Phaser.Physics.Arcade.Body>this.circle2.body).collideWorldBounds = true;
        (<Phaser.Physics.Arcade.Body>this.circle2.body).bounce.y = 1;
        (<Phaser.Physics.Arcade.Body>this.circle2.body).bounce.x = 1;
        (<Phaser.Physics.Arcade.Body>this.circle2.body).drag.x = 10;
        (<Phaser.Physics.Arcade.Body>this.circle2.body).drag.y = 10;
        (<Phaser.Physics.Arcade.Body>this.circle2.body).velocity.setTo(300,300);

        this.leftButton = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.rightButton = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.downButton = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.upButton = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.accelButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.lastBurst = 0;
    }

    update(): void {
        let body: Phaser.Physics.Arcade.Body = this.circle.body;

        this.game.physics.arcade.collide(this.circle, this.circle2, () => {
            console.log("hit!");
        });

        if (this.upButton.isDown) {
            if (body.velocity.y > -400) {
                body.velocity.y -= 6;
            }
        }

        if (this.downButton.isDown) {
            if (body.velocity.y < 400) {
                body.velocity.y += 6;
            }
        }

        if (this.leftButton.isDown) {
            if (body.velocity.x > -400) {
                body.velocity.x -= 6;
            }
        }

        if (this.rightButton.isDown) {
            if (body.velocity.x < 400) {
                body.velocity.x += 6;
            }
        }

        if (this.accelButton.justDown) {
            console.log(this.time.now - this.lastBurst);
            if (this.time.now - this.lastBurst > 5000) {
                console.log("burst");
                body.velocity.setTo(3*body.velocity.x, 3*body.velocity.y);
                this.lastBurst = this.time.now;
            }
        }
    }


    render(): void {
        this.game.debug.text("x:" + this.circle.body.velocity.x + ", y:" + this.circle.body.velocity.y, 100, 100);
    }
}