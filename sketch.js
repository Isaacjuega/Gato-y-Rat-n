var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    //ELIJE EL CORRECTO
tom = createSprite(870, 600);
//tom = addSprite(870, 600);
//tom = setSprite(870, 600);


tom.addAnimation("tomSleeping", tomImg1);
//tom.addAnimation("tomSleeping", tom);
//tom.addImage("tomSleeping", MiTom);

//tom.escala = 0.2;
//tom.size = 0.2;
tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    //ELIJE LA CONDICIONAL CORRECTA
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    //if(tom.y - jerry.y < (tom.height - jerry.height)/2)
    //if(tom - jerry < (tom - jerry)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    //CAMBIA EL BOTÓN PARA QUE FUNCIONE AL PRESIONAR LA FLECHA IZQUIERDA
    if(keyCode === "LeftKey"){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}