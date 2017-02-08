function Bird(){

  this.size = 25;
  this.x = 50;
  this.y = (height / 2) - this.size;

  this.velocity = 0;
  this.lift = -15;
  this.gravity = 0.9;


  this.show = function(){

    fill(255);
    ellipse(this.x, this.y, this.size, this.size);

  }

  this.update = function(){

    this.velocity += this.gravity;
    this.velocity *= 0.9;

    this.y += this.velocity;


    //Contraints
    if(this.y > height){
      this.y = height;
    }
    if(this.y < 0){
      this.y = 0;
    }

  }

  this.up = function(){
    this.velocity += this.lift;
  }

}
