function setup() {
  rectMode(CENTER);
  createCanvas(400, 400);
  background(0, 170, 255);
  myCity = new city();
  myWindows = new windows();
  myCity.display();
  myWindows.display();
}

function draw() {
}

class city {
constructor() {
  }
  
  display() {
    noStroke();
      fill(220);
      rect(200,350,400,100)
      rect(50,200,60,200);
      rect(0,250,100,200);
      rect(190,240,200,360);
      fill(100);
      rect(350,300,120,300);
      fill(241, 245, 44);
      rect(350,200,10,20);
      rect(350,250,10,20);
      rect(350,300,10,20);
      rect(350,350,10,20);
      rect(350,400,10,20);
  }
}

class windows {
  constructor() {
  }
  
  display() {
    let gridSize = 5;
    let i;
    let j;
    for (i=0;i<gridSize;i++) {
    for(j=0;j<gridSize;j++) {
      let ranR = int(random(255));
      let ranG = int(random(255));
      let ranB = int(random(255));
      fill(ranR,ranG,ranB);
//building 1
      rect(10-i*(gridSize*2),160+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(10-i*(gridSize*2),190+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(10-i*(gridSize*2),220+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(10-i*(gridSize*2),250+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(10-i*(gridSize*2),280+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(10-i*(gridSize*2),310+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(10-i*(gridSize*2),340+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(10-i*(gridSize*2),370+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
//building 2
      rect(30+i*(gridSize*2),110+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(30+i*(gridSize*2),140+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(30+i*(gridSize*2),170+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(30+i*(gridSize*2),200+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(30+i*(gridSize*2),230+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(30+i*(gridSize*2),260+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(30+i*(gridSize*2),290+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(30+i*(gridSize*2),320+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(30+i*(gridSize*2),350+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(30+i*(gridSize*2),380+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
//building 3 pt 1
      rect(110+i*(gridSize*2),85+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),115+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),145+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),175+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),205+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),235+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),265+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),295+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),325+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),355+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(110+i*(gridSize*2),385+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
//building 3 pt 2
      rect(170+i*(gridSize*2),85+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),115+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),145+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),175+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),205+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),235+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),265+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),295+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),325+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),355+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(170+i*(gridSize*2),385+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
//building 3 pt 3
      rect(230+i*(gridSize*2),85+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),115+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),145+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),175+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),205+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),235+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),265+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),295+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),325+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),355+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
      rect(230+i*(gridSize*2),385+j*(gridSize), (gridSize*0.8),(gridSize*0.6));
        }
     }
  }
}