class Stars{
    constructor(){
        this.starList = [];
        window.setInterval(function(){
            var star1 = PIXI.Texture.from("pics/star1.png");
            var star2 = PIXI.Texture.from("pics/star2.png");
            var star3 = PIXI.Texture.from("pics/star3.png");

            const rng = Math.random()*3+1;
            if(rng<2){
                this.star = new PIXI.Sprite(star1);
                this.star.anchor.set(0.5,0.5);
                this.star.position.set(renderer.width*1.3, renderer.height * Math.random());

                stage.addChild(this.star);
                this.starList.push(this.star);
            }else if(rng>2 && rng<2.5){
                this.star = new PIXI.Sprite(star2);
                this.star.anchor.set(0.5,0.5);
                this.star.position.set(renderer.width*1.3, renderer.height * Math.random());

                stage.addChildAt(this.star);
                this.starList.push(this.star);
            }else {
                this.star = new PIXI.Sprite(star3);
                this.star.anchor.set(0.5,0.5);
                this.star.position.set(renderer.width*1.3, renderer.height * Math.random());

                stage.addChildAt(this.star);
                this.starList.push(this.star);
            }
        }.bind(this), 500);

    }

    update(){
        this.starList.forEach(function(element, index, array) {
            element.position.x -=5;

            if(element.position.x < -renderer.width * 0.3){
                element.destroy();
                array.splice(0,1);
            }
        });
    }



}