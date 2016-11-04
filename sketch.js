function setup () {
  createCanvas(400,400);
  background(233,233,233);
  frameRate (1);
}

function draw () {
  background (233,233,233);

for (var posY=0; posY <=350; posY += 100) {
for (var posX=0; posX <= 350;posX += 100) {
  push ();
  translate (posX, posY);
  motif (100);
  pop ();
  }
  }

  //cmd + ctrl + flèche = déplacer ligne
  // cmd+X (sans selection = couper) -> Pareil poru autres fonctions
  //cmd+click -> modifier pls endroits

}

function circle (x, y, diameter) {
  ellipse (x, y, diameter, diameter);
}

function motif ( taille ) {
  stroke ("#798C8F");
  noFill (); // À mettre avant l'élément vide
  if (random (100) <50 ) {
    line (0,0,taille,taille);
  }

  else {
    line (taille, 0 , 0 , taille );

  }

  circle (taille/2,taille/2,taille);

}
