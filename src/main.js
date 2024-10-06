import kaplay from "kaplay";
import "kaplay/global";


// initialize context + variables
kaplay();
var i = 0;
const FLOOR_HEIGHT = 48;
const JUMP_FORCE = 800;
const SPEED = 40;
map = "mon"
var pLevel = 0;
var currentLevel = 1;
var season = "sum";
/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


SET currentLevel TO 1 BY FINISHED ITERATION
currentLevel IS SET TO 2 SO WE CAN TEST IT


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

// load assets
loadSprite("bean", "sprites/mark.png");
loadSprite("summerMontauk", "sprites/montauk.png");
loadSprite("montaukCity", "sprites/summerMontaukBG.png");
loadSprite("winterMontauk", "sprites/winterMontauk.png");
loadSprite("winterManhattan", "sprites/winterManhattan.png");
loadSprite("summerManhattan", "sprites/manhattan.png");
loadSprite("summerMontaukBG", "sprites/summerMontaukBG.png");
loadSprite("winterMontaukBG", "sprites/winterMontaukBG.png");
loadSprite("summerManhattanBG", "sprites/summerManhattanBG.png");
loadSprite("winterManhattanBG", "sprites/winterManhattanBG.png");
loadSprite("sun", "sprites/sun.png");
loadSprite("long island", "sprites/LI.png");
loadSprite("title", "sprites/title.png");
loadSprite("snow", "sprites/flake.png");
loadSprite("rain", "sprites/acidRain.png");

// Line 245

// Function

/*
add([
  sprite("manhattanAerial"),
  pos(1700, -700),
  scale(1.1),
  rotate(90),
]);
*/

// Scenes
/*
There are 3 main scenes:
    main: the main menu where player first spawns in.

    dropgame: raindrop game by Jiyong.

    parkour: parkour game by Sam :)

Educational Scenes:

    instructions: Gives instructions to drop game.

    dropEducational: Gives a blurb of the info about acid rain.

    temperatureEducational: Gives a blurb of the info about temperature (Still contains info of acid rain).
*/
scene("title", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  add([
    sprite("title"),
    pos(0, 0),
    scale(width()/1920)
  ]);
  const start = add([
    rect(300, 100),
    pos(275, 350),
    "button",
    area(),
    color(0, 0, 0),
    opacity(0),
    "start"
  ]);
  onClick("start", ()=>{
    map = "mon";
    go("opening");
  });
});


scene("long island", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  add([
    sprite("long island"),
    pos(0, 0),
    scale(0.7)
  ]);
  const manButton = add([
    rect(50, 50),
    pos(120, 525),
    "button",
    area(),
    color(0, 0, 0),
    opacity(0),
    "manButton"
  ]);
  const monButton = add([
    rect(50, 50),
    pos(1190, 250),
    "button",
    area(),
    color(0, 0, 0),
    opacity(0),
    "monButton"
  ]);
  onClick("manButton", ()=>{
    map = "man";
    go("main");
  });
  onClick("monButton", ()=>{
    map = "mon";
    go("main");
  });
});

scene("main", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  boxOff();
  setGravity(0);
  if (map == "mon"){
    if (season == "sum"){
      add([
        sprite("summerMontauk"),
        pos(0, -30),
        scale(0.67),
      ]);
    }else{
      add([
        sprite("winterMontauk"),
        pos(0, -30),
        scale(0.67),
      ]);
    }
    add([
      text(" Parkour\n  Level "),
      color(0, 150, 0),
      pos(325, 380),
      area(),
      //body({isStatic:true}),
      scale(0.6),
      "parkour"
    ]);
    add([
      text(" Acid Rain\n   Level "),
      color(0, 150, 0),
      pos(800, 250),
      area(),
      //body({isStatic:true}),
      scale(0.6),
      "dropTele"
    ]);
  } 

  else{
    if (season == "sum"){
      add([
        sprite("summerManhattan"),
        pos(0, -30),
        scale(0.67),
      ]);
    }else{
      add([
        sprite("winterManhattan"),
        pos(0, -30),
        scale(0.67),
      ]);
    }
    add([
      text(" Parkour\n  Level "),
      color(0, 150, 0),
      pos(300, 200),
      area(),
      //body({isStatic:true}),
      scale(0.6),
      "parkour"
    ]);
    add([
      text(" Acid Rain\n   Level "),
      color(0, 150, 0),
      pos(800, 300),
      area(),
      //body({isStatic:true}),
      scale(0.6),
      "dropTele"
    ]);
  }

  const button = add([
    rect(200, 100),
    pos(0, 0),
    "button",
    area(),
    color(0, 0, 0)
  ]);
  
  if (map == "mon"){
    add([
      text("To Manhattan"),
      pos(10, 30),
      scale(0.75)
    ]);
  } else{
    add([
      text("To Montauk"),
      pos(10, 30),
      scale(0.75)
    ]);
  }
  onClick("button", (button)=>{
    if (map == "man"){
      map = "mon";
      go("main");
    } else{
      map = "man";
      go("main");
    }
  });
  
  if (season == "sum"){
    /*const seasonButton = add([
      rect(200, 100),
      pos(225, 0),
      "seasonButton",
      area(),
      color(0, 0, 0)
    ]);*/
    add([
      sprite("snow"),
      pos(255, 10),
      "seasonButton",
      area(),
      scale(0.75)
    ]);
  } else{
    add([
      sprite("sun"),
      pos(255, 10),
      scale(1.5),
      "seasonButton",
      area()
    ]);
  }
  onClick("seasonButton", (button)=>{
    if (season == "sum"){
      season = "win";
      go("main");
    } else{
      season = "sum";
      go("main");
    }
  });

  /*add([
    text(" Acid Rain\n   Level "),
    color(0, 150, 0),
    pos(800, 300),
    area(),
    //body({isStatic:true}),
    scale(0.5),
    "dropTele"
  ]);*/

  const player = add([
    sprite("bean"),
    pos(450, 400),
    area(),
    //body(),
  ]);

  miniGameControls(player, 150, 0, false);

/*
  onKeyDown("right", () =>{
    player.move(150, 0);
  });
  onKeyDown("left", () =>{
    player.move(-150, 0);
  });
  onKeyDown("up", () =>{
    player.move(0, -150);
  });
  onKeyDown("down", () =>{
    player.move(0, 150);
  });
*/
  player.onCollide("dropTele", ()=>{
    onKeyPress("enter", ()=>{
        go("instructions");
    })
  });

  player.onCollide("parkour", ()=>{
    onKeyPress("enter", ()=>{
        if(currentLevel >= 2){
            pLevel = 0;
            go("parkour");
            debug.log("You must reach the end");
        }
        else{
            debug.log("Must complete the acid rain first!");
        }
    })
  });
});

scene("dropGame", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  boxOff();
  setGravity(1600);
  if (map == "mon"){
    if (season == "sum"){
      add([
        sprite("summerMontaukBG"),
        pos(0, height()-700),
        scale(0.67),
      ]);
    }else{
      add([
        sprite("winterMontaukBG"),
        pos(0, height()-700),
        scale(0.67),
      ]);
    }
    
    } 

  else{
    if (season == "sum"){
      add([
        sprite("summerManhattanBG"),
        pos(0, height()-700),
        scale(0.67),
      ]);
    }else{
      add([
        sprite("winterManhattanBG"),
        pos(0, height()-700),
        scale(0.67),
      ]);
    }
  }
  
  const player = add([
    sprite("bean"),
    pos(width()/2, 400),
    area(),
    body()
  ]);

  // makeDrop(400);
  makeDrop(800);

  //drop collision
  player.onCollide("drop", () =>{
    debug.log("You hit the water");
    go("main");
  });

  add([
      rect(width(), 50),
      pos(0, height()),
      outline(10),
      area(),
      body({isStatic:true}),
      opacity(0)
  ]);

  /*const building1 = add([
    rect(200, 400),
    pos(200, 200),
    area(),
    //body({ isStatic: true }),
    "building1"
  ]);*/

  //Used game control function
  //player  the component that is being moved
  //200     movement speed
  //600     represents jump Height
  //true    represents if there is gravity or not
  miniGameControls(player, 200, 600, true);
});

scene("instructions", ()=> {
  add([
    rect(width(), height()),
    pos(0, 0),
    color(154, 100, 50)
  ]);
  add([
    text("Use the arrow keys to avoid the acid rain!"),
    color(154, 205, 50),
    pos(400, 250),
    area(),
    body({isStatic:true}),
    scale(0.5)
  ]);
  add([
    text("Hit space to start"),
    color(154, 205, 50),
    pos(400, 300),
    area(),
    body({isStatic:true}),
    scale(0.5)
  ]);
  onKeyDown("space", () =>{
    i = 0;
    go("dropGame");
  });
});

scene("dropEducational", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  add([
    text("ACID RAIN"),
    pos(150, 150),
    color(154, 205, 50)
  ]);
  add([
    text("When acid rain enters bodies of water, chemical compounds are produced that limit marine"),
    pos(150, 200),
    color(154, 205, 50),
    scale(0.5)
  ]);
  add([
    text("organisms to function properly. For example, one chemical compound, Calcium Carbonate, is "),
    pos(150, 220),
    color(154, 205, 50),
    scale(0.5)
  ]);
  wait(1, ()=>{
    add([
      text("important for the process of self-regulation (or homeostasis), which is necessary to survive!"),
      pos(150, 240),
      color(154, 205, 50),
      scale(0.5)
    ]);
    add([
      text("Luckily, Manhattan and Montauk have similar acidities of rain, generally unharmful to nature, \nwhich are 5.0-5.5."),
      pos(150, 260),
      color(154, 205, 50),
      scale(0.5)
    ]);
  });
  wait(2, ()=>{
    add([
      text("Hit space to return to continue to the next blurb"),
      pos(150, 305),
      color(154, 205, 50),
      scale(0.5)
    ]);
    onKeyDown("space", ()=>{
      go("pollutionEducational");
    });
  });
  
});

scene("pollutionEducational", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  add([
    text("POLLUTION"),
    pos(150, 150),
    color(154, 205, 50)
  ]);
  add([
    text("Due to Manhattan’s larger population density, pollution control is a greater issue compared to "),
    pos(150, 200),
    color(154, 205, 50),
    scale(0.5)
  ]);
  add([
    text("Montauk. Manhattan’s particulate matter is 7.9 mcg/m^3, while Montauk’s is 2.43 mcg/m^3. This\nmeans that Manhattan has around three times the pollution that Montauk has, poorly impacting "),
    pos(150, 220),
    color(154, 205, 50),
    scale(0.5)
  ]);
  wait(1, ()=>{
    add([
      text("the environment and people’s lungs with toxic chemicals! Though Manhattan has more pollution"),
      pos(150, 255),
      color(154, 205, 50),
      scale(0.5)
    ]);
    add([
      text("than Montauk annually, Montauk’s pollution doubles during summer due to its large increase in\nTourists/visitors!"),
      pos(150, 270),
      color(154, 205, 50),
      scale(0.5)
    ]);
  });
  wait(2, ()=>{
    add([
      text("Hit space to return to the home screen"),
      pos(150, 320),
      color(154, 205, 50),
      scale(0.5)
    ]);
    onKeyDown("space", ()=>{
      go("main");
    });
  });
});

scene("summary", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  add([
    text("SUMMARY"),
    pos(150, 150),
    color(154, 205, 50)
  ]);
  add([
    text("All factors (e.g. temperature, population density, pollution, acid rain) are influenced by the"),
    pos(150, 200),
    color(154, 205, 50),
    scale(0.5)
  ]);
  add([
    text("developed infrastructure in these cities. Both cities are surrounded by water, on the same\nlatitudes, and should be similarly influenced by nature. However, due to human intervention in the"),
    pos(150, 220),
    color(154, 205, 50),
    scale(0.5)
  ]);
  wait(1, ()=>{
    add([
      text("form of infrastructure, heavy population densities, and energy consumption, factors like pollution"),
      pos(150, 255),
      color(154, 205, 50),
      scale(0.5)
    ]);
    add([
      text("and average temperature in Manhattan and Montauk have changed!"),
      pos(150, 270),
      color(154, 205, 50),
      scale(0.5)
    ]);
  });
  /*wait(6, ()=>{
    add([
      text("Hit space to return to the home screen"),
      pos(150, 305),
      color(154, 205, 50),
      scale(0.5)
    ]);
    onKeyDown("space", ()=>{
      go("main");
    });
  });*/
});

scene("temperatureEducational", () =>{
    add([
      rect(width(), height()),
      pos(0, 0),
      color(0, 0, 0)
    ]);
    add([
      text("TEMPERATURE"),
      pos(150, 150),
      color(154, 205, 50)
    ]);
    add([
      text("Air temperature is a variable influenced by latitude, bodies of water, and infrastructure. From a"),
      pos(150, 200),
      color(154, 205, 50),
      scale(0.5)
    ]);
    add([
      text("nature lens, Manhattan and Montauk should have similar temperatures due to their similar"),
      pos(150, 220),
      color(154, 205, 50),
      scale(0.5)
    ]);
    wait(1, ()=>{
      add([
        text("properties. However, Manhattan has almost a 7 degree increase in temperature range variability "),
        pos(150, 240),
        color(154, 205, 50),
        scale(0.5)
      ]);
      add([
        text("(in F), due to the vast difference in infrastructure development by humans!"),
        pos(150, 260),
        color(154, 205, 50),
        scale(0.5)
      ]);
    });
    wait(2, ()=>{
      add([
        text("Hit space to return to go to the summary"),
        pos(150, 285),
        color(154, 205, 50),
        scale(0.5)
      ]);
      onKeyDown("space", ()=>{
        go("summary");
      });
    });
    
});

scene("transitionToSummary", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  add([
    text("YOU BEAT THE GAME!"),
    pos(width()/3.5, 200),
    color(154, 205, 50),
    scale(1.5)
  ]);
  wait(1, ()=>{
    add([
      text("Hit space to go to the summary"),
      pos(width()/2.75, 320),
      color(154, 205, 50),
      scale(0.5)
    ]);
    onKeyDown("space", ()=>{
      go("summary");
    });
  });
});

scene("parkour", () => {
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
    var killBlockLength = 100;
  
  if (map == "mon"){
    if (season == "win"){
      add([
        sprite("winterMontaukBG"),
        pos(0, height()-700),
        scale(0.7)
      ]);
    }else{
      add([
        sprite("summerMontaukBG"),
        pos(0, height()-700),
        scale(0.7)
      ]);
    }
  } else{
    if (season == "win"){
      add([
        sprite("winterManhattanBG"),
        pos(0, height()-700),
        scale(0.7)
      ]);
    }else{
      add([
        sprite("summerManhattanBG"),
        pos(0, height()-700),
        scale(0.7)
      ]);
    }
  }
  
  var lastPos = 150;
  var randomDist = rand(200,500);
  boxOff();

  const end = add([
    rect(50, height()),
    pos(width()-100, 0),
    area(),
    body({isStatic:true}),
    opacity(0),
    "end"
  ]);
  add([
      rect(width(), 48),
      pos(0, height() - 48),
      body({isStatic: true}),
      area(),
  ]);

  const player = add([
      sprite("bean"),
      pos(50,height() - 57 ),
      body(),
      area(),
  ]);

  blockPatGen(killBlockLength, 5, season);

  miniGameControls(player,320, 600, true);
  
  
  player.onCollide("killBlock", () =>{
      player.moveTo(50,height() - 100);
  });

  player.onCollide("end", () =>{
    if (pLevel != 1){
      pLevel++;
      go("parkour");
      debug.log("Halfway there :)"); 
    }else{
      setGravity(0);
      miniGameControls(player, 0, 0, false);
      add([
        text("You won!"),
        pos(400, 300),
        scale(0.75),
        color(0, 255, 0)
      ]);
      add([
        text("Hit space to continue to the blurb"),
        pos(400, 350),
        scale(0.75),
        color(0,255,0)
      ]);
      onKeyDown("space", ()=>{
        go("temperatureEducational");
      });
    }
  });
});    

scene("opening", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  add([
    text("INFRASTRUCTURE"),
    pos(150, 150),
    color(154, 205, 50)
  ]);
  add([
    text("Infrastructure includes any man-made building used for shelter, transportation or service."),
    pos(150, 200),
    color(154, 205, 50),
    scale(0.5)
  ]);
  add([
    text("Currently, Manhattan has 116,000 buildings, while Montauk has 1,500 buildings. Through\nunderstanding how much land each city has in square miles, we can see that Montauk"),
    pos(150, 220),
    color(154, 205, 50),
    scale(0.5)
  ]);
  wait(1, ()=>{
    add([
      text("has around 430. buildings/sq. mi., while Manhattan has 5110 buildings/sq. mi. This disparity is"),
      pos(150, 255),
      color(154, 205, 50),
      scale(0.5)
    ]);
    add([
      text("further shown through budgets regarding future infrastructure costs, where Manhattan has $3-6\nbillion of budget to Montauk’s $2-4.5 million of budget!"),
      pos(150, 270),
      color(154, 205, 50),
      scale(0.5)
    ]);
  });
  wait(2, ()=>{
    add([
      text("Hit space to continue"),
      pos(150, 320),
      color(154, 205, 50),
      scale(0.5)
    ]);
    onKeyDown("space", ()=>{
      go("opening2");
    });
  });
});

scene("opening2", () =>{
  add([
    rect(width(), height()),
    pos(0, 0),
    color(0, 0, 0)
  ]);
  add([
    text("POPULATION"),
    pos(150, 150),
    color(154, 205, 50)
  ]);
  add([
    text("Population directly influences the amount of natural resources and energy used. Using our"),
    pos(150, 200),
    color(154, 205, 50),
    scale(0.5)
  ]);
  add([
    text("knowledge on Manhattan and Montauk’s size (Manhattan= 22.7 sq. mi.; Montauk= 3.5 sq. mi.),\nwe can calculate the amount of people that fill up a certain area of each city. For Manhattan,"),
    pos(150, 220),
    color(154, 205, 50),
    scale(0.5)
  ]);
  wait(1, ()=>{
    add([
      text("there are around 73,000 people/sq. mi., compared to Montauk with around 9,700 people/sq. mi."),
      pos(150, 260),
      color(154, 205, 50),
      scale(0.5)
    ]);
    add([
      text("in summer, and 1,200 people/sq.mi. in winter. This means that during the winter season,\nManhattan’s population density is 59:1 when compared to Montauk!"),
      pos(150, 280),
      color(154, 205, 50),
      scale(0.5)
    ]);
  });
  wait(2, ()=>{
    add([
      text("Hit space to start the game"),
      pos(150, 325),
      color(154, 205, 50),
      scale(0.5)
    ]);
    onKeyDown("space", ()=>{
      go("long island");
    });
  });
});

//Lines under this are related to functions
//Makes Water Drops
function makeDrop(x){
    add([
      sprite("rain"),
      pos(x, -100),
      area(),
      scale(1.5),
      move(DOWN, 300),
      "drop"
    ]);
    if (i<50){
      wait(0.075, ()=>{
        makeDrop(rand(0, 1500));
        i++;
      });
    } 
    else{
      wait(2, () =>{
        currentLevel++;
        add([
          rect(600, 150),
          pos(375, 275)
        ])
        add([
          text("You won!"),
          pos(400, 300),
          scale(0.75),
          color(0, 255, 0)
        ]);
        add([
          text("Hit space to continue to the blurb"),
          pos(400, 350),
          scale(0.75),
          color(0,255,0)
        ]);
        onKeyDown("space", ()=>{
          go("dropEducational");
        });
      });
    }
}

//controls
function miniGameControls(object, speed, jumpHeight, isGravity) {
  setGravity(1600);
  onKeyDown("right", () =>{
      object.move(speed, 0);
  });
  
  onKeyDown("left", () =>{
      object.move(-speed, 0);
  });

  if (isGravity == true){
    onKeyDown("down", () =>{
        object.move(0, 0);
    });

    onKeyPress("up", () =>{
        if(object.isGrounded()){
        object.jump(jumpHeight);
        }
    }); 
  }
  else if(isGravity == false){
    onKeyDown("down", () =>{
        object.move(0, speed);
    });

    onKeyDown("up", () =>{
        object.move(0, -speed);
    }); 
  }
  

  
}

//killBlock spawner
function createKillBlock(length, xPos, season){
  if(season == "win"){
      add([
      rect(length, 30),
      pos(xPos,height()- 48 - 10 ),
      body({isStatic: true}),
      area(),
      color(189 ,222 , 236),
      "killBlock"
      ]);
  }
  else{
      add([
      rect(length, 30),
      pos(xPos,height()- 48 - 10 ),
      body({isStatic: true}),
      area(),
      color(0,0 ,0 ),
      "killBlock"
      ]);
  }
}

//Creates sideWalk
function createBlock(length, xPos){
  add([
  rect(length, 30),
  pos(xPos,height()- 48 - 10 ),
  body({isStatic: true}),
  area(),
  color(203, 206,  208),
  "block"
  ]);
}

function blockPatGen(killBlockLength, repeat, season){
  var lastPos = 150;
  var randomDist = rand(200,500)
  
  createBlock(lastPos, 0);
  createKillBlock(killBlockLength, lastPos, season);

  for(i = 0; i <= repeat - 1; i++){
  if (repeat == 5){
  randomDist = rand(225, 325);
  }
  else{
      randomDist = rand(275, 375);
  }
  createBlock(randomDist, lastPos + killBlockLength);
  createKillBlock(killBlockLength, lastPos += randomDist, season);
  }
  createBlock(width() - (lastPos + killBlockLength), lastPos + killBlockLength );
}

//Game Border function 
function boxOff (){
    add([
      rect(50, height()),
      pos(-50, 0,),
      area(),
      body({isStatic:true}),
      color(0, 0, 0)
    ]);
  
    add([
      rect(50, height()),
      pos(width(), 0,),
      body({isStatic:true}),
      area(),
      color(0, 0, 0)
    ]);
  
    add([
      rect(width(), 50),
      pos(0, -50),
      area(),
      body({isStatic:true}),
      color(0, 0, 0)
    ]);
  
    add([
      rect(width(), 50),
      pos(0, height()),
      body({isStatic:true}),
      area(),
      color(0, 0, 0)
    ]);
  }

go("title");