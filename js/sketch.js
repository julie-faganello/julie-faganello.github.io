
function setup () {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(700,700);
  background(233,233,233);
  frameRate (6);
  //fill("#504a8f");
  //triangle( 18, 18, 18, 70, 70, 70);

  }

  function draw(){
    background(233,233,233);

  for(var y = 100; y <=500 ; y+=50) {
      createLine(y);
      }
  // Créer avant ET apres pour pouvoir avoir des triangles violets devant et derrière le rond.

    fill("#a99e89");
      noStroke ();
      ellipse( 350, 350, 380, 380);

  for(var y = 100; y <=550 ; y+=50) {
    createLine(y);
    }


  }

  function createLine( posY ) {
    for( var x =  100; x <= 560 ; x = x + 60){
      push();
      blendMode(MULTIPLY)
      translate(x, posY);
      motif(x, posY);
      pop();
    }

  }


  function motif(paramX, paramY) {

   if ( dist(mouseX, mouseY, paramX+100, paramY+100) < 100 ) {
//Permet de dévoiler les forme au survol uniquement

    fill("#49428c");

    var probaX= map( paramX, 50,450,90,30) ;
    var probaY= map( paramY, 50,350,30,90) ;

    var proba = map (probaX * probaY, 30*30, 90*90, 10, 90);

    if(random(100) < proba) {
    triangle(90,50,60,0,30,50);
    }

    if(random(500) < proba) {
      triangle(0,0,60,0,30,50);
    }

  }

}
