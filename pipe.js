function Pipe(){

  this.width = 50;
  this.speed = 5;
  this.x = width;

  this.top = random(50, 200);
  this.middle = random(this.top, 150);
  this.bottom = height - (this.top + this.middle);

  this.show = function(){

    fill(255);
    if(this.highlight){
      fill(255,50,4);
    }

    rect(this.x, 0, this.width, this.top);

    rect(this.x, this.top + this.middle, this.width, this.bottom);
  }

  this.update = function(){

    this.x -= this.speed;

  }

  this.offScreen = function(){
    if(this.x <= - this.width){
      return true;
    }
    else{
      false;
    }
  }

  this.hit = function(bird){

    if((bird.y < this.top || bird.y > (this.top + this.middle)) && (bird.x >= this.x && bird.x <= this.x + this.width)){
        this.highlight = true;
        return true;
      }
      else{
        this.highlight = false;
        return false;
      }

  }

}
