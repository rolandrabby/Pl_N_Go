let _list = new Array();

class Rocket
{
    static get list() { return _list; }
    static set list(value) { _list = value; }

    constructor(x, y)
    {   var rocketImg = PIXI.Texture.from("pics/rocket.png");
        this.rocket = new PIXI.Sprite(rocketImg);   

        this.rocket.anchor.set(0.5, 0.5);
        this.rocket.position.set(x + 50, y);
        this.rocket.scale.set(0.1, 0.1);

        this.speed = 20;
        Rocket.list.push(this);

        stage.addChild(this.rocket);
    }

    update()
    {
        this.rocket.position.x += this.speed;

        if (this.rocket.position.x > renderer.width * 1.1) {
            this.rocket.destroy();
            Rocket.list.splice(Rocket.list.indexOf(this), 1);
        }
    }
}