class Enemy{
    constructor(){
        this.enemyList = [];
        window.setInterval(function(){
            var enemyImg = PIXI.Texture.from("pics/enemy.png");
            this.enemy = new PIXI.Sprite(enemyImg);
            this.enemy.anchor.set(0.5, 0.5);
            this.enemy.scale.set(0.2, 0.2);
            this.enemy.position.set(renderer.width * 1.1, renderer.height * Math.random());
            stage.addChild(this.enemy);
            this.enemyList.push(this.enemy);
        }.bind(this), 2000);
    }

    update(){
        this.enemyList.forEach(function(element, index, array) {
            if(element.position.y < renderer.height/2){
                element.position.x -= Math.random() * 5;
                element.position.y -= Math.random();
            }
            else{
                element.position.x -= Math.random() * 5;
                element.position.y += Math.random();
            }
            

            if(element.position.x < -renderer.width * 0.3){
                element.destroy();
                array.splice(0,1);
            }
        });
    }
}