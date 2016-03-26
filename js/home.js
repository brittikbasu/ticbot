var val,
  tot,
  ran,
  ran1,
  ran2,
  x0WinCheck,
  winner,
  difficulty,
  predict,
  back,
  difficulty = "hard",
  counter = 0,
  audio = document.getElementById("audio"),
  insP1,
  insP2,
  d = 0,
  roboX = 0,
  single = 0,
  board = [
    [7, 7, 7],
    [7, 7, 7],
    [7, 7, 7]
  ];
var toggle = false;
var swapxand0 = function() {

  if (toggle) {
    document.getElementById('swapx').innerHTML = "X";
    roboX = 0;
    toggle = !toggle;

  } else {
    document.getElementById('swapx').innerHTML = "0";
    roboX = 1;
    toggle = !toggle;
  }
};

var quotes = ["Don't find fault, find a remedy; anybody can complain. ― Henry Ford ",
 "My best friend is the one who brings out the best in me. ― Henry Ford",
 "Whether you think you can, or you think you can't--you're right. ― Henry Ford",
"Obstacles are those frightful things you see when you take your eyes off your goals. ― Henry Ford",
"When everything seem to be going against you, remember that the airplane takes off against the wind, not with it. ― Henry Ford"];

var showPart = function(one, two, three, four) {
  if (one === 1) {
    document.getElementById("part1").className = "show animated slideInDown";
    document.getElementById("part2").className = "hide";
    document.getElementById("part3").className = "hide";
    document.getElementById("part4").className = "hide";


    console.log("User clicked on BACK > Hiding part2  | Showing part1 : Going Home");
  } else if (two === 1) {
    document.getElementById("part1").className = "hide";
    document.getElementById("part2").className = "show animated slideInUp";
    document.getElementById("part3").className = "hide";
    document.getElementById("part4").className = "hide";

    console.log("Hiding part1  | Showing part2 : Single Player Mode Selected");
  } else if (three === 1) {
    document.getElementById("part1").className = "hide";
    document.getElementById("part2").className = "hide";
    document.getElementById("part3").className = "show animated slideInUp";
    document.getElementById("part4").className = "hide";
    setTimeout(swapxand0, 300);

    console.log("Hiding part1&2  | Showing part3 : Two Player Mode Selected");
  } else if (four === 1) {
    document.getElementById("part1").className = "hide";
    document.getElementById("part2").className = "hide";
    document.getElementById("part3").className = "hide";
    document.getElementById("part4").className = "show animated slideInUp";


    console.log("Hiding part1&2  | Showing part3 : Two Player Mode Selected");
  }



};
var gameType = "double";
var p1Name = function() {
  d++;
  gameType = "single";
  insP1 = document.getElementById('player').value;
  insP2 = "Robo";
  single = 1;
  if (insP1 == "") {
    insP1 = "Player1";
  }
  document.getElementById("insertP1").innerHTML = insP1;
  document.getElementById("insertP2").innerHTML = insP2;
};
var pNames = function() {
  d++;
  gameType = "double";
  insP1 = document.getElementById('player1').value;
  insP2 = document.getElementById('player2').value;
  console.log("Player One's Name is : " + insP1);
  console.log("Player Two's Name is : " + insP2);
  single = 0;
  if (insP1 == "") {
    insP1 = "Player1";
  }
  if (insP2 == "") {
    insP2 = "Player2";
  }
  document.getElementById("insertP1").innerHTML = insP1;
  document.getElementById("insertP2").innerHTML = insP2;
};


//+++++++++++++++++MY GAME JS Start





// keepChecking1 Function
var keepChecking1 = function() {
  console.log("Inside keepChecking1();");
  var i;
  for (i = 0; i < 3; i++) {
    if (board[i][0] + board[i][1] + board[i][2] === 9) {
      console.log("p1 Wins! /Horizontal " + i);
      x0WinCheck = 1;
      console.log(x0WinCheck);
    } else if (board[0][i] + board[1][i] + board[2][i] === 9) {
      console.log("p1 Wins!/Vertical" + i);
      x0WinCheck = 1;
    }
  }

  if (x0WinCheck !== 1) {

    if (board[0][2] + board[1][1] + board[2][0] === 9) {
      console.log("p1 Wins! /Diagonal Right " + i);
      x0WinCheck = 1;
    } else if (board[0][0] + board[1][1] + board[2][2] === 9) {
      console.log("p1 Wins!/Diagonal Left" + i);
      x0WinCheck = 1;
    } else {
      if (x0WinCheck > 0) {
        console.log("found x in the previous if block");
      } else {
        console.log("Didn't find x in the previous if block");
        x0WinCheck = 0;
      }
    }

  }

};
var d1;
// keepChecking2 Function
var keepChecking2 = function() {
  console.log("Inside keepChecking2();");
  if (x0WinCheck !== 1) {
    var j;
    for (j = 0; j < 3; j++) {
      if (board[j][0] + board[j][1] + board[j][2] === 12) {
        console.log("p2 Wins! Horizontal" + j);
        x0WinCheck = 2;
      } else if (board[0][j] + board[1][j] + board[2][j] === 12) {
        console.log("p2 Wins! /Vertical" + j);
        x0WinCheck = 2;
      }
    }
    if (board[0][2] + board[1][1] + board[2][0] === 12) {
      console.log("p2 Wins!/Diagonal Right" + j);
      x0WinCheck = 2;
    } else if (board[0][0] + board[1][1] + board[2][2] === 12) {
      console.log("p2 Wins! /Diagonal Left " + j);
      x0WinCheck = 2;
    } else {
      d1 = 1;
      if (x0WinCheck > 0) {
        console.log("found x in the previous if block");
      } else {
        x0WinCheck = 0;
      }
    }
  } else {
    console.log("winner found in keepChecking1");
  }
};

// draw Function
var draw = function() {
  if (x0WinCheck === 1 || x0WinCheck === 2) {
    console.log("Win has occured, so, not checking for draw");
  } else {
    console.log("Inside draw();");
    var s0, s1, s2;
    s0 = board[0][0] + board[0][1] + board[0][2];
    s1 = board[1][0] + board[1][1] + board[1][2];
    s2 = board[2][0] + board[2][1] + board[2][2];
    tot = s0 + s1 + s2;
    console.log(tot);
    if (d1 === 1) {
      if (tot === 31) {
        document.getElementById("prompt").className = "hide";
        document.getElementById("inWinner").className = "animated flipInX";

        document.getElementById("announce").className = "show";
        document.getElementById("announce").innerHTML = "<h2>Draw!</h2>";

        document.getElementById('turn').innerHTML = "<h5>Play Again?</h5>";


      }
    } else if (tot === 35) {

      document.getElementById("announce").innerHTML = "<h2>Draw!</h2>";

      document.getElementById("announce").className = "show";

      document.getElementById("animate1").className = "animated flip";
    } else {
      console.log("Not a Draw.");
    }
  }
};

// winnerAnnounce Function
var winnerAnnounce = function() {
  var audio = document.getElementById("audio2"),
    audio2 = document.getElementById("audio2");
  console.log("inside winnerAnnounce();");
  keepChecking1();
  if (x0WinCheck !== 1) {
    keepChecking2();
    draw();
  }
  if (x0WinCheck === 1) {
    document.getElementById("cool").className += "animated flipInX";
    document.getElementById("turn").className = "hide";
    document.getElementById("prompt").className = "hide";
    document.getElementById("announce").className = "show";
    document.getElementById("announce").innerHTML = "<h2>" + insP1 + ", You Win!" + "</h2>";
    document.getElementById("thought").innerHTML = quotes[d];


    winner = insP1;
    console.log("And the Winner is " + insP1);

    audio.play();
  } else if (x0WinCheck === 2) {
    document.getElementById("cool").className += "animated flipInX";
    document.getElementById("turn").className = "hide";

    document.getElementById("inWinner").className += "animated flipInX";
    document.getElementById("prompt").className = "hide";
    document.getElementById("announce").className = "show";
    document.getElementById("announce").innerHTML = "<h2>" + insP2 + " Wins!" + "</h2>";
    document.getElementById("thought").innerHTML = quotes[d];


    console.log("hidden");

    winner = insP2;
    console.log("And the Winner is" + insP2);

    audio2.play();
  } else {
    console.log("Game is On!");
    console.log(tot);
  }
};
var k = true;
var no;
var cback = function() {
  k = !k;
  if (k === true) {
    no = 1;
  } else {
    no = 2;
  }
  back = "bg" + no;
  return back;

};


var player;



// boardPush Function
var boardPush = function(cor1, cor2) {


  console.log("****WHERE?****Inside boardPush()");
  console.log("****i**** boardPush()is called when any button on the board is pushed");


  console.log("single is " + single);
  if (single == 1) {
    player = {
      nextTurn: insP1,
      value: "X",
      push: 3
    };
  } else {

    if (counter % 2 === 0) {
      player = {
        nextTurn: insP2,
        value: "X",
        push: 3 //player one pushes 3
      };
    } else {
      player = {
        nextTurn: insP1,
        value: "0",
        push: 4 //player 2 pushes 4
          //7 stands for empty space
      };
    }
  }

  if (x0WinCheck > 0) {
    console.log(winner + " has won! no more buttons will be pushed. i'm tired...");
  } else {
    this.cor1 = cor1;
    this.cor2 = cor2;
    audio.play();
    document.getElementById('turn').innerHTML = "<h5>It's your turn " + player.nextTurn + "</h5>";
    document.getElementById("" + this.cor1 + this.cor2 + "B").innerHTML = player.value;
    document.getElementById("" + this.cor1 + this.cor2 + "B").disabled = true;
    console.log("=player 1 : " + "cor1 is " + cor1 + " || cor2 is " + cor2 + " || counter is " + counter);
    board[cor1][cor2] = player.push;
    cback();
    document.getElementById("changing").className = back;
    console.log("background class is " + back);
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    winnerAnnounce();
    counter++;
    console.log("counter is >>>>" + counter);


    if (counter > 4) {
      console.log(" DRAW! no place left for robo to play  :(");


    } else if (x0WinCheck > 0) {
      console.log("win  has occured and the winner is " + winner);
    } else if (single == 1) {
      setTimeout(roboBrains, 1150);
      setTimeout(winnerAnnounce, 1200);
      console.log(board[0]);
      console.log(board[1]);
      console.log(board[2]);
    } else if (single == 0) {}
  }

};
var boardRow, boardCol;

// roboBrains Function
var roboBrains = function() {
  console.log("Inside roboBrains();");
  audio.play();
  cback();
  document.getElementById("changing").className = back;
  console.log("background class is " + back);
  k++;

  mode();
  console.log("started");
  console.log(boardRow, boardCol);
  board[boardRow][boardCol] = 4;
  document.getElementById("" + boardRow + boardCol + "B").innerHTML = "R";
  document.getElementById("" + boardRow + boardCol + "B").disabled = true;
  var boardFun = "" + boardRow + boardCol + "B";

  console.log("Outside roboBrains();");

};

// mode Function
var mode = function() {
  console.log("Inside Mode");
  if (difficulty === "hard") {
    console.log("difficulty is " + difficulty);
    cleverRobo();
    if (predict === 3) {
      roboChampion();
      if (predict === 0) {
        roboPredicts();

      }
    } else if (predict === 0) {
      roboChampion();
      if (predict === 0) {
        roboPredicts();
      }
    }

  } else if (difficulty === "medium") {
    console.log("difficulty is " + difficulty);
    roboChampion();
    if (predict === 0) {
      roboPredicts();
    }
  } else if (difficulty === "easy") {
    console.log("difficulty is " + difficulty);
    roboPredicts();
  }
  console.log("Outside Mode");
};
// ranF Function
var ranF = function() {
  console.log("Inside RanF");
  audio.play();
  document.getElementById("changing").className = back;
  ran1 = Math.random();
  transform(ran1);
  ran1 = ran;
  console.log("this is the new ran1 : " + ran1);
  ran2 = Math.random();
  transform(ran2);
  ran2 = ran;
  console.log("this is the new ran2 : " + ran2);
  console.log("bp" + board[ran1][ran2]);
  if (board[ran1][ran2] === 7) {
    console.log("enters into IF on line 390");
    board[ran1][ran2] = 4;
    var rantos = "" + ran1 + ran2 + "B";
    console.log("Robo  " + ran1 + ":  " + ran2 + "" + rantos);
    console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
    boardRow = ran1;
    boardCol = ran2;
  } else {
    console.log("enters into else on line 395");
    ranF();
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
  }
  console.log("Outside RanF");

};
var transform = function(ranx) {
  console.log("Inside transform()");

  ran = ranx;
  console.log("Ive got ran: " + ran);
  if (ran < 0.33) {
    ran = 0;
  } else if (ran < 0.66) {
    ran = 1;
  } else if (ran < 0.99) {
    ran = 2;
  } else if (ran <= 1) {
    ran = Math.random();
    transform(ran);
  }
  console.log("this is transform and i have turned ran into: " + ran);
  return ran;
  console.log("Outside transform()");

};
var roboMoves = function() {
  console.log("Inside roboMoves()");

  var c1 = 0;
  var c2 = 0;
  for (c1 = 0; c1 < 3; c1++) {
    for (c2 = 0; c2 < 3; c2++) {
      if (insP1 === "Robo") {
        if (board[c1][c2] === 3) {
        }
      } else if (insP2 === "Robo") {
        if (board[c1][c2] === 4) {

        }
      }
    }
  }
  console.log("Inside roboMoves()");

};

var winPredict;

var roboPredicts = function() {
  console.log("inside roboPredicts");
  var b;
  winPredict = 0;
  for (b = 0; b < 3; b++) {
    if (board[b][0] + board[b][1] + board[b][2] === 13) {
      console.log("p1 MIGHT WIN! /Horizontal " + b);
      if (board[b][0] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = b;
        boardCol = 0;


      } else if (board[b][1] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = b;
        boardCol = 1;

      } else if (board[b][2] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = b;
        boardCol = 2;

      }
      winPredict = 1;
      console.log("winPredict IS : " + winPredict);
    } else if (winPredict !== 1 && board[0][b] + board[1][b] + board[2][b] === 13) {
      console.log("p1 MIGHT WIN!/Vertical" + b);

      winPredict = 1;
      console.log("winPredict IS : " + winPredict);
      if (board[0][b] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 0;
        boardCol = b;

      } else if (board[1][b] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = b;

      } else if (board[2][b] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 2;
        boardCol = b;

      }
    }
  }
  if (winPredict === 0) {
    if (board[0][2] + board[1][1] + board[2][0] === 13) {
      winPredict = 1;

      console.log("p1 MIGHT WIN! /Diagonal Right " + b);
      console.log("winPredict IS : " + winPredict);
      if (board[0][2] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 0;
        boardCol = 2;


      } else if (board[1][1] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = 1;
      } else if (board[2][0] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 2;
        boardCol = 0;
      }
    } else if (board[0][0] + board[1][1] + board[2][2] === 13) {
      console.log("p1 MIGHT WIN!/Diagonal Left" + b);
      if (board[0][0] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 0;
        boardCol = 0;

      } else if (board[1][1] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = 1;

      } else if (board[2][2] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 2;
        boardCol = 2;
      }
    } else {
      console.log("nothing found in roboPredicts");
      ranF();
    }
  }
  console.log("inside roboPredicts");
};
var roboChampion = function() {
  console.log("Inside roboChampion");
  winPredict = 0;
  console.log(board[1]);
  console.log("win predict is >>> " + winPredict);
  console.log("Inside roboChampion");
  //here the robo scans the matrix if he has a chance to win. If he has a chance then he places his R where it's a 7 on the board
  var c, cPredict;
  for (c = 0; c < 3; c++) {
    if (winPredict === 0 && board[c][0] + board[c][1] + board[c][2] === 15) {
      console.log("ROBO CHAMPION! /Horizontal " + c);
      if (board[c][0] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = c;
        boardCol = 0;

        console.log("found Robo Champion Here");

      } else if (board[c][1] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = c;
        boardCol = 1;

        console.log("found Robo Champion Here");


      } else if (board[c][2] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = c;
        boardCol = 2;

        console.log("found Robo Champion Here");

      }
      cPredict = 1;
      console.log("cPredict IS : " + winPredict);
    } else if (winPredict === 0 && board[0][c] + board[1][c] + board[2][c] === 15) {
      console.log("ROBO CHAMPION! /Horizontal " + c);
      if (board[0][c] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 0;
        boardCol = c;

        console.log("found Robo Champion Here");

      } else if (board[1][c] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = c;
        console.log("found Robo Champion Here");


      } else if (board[2][c] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 2;
        boardCol = c;

        console.log("found Robo Champion Here");

      }
      cPredict = 1;
      console.log("cPredict IS : " + winPredict);
    } else if (winPredict !== 0 && board[0][c] + board[1][c] + board[2][c] === 15) {
      console.log("ROBO CHAMPION!/Vertical" + c);
      cPredict = 1;
      console.log("cPredict IS : " + cPredict);
      if (board[0][c] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 0;
        boardCol = c;

        console.log("found Robo Champion Here");

      } else if (board[1][c] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = c;

        console.log("found Robo Champion Here");

      } else if (board[2][c] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 2;
        boardCol = c;

        console.log("found Robo Champion Here");

      }
    }

  }
  console.log("c is " + c);
  if (cPredict === 0) {
    if (board[0][2] + board[1][1] + board[2][0] === 15) {
      console.log("Robo Champion! /Diagonal Right " + b);
      console.log("winPredict IS : " + cPredict);
      if (board[0][2] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 0;
        boardCol = 2;

        console.log("found Robo Champion Here");


      } else if (board[1][1] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = 1;

        console.log("found Robo Champion Here");


      } else if (board[2][0] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 2;
        boardCol = 0;

        console.log("found Robo Champion Here");

      }
    } else if (board[0][0] + board[1][1] + board[2][2] === 15) {
      console.log("ROBO CHAMPION!/Diagonal Left" + b);
      if (board[0][0] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 0;
        boardCol = 0;

        console.log("found Robo Champion Here");

      } else if (board[1][1] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = 1;

        console.log("found Robo Champion Here");

      } else if (board[2][2] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 2;
        boardCol = 2;
        console.log("found Robo Champion Here");
      }
    }
  } else if (cPredict === 1) {
    predict = 1;
    console.log("predict is equal to " + predict);
    console.log("NO Robo Champion Here");
  } else {
    predict = 0;
    console.log("predict is equal to " + predict);
    console.log("NO Robo Champion Here");
  }
  console.log("Outside roboChampion");
};

var cleverRobo = function() {
  console.log("inside clever robo >>>");
  var decmkr = Math.random();
  if (counter === 1) {
    if (decmkr < 0.51) {
      if (board[0][0] === 3) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = 1;


      } else if (board[0][2] === 3) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 2;
        boardCol = 1;


      } else if (board[2][0] === 3) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 0;
        boardCol = 1;


      } else if (board[2][2] === 3) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = 0;

      } else {
        predict = 3;
        console.log("predict is " + predict);
      }
    } else {
      if (board[1][1] === 7) {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        boardRow = 1;
        boardCol = 1;

      } else {
        cleverRobo();
      }
    }


  } else {
    console.log("cleverness not applied");
    predict = 0;
    console.log("predict is now " + predict);
  }
  console.log("inside clever robo >>>");

};

var beforePush = function() {
  console.log("inside beforePush()");
  if(d<quotes.length-1){
    d++;
  }
  else{
    d = 0;
  }
  document.getElementById("thought").innerHTML = quotes[d];



  if (roboX == 1 && gameType == "single") {
    console.log(roboX);
    setTimeout(roboBrains, 300);
    counter++;

    document.getElementById("turn").innerHTML = "<h5>It's your turn " + insP1 + "</h5>";


  } else {

    console.log("roboX is", roboX);


    document.getElementById("turn").innerHTML = "<h5>Please begin " + insP1 + ", you're X<h5>";
  }
  console.log("Outside beforePush()");

};


var boardReset = function() {
  document.getElementById("announce").className = "hide";
  document.getElementById("announce").innerHTML = "";

  document.getElementById("prompt").className = "show";


  console.log("inside boardReset()");
  x0WinCheck = 0;
  counter = 0;

  board = [
    [7, 7, 7],
    [7, 7, 7],
    [7, 7, 7]
  ];
  console.log("board reset done!" + board);
  var limit = 2,
    n = 0;
  for (var m = 0; m < 3; m++) {

    document.getElementById("" + m + "0" + "B").innerHTML = "";
    document.getElementById("" + m + "0" + "B").disabled = false;
    document.getElementById("" + m + "1" + "B").innerHTML = "";
    document.getElementById("" + m + "1" + "B").disabled = false;
    document.getElementById("" + m + "2" + "B").innerHTML = "";
    document.getElementById("" + m + "2" + "B").disabled = false;
    for (var r = 0; r <= 2; r++) {
      if (m > limit) {
        m = 1;
        n = 0;
      }
    }
  }
  document.getElementById("turn").className = "yourturn";
  document.getElementById("turn").innerHTML = "<h5>Please begin " + insP1 + ", you're X<h5>";
  console.log("Outside boardReset()");
};

var drawFlag;
var boardScan = function() {
  for (var h = 0; h < 3; h++) {
    if (board[h][0] !== 7 || board[h][1] !== 7 || board[h][2] !== 7) {
      alert("7 found" + h);
      drawFlag = 0;
      console.log("" + board[h][0] + board[h][1] + board[h][2]);
      alert("" + h + drawey);

    } else {
      drawFlag++;
    }
  }
};
