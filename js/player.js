class Player{
    constructor(){
        var playerImg = PIXI.Texture.from("pics/ship.png");
        this.player = new PIXI.Sprite(playerImg);
        this.player.anchor.set(0.5,0.5);
        this.player.scale.set(0.3,0.15);
        this.player.position.x = 1;
        this.player.position.y = 300;

        this.keyState = {32: false, 37: false, 38: false, 39: false, 40: false};
        this.keyCodes = {37: -1, 38: -1, 39: 1, 40: 1};

        this.directionX = 0;
        this.directionY = 0;
        this.speed = 8;

        this.fireSpeed = 10;
        this.fireCooldown = 0;

        stage.addChild(this.player);
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));

       
    }

    update(){
        let nextX = this.player.position.x + this.directionX * this.speed;
        let nextY = this.player.position.y + this.directionY * this.speed;

        if(nextX > 0 && nextX < renderer.width){
            this.player.position.x = nextX;
        }
        if(nextY > 0 && nextY < renderer.height){
            this.player.position.y = nextY;
        }

        this.updateFire();
    }

    updateFire(){
        if (this.fireCooldown < this.fireSpeed)
            this.fireCooldown++;

        if (this.keyState[32] && this.fireCooldown >= this.fireSpeed)
        {
            let rocket = new Rocket(this.player.position.x, this.player.position.y);
            this.fireCooldown = 0;
        }
    }

    onKeyDown(key)
    {
        this.keyState[key] = true;


        
        if (key.keyCode == 37 || key.keyCode == 39){
            this.directionX = this.keyCodes[key.keyCode];
        }
        else if (key.keyCode == 38 || key.keyCode == 40){
            this.directionY = this.keyCodes[key.keyCode];
        }
        else if(key.keyCode == 32){
            let rocket = new Rocket(this.player.position.x, this.player.position.y);
            this.fireCooldown = 0;
        }

    }

    onKeyUp(key)
    {
        this.keyState[key] = false;

        if (!this.keyState[37] && this.keyState[39])
            this.directionX = this.keyCodes[39];
        else if (this.keyState[37] && !this.keyState[39])
            this.directionX = this.keyCodes[37];
        else this.directionX = 0;

        if (!this.keyState[38] && this.keyState[40])
            this.directionY = this.keyCodes[40];
        else if (this.keyState[38] && !this.keyState[40])
            this.directionY = this.keyCodes[38];
        else this.directionY = 0;
    }

}