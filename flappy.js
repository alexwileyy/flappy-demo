var bird;
var pipe;
var pipes = [];

function setup(){

  createCanvas(500,500);

  bird = new Bird();

}

function draw(){
  //Colour background
  background(0);

  bird.show();
  bird.update();

  if(frameCount % 50 == 0){
    pipes.push(new Pipe())
  }

  for(var i = pipes.length - 1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].offScreen()){
      pipes.splice(i, 1);
    }

    if(pipes[i].hit(bird)){
      console.log('hit');
    }
  }


}

function keyPressed(){

  if(key == ' '){
    bird.up();
  }

}
