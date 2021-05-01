class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.Visiblity = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed < 3){
        console.log("i am here if loop");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 30,40);
      }
      else{
        console.log("else loop");
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 30,40);
        pop();
      }
    }
}