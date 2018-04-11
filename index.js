'use strict';
var yourCharacter = "";
var yourCharacterName;
var opponentHealth = 100;
var opponent;
var yourCharacterPicture;
var yourStrength;
var yourAgility;
var yourIntellect;
var yourVitality;
var yourCharisma;
var yourLevel;
var yourClass;
var yourExperience = 0;
var boardSize = 8;
var currentSquare = 0;
// var playerDirection;

var squares; // define globally once, going to be array of individual squares

var SQUARE_SIZE = 60;
// pac man direction
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

var SPACE_BAR_KEY = 32;
var ARROW_LEFT = 37;
var ARROW_UP = 38;
var ARROW_RIGHT = 39;
var ARROW_DOWN = 40;

var MOVE_RIGHT_EVENT = 1;
var MOVE_LEFT_EVENT = 2;
var MOVE_DOWN_EVENT = 3;
var MOVE_UP_EVENT = 4;
var FIND_TREASURE_EVENT = 5;

var yourBoardIcon;

var SQ_STATUS_PAC_ON_BLANK = 1;
var SQ_STATUS_TREASURE_ON_BLANK = 2;
var SQ_STATUS_PAC_ON_TREASURE_BAD = 3;
var SQ_STATUS_PAC_ON_TREASURE_MEDIUM = 4;
var SQ_STATUS_PAC_ON_TREASURE_GOOD = 5;
var SQ_STATUS_NPC_ON_BLANK = 6;
var SQ_STATUS_PAC_ON_NPC = 7;   // Not sure if you need this one???
var SQ_STATUS_PAC_ON_ICHABOD_TRISKET = 8;
var SQ_STATUS_ICHABOD_TRISKET = 9;
var SQ_STATUS_PAC_ON_FLOJO_SUMMERSTREAM = 10;
var SQ_STATUS_FLOJO_SUMMERSTREAM = 11;

var SQ_STATUS_TREASURE_BAD = 20;
var SQ_STATUS_TREASURE_MEDIUM = 21;
var SQ_STATUS_TREASURE_GOOD = 22;

var SQ_STATUS_BLANK = 100;

var TREASURE_INDEX_POSITION = 0;
var TREASURE_INDEX_TYPE = 1;

var NPC_INDEX_POSITION = 0;
var NPC_INDEX_NAME = 1;

var TREASURE_TYPE_BAD = 1;
var TREASURE_TYPE_MEDIUM = 2;
var TREASURE_TYPE_GOOD = 3;

var NPC_ICHABOD_TRISKET = 1;
var NPC_FLOJO_SUMMERSTREAM = 2


var ICHABOD_TRISKET_CONVERSATION= "How's it hangin' "+yourCharacter+".\nIn future updates of the game I'll be able to sell you stuff."
var FLOJO_SUMMERSTREAM_CONVERSATION= "Peace out "+yourCharacter+".\nIn future updates of the game you'll be able to sell me stuff."


var ICON_TREASURE = "<img src='adlani grass.jpg'>";

var treasures = new Array;
var NPCs = new Array;
var yourLoot = new Array;

var themesong = new Audio("peanuts song.mp3");
var hotFudgeSound = new Audio("hot fudge sound.wav");
var denchSound = new Audio("dench sound.wav");
var carlSound = new Audio("carl sound.wav");
var mrMugglesSound = new Audio("mr muggles sound.wav")
var biggyCheeseSound = new Audio("biggy cheese sound.wav")
var bizmoFunionsSound = new Audio("bizmo funions sound.wav");
themesong.loop = true;
themesong.volume = 0.05;

// ------------------------------------------------

function chooseAdlani() {
  if (yourCharacter != "") {
    alert("You already chose " + yourCharacter + ".")
  } else {
    biggyCheeseSound.play();
    document.getElementById("title").style.visibility = "visible";
    characterSelector.parentNode.removeChild(characterSelector);
    document.getElementById("yourStrength").innerHTML = 4;
    document.getElementById("yourAgility").innerHTML = 1;
    document.getElementById("yourIntellect").innerHTML = 7;
    document.getElementById("yourVitality").innerHTML = 10;
    document.getElementById("yourCharisma").innerHTML = 5;
    yourCharacter = "Biggy Cheese";
    yourCharacterName = "BIGGY CHEESE";
    banana.innerHTML = "<img src= 'adlani baby.jpg'>";
    yourLevel = 1;
    yourStrength = 4;
    yourAgility = 1;
    yourIntellect = 7;
    yourVitality = 10;
    yourCharisma = 5;
    yourBoardIcon = "<img src= 'adlani grass.jpg'>"
    calculateClass();
    title.innerHTML = "YOUR NAME IS " + yourCharacterName + ", LEVEL " + yourLevel + " " + yourClass;

    var i;
    for (i = 0; i < squares.length; i++) {
      processSquare(i);
    }

    return;
  }

}

// -------------

function chooseNoah() {
  if (yourCharacter != "") {
    alert("You already chose " + yourCharacter + ".");
  } else {
    denchSound.play();
    document.getElementById("title").style.visibility = "visible";
    characterSelector.parentNode.removeChild(characterSelector);
    document.getElementById("yourStrength").innerHTML = 5;
    document.getElementById("yourAgility").innerHTML = 10;
    document.getElementById("yourIntellect").innerHTML = 8;
    document.getElementById("yourVitality").innerHTML = 4;
    document.getElementById("yourCharisma").innerHTML = 5;
    yourCharacter = "Dench";
    yourCharacterName = "DENCH";
    banana.innerHTML = "<img src= 'noah baby.jpg'>";
    yourLevel = 1;
    yourStrength = 5;
    yourAgility = 10;
    yourIntellect = 8;
    yourVitality = 4;
    yourCharisma = 5;
    calculateClass();
    yourBoardIcon = "<img src= 'noah grass.jpg'>";
    processSquare(currentSquare);
    title.innerHTML = "YOUR NAME IS " + yourCharacterName + ", LEVEL " + yourLevel + " " + yourClass;
    var i;
    for (i = 0; i < squares.length; i++) {
      processSquare(i);
    }
    return
  }
}


function chooseJoey() {
  if (yourCharacter != "") {
    alert("You already chose " + yourCharacter + ".")
  } else {
    bizmoFunionsSound.play();
    document.getElementById("title").style.visibility = "visible";
    characterSelector.parentNode.removeChild(characterSelector);
    document.getElementById("yourStrength").innerHTML = 5;
    document.getElementById("yourAgility").innerHTML = 3;
    document.getElementById("yourIntellect").innerHTML = 9;
    document.getElementById("yourVitality").innerHTML = 6;
    document.getElementById("yourCharisma").innerHTML = 10;
    yourCharacter = "Bizmo Funions";
    yourCharacterName = "BIZMO FUNIONS";
    banana.innerHTML = "<img src= 'joey baby.jpg'>";
    yourLevel = 1;
    yourStrength = 5;
    yourAgility = 3;
    yourIntellect = 9;
    yourVitality = 6;
    yourCharisma = 10;
    yourBoardIcon = "<img src= 'joey grass.jpg'>"
    calculateClass();
    processSquare(currentSquare);
    title.innerHTML = "YOUR NAME IS " + yourCharacterName + ", LEVEL " + yourLevel + " " + yourClass;
    var i;
    for (i = 0; i < squares.length; i++) {
      processSquare(i);
    }
    return
  }
}


function chooseCarlo() {
  if (yourCharacter != "") {
    alert("You already chose " + yourCharacter + ".")
  } else {
    carlSound.play();
    document.getElementById("title").style.visibility = "visible";
    characterSelector.parentNode.removeChild(characterSelector);
    document.getElementById("yourStrength").innerHTML = 10;
    document.getElementById("yourAgility").innerHTML = 3;
    document.getElementById("yourIntellect").innerHTML = 2;
    document.getElementById("yourVitality").innerHTML = 8;
    document.getElementById("yourCharisma").innerHTML = 4;
    yourCharacter = "Carl";
    yourCharacterName = "CARL";
    banana.innerHTML = "<img src= 'carlo baby.jpg'>";
    yourLevel = 1;
    yourStrength = 10;
    yourAgility = 3;
    yourIntellect = 2;
    yourVitality = 8;
    yourCharisma = 4;
    yourBoardIcon = "<img src= 'carlo grass.jpg'>";
    processSquare(currentSquare);
    calculateClass();
    title.innerHTML = "YOUR NAME IS " + yourCharacterName + ", LEVEL " + yourLevel + " " + yourClass;
    var i;
    for (i = 0; i < squares.length; i++) {
      processSquare(i);
    }
    return;
  }
}

// -------------------------

function chooseDiego() {
  if (yourCharacter != "") {
    alert("You already chose " + yourCharacter + ".")
  } else {
    mrMugglesSound.play();
    document.getElementById("title").style.visibility = "visible";
    characterSelector.parentNode.removeChild(characterSelector);
    document.getElementById("yourStrength").innerHTML = 2;
    document.getElementById("yourAgility").innerHTML = 7;
    document.getElementById("yourIntellect").innerHTML = 10;
    document.getElementById("yourVitality").innerHTML = 4;
    document.getElementById("yourCharisma").innerHTML = 6;
    yourCharacter = "Mr. Muggle";
    yourCharacterName = "MR. MUGGLE";
    banana.innerHTML = "<img src= 'diego baby.jpg'>";
    yourLevel = 1;
    yourStrength = 2;
    yourAgility = 7;
    yourIntellect = 10;
    yourVitality = 4;
    yourCharisma = 6;
    yourBoardIcon = "<img src= 'diego grass.jpg'>";
    processSquare(currentSquare);
    calculateClass();
    title.innerHTML = "YOUR NAME IS " + yourCharacterName + ", LEVEL " + yourLevel + " " + yourClass;
    var i;
    for (i = 0; i < squares.length; i++) {
      processSquare(i);
    }
    return
  }
}

// --------------------------------------------

function chooseJon() {
  if (yourCharacter != "") {
    alert("You already chose " + yourCharacter + ".")
  } else {
    hotFudgeSound.play();
    document.getElementById("title").style.visibility = "visible";
    characterSelector.parentNode.removeChild(characterSelector);
    document.getElementById("yourStrength").innerHTML = 8;
    document.getElementById("yourAgility").innerHTML = 8;
    document.getElementById("yourIntellect").innerHTML = 7;
    document.getElementById("yourVitality").innerHTML = 7;
    document.getElementById("yourCharisma").innerHTML = 5;
    yourCharacter = "Hot Fudge";
    yourCharacterName = "HOT FUDGE";
    banana.innerHTML = "<img src= 'jon baby.jpg'>";
    yourLevel = 1;
    yourStrength = 8;
    yourAgility = 8;
    yourIntellect = 7;
    yourVitality = 7;
    yourCharisma = 5;
    yourBoardIcon = "<img src= 'jon grass.jpg'>";
    processSquare(currentSquare);
    calculateClass();
    title.innerHTML = "YOUR NAME IS " + yourCharacterName + ", LEVEL " + yourLevel + " " + yourClass;
    var i;
    for (i = 0; i < squares.length; i++) {
      processSquare(i);
    }
    return

  }
}

// -----------------------------------------
function joeyHover() {
  document.getElementById("characterSpecialty").innerHTML = "kills enemies with jokes";
  document.getElementById("characterWeakness").innerHTML = "weak to punches";
  document.getElementById("yourStrength").innerHTML = "5";
  document.getElementById("yourAgility").innerHTML = "3";
  document.getElementById("yourIntellect").innerHTML = "9";
  document.getElementById("yourVitality").innerHTML = "6";
  document.getElementById("yourCharisma").innerHTML = "10";
}

// -----------------------------------------

function adlaniHover() {
  document.getElementById("characterSpecialty").innerHTML = "takes hits like a champ";
  document.getElementById("characterWeakness").innerHTML = "vulnerable to throat chops";
  document.getElementById("yourStrength").innerHTML = "4";
  document.getElementById("yourAgility").innerHTML = "1";
  document.getElementById("yourIntellect").innerHTML = "7";
  document.getElementById("yourVitality").innerHTML = "10";
  document.getElementById("yourCharisma").innerHTML = "5";
}

// -----------------------------------------

function noahHover() {
  document.getElementById("characterSpecialty").innerHTML = "enjoys throat chopping";
  document.getElementById("characterWeakness").innerHTML = "spazzes out and misses attacks";
  document.getElementById("yourStrength").innerHTML = "5";
  document.getElementById("yourAgility").innerHTML = "10";
  document.getElementById("yourIntellect").innerHTML = "8";
  document.getElementById("yourVitality").innerHTML = "4";
  document.getElementById("yourCharisma").innerHTML = "5";
}

// -----------------------------------------

function diegoHover() {
  document.getElementById("characterSpecialty").innerHTML = "very smart";
  document.getElementById("characterWeakness").innerHTML = "weak attacks";
  document.getElementById("yourStrength").innerHTML = "2";
  document.getElementById("yourAgility").innerHTML = "7";
  document.getElementById("yourIntellect").innerHTML = "10";
  document.getElementById("yourVitality").innerHTML = "4";
  document.getElementById("yourCharisma").innerHTML = "6";
}

// -----------------------------------------

function carloHover() {
  document.getElementById("characterSpecialty").innerHTML = "punches hard";
  document.getElementById("characterWeakness").innerHTML = "vulnerable to insults";
  document.getElementById("yourStrength").innerHTML = "10";
  document.getElementById("yourAgility").innerHTML = "3";
  document.getElementById("yourIntellect").innerHTML = "2";
  document.getElementById("yourVitality").innerHTML = "8";
  document.getElementById("yourCharisma").innerHTML = "4";
}

// -----------------------------------------

function jonHover() {
  document.getElementById("characterSpecialty").innerHTML = "no weaknesses";
  document.getElementById("characterWeakness").innerHTML = "no Specialty";
  document.getElementById("yourStrength").innerHTML = "8";
  document.getElementById("yourAgility").innerHTML = "8";
  document.getElementById("yourIntellect").innerHTML = "7";
  document.getElementById("yourVitality").innerHTML = "7";
  document.getElementById("yourCharisma").innerHTML = "5";
}

// -----------------------------------------
function pauseThemeSong() {
  themesong.pause();
}

function playThemeSong() {
  themesong.play();
}
//--------------------------------------player movment

// function {
//   document.getElementById("goBattle").style.visibility = "visible";
// }

// Enter your js code Her


document.onkeydown = checkKey;

function checkKey(evt) {
  // this line of code was needed due to old browsers, possibly firefox, Nathan had an issue
  evt = evt || window.event;

  //console.log ("Keycode pressed from event: " + evt.keyCode);

  var key = evt.keyCode;
  switch (key) {
    case ARROW_RIGHT:

      console.log("Right key is pressed");
      processEvent(currentSquare, MOVE_RIGHT_EVENT); // ppp
      break;
    case ARROW_LEFT:

      console.log("left key is pressed");
      processEvent(currentSquare, MOVE_LEFT_EVENT); // ppp
      break;
    case ARROW_DOWN:

      console.log("down key is pressed");
      processEvent(currentSquare, MOVE_DOWN_EVENT); // ppp
      break;
    case ARROW_UP:

      console.log("Up key is pressed");
      processEvent(currentSquare, MOVE_UP_EVENT); // ppp
      break;
    default:

      // do nothing
  } // end switch

}

function processEvent(pos, code) {
  switch (code) {
    case MOVE_RIGHT_EVENT:
      if (checkLegalMove(currentSquare, RIGHT) == false) return;

      currentSquare++;
      // playerDirection = RIGHT;
      processSquare(currentSquare - 1);
      processSquare(currentSquare);

      break;
    case MOVE_LEFT_EVENT:
      if (checkLegalMove(currentSquare, LEFT) == false) return;

      currentSquare = currentSquare - 1;
      //playerDirection = LEFT;
      processSquare(currentSquare);
      processSquare(currentSquare + 1);


      break;
    case MOVE_DOWN_EVENT:
      if (checkLegalMove(currentSquare, DOWN) == false) return;

      currentSquare = currentSquare + boardSize;
      //playerDirection = DOWN;
      processSquare(currentSquare - boardSize);
      processSquare(currentSquare);


      break;
    case MOVE_UP_EVENT:
      if (checkLegalMove(currentSquare, UP) == false) return;

      currentSquare = currentSquare - boardSize;
      //playerDirection = UP;
      processSquare(currentSquare + boardSize);

      processSquare(currentSquare);

      break;
      // case FIND_TREASURE_EVENT:
      //  if (currentSquare==) return;
      //
      //  currentSquare=currentSquare-boardSize;
      //  playerDirection = UP;
      //  processSquare(currentSquare);
      //  processSquare(currentSquare+boardSize);
      //
      //  break;
    default:

  }
}

// -------------------------------------------------

function checkLegalMove(position, direction) {
  switch (direction) {
    case UP:

      if (position < boardSize) return false;
      break;

    case DOWN:

      if (position > (boardSize * boardSize) - (boardSize + 1)) return false;
      break;

    case LEFT:

      if (position % boardSize == 0)
        return false;

      break;

    case RIGHT:

      if ((position % boardSize) == (boardSize - 1))
        return false;

      break;

    default:

  } // end switch

  return true;

}

// ---------------------------------------

function processSquare(pos) {
  var squareStatus = getSquareStatus(pos); // ppp
  //var squares = document.querySelectorAll('.square');  // faster to get first?

  //console.log ("Get Square Status called.  Status is " + squareStatus);
  switch (squareStatus) {
    case SQ_STATUS_PAC_ON_BLANK:

      squares[pos].innerHTML = yourBoardIcon;
      break;

    case SQ_STATUS_PAC_ON_TREASURE_BAD:

      // what treasue does
      squares[pos].innerHTML = yourBoardIcon;
      switch (squares[pos].innerHTML) {
        case "<img src= 'treasure 1.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 1 sidebar.jpg'>";
          break;
        case "<img src= 'treasure 2.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 2 sidebar.jpg'>";
          break;
        case "<img src= 'treasure 3.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 3 sidebar.jpg'>";
          break;
        case "<img src= 'treasure 4.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 4 sidebar.jpg'>";
          break;
        default:
      }
      alert("bad treasure found");
      getBadTreasure();
      deleteTreasure(pos);
      break;


    case SQ_STATUS_PAC_ON_TREASURE_MEDIUM:

      // what treasue does
      squares[pos].innerHTML = yourBoardIcon;
      switch (squares[pos].innerHTML) {
        case "<img src= 'treasure 1.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 1 sidebar.jpg'>";
          break;
        case "<img src= 'treasure 2.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 2 sidebar.jpg'>";
          break;
        case "<img src= 'treasure 3.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 3 sidebar.jpg'>";
          break;
        case "<img src= 'treasure 4.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 4 sidebar.jpg'>";
          break;
        default:
      }
      alert("medium treasure found");
      deleteTreasure(pos);
      getMediumTreasure();
      break;

    case SQ_STATUS_PAC_ON_TREASURE_GOOD:

      // what treasue does
      squares[pos].innerHTML = yourBoardIcon;
      switch (squares[pos].innerHTML) {
        case "<img src= 'treasure 1.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 1 sidebar.jpg'>";
          break;
        case "<img src= 'treasure 2.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 2 sidebar.jpg'>";
          break;
        case "<img src= 'treasure 3.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 3 sidebar.jpg'>";
          break;
        case "<img src= 'treasure 4.jpg'>":
          document.getElementById("sidebarPicture").innerHTML= "<img src= 'treasure 4 sidebar.jpg'>";
          break;
        default:
      }
      document.getElementById("sidebarTitle").innerHTML= "";
      document.getElementById("sidebarText").innerHTML= "";
      alert("good treasure found");
      deleteTreasure(pos);
      getGoodTreasure();
      break;

    case SQ_STATUS_TREASURE_BAD:

      // show bad treasure
      showTreasure(pos)
      break;


    case SQ_STATUS_TREASURE_MEDIUM:

      // process medium
      showTreasure(pos)
      break;

    case SQ_STATUS_TREASURE_GOOD:

      // process good
      showTreasure(pos)
      break;

    case SQ_STATUS_PAC_ON_ICHABOD_TRISKET:

      // what treasue does
      squares[pos].innerHTML = "<img src= 'ichabod trisket grass.jpg'>";
      document.getElementById("sidebarPicture").innerHTML= "<img src= 'ichabod trisket big.jpg'>";
      document.getElementById("sidebarTitle").innerHTML= "ICHABOD TRISKET";
      document.getElementById("sidebarText").innerHTML= "An extremly masculine shirtless man who once starred in the popular mexican sitcom, Salty Zebras. Now he mows lawns for minimum wage. Spend 1 XP to buy a good treasure.";
      alert(ICHABOD_TRISKET_CONVERSATION)
      break;
      // var btn = document.createElement("BUTTON");                       // Create a <p> element
      // var t = document.createTextNode("Purchase");      // Create a text node
      // btn.appendChild(t);                                          // Append the text to <p>
      // document.getElementById("sidebarOptionalButton").appendChild(btn);
      // btn.addEventListener('click',ichabodTrisketPurchase());

    case SQ_STATUS_ICHABOD_TRISKET:;

      squares[pos].innerHTML = "<img src= 'ichabod trisket grass.jpg'>";

      break;
    case SQ_STATUS_PAC_ON_FLOJO_SUMMERSTREAM:

      // what treasue does
      squares[pos].innerHTML = "<img src= 'flojo summerstream grass.jpg'>";
      document.getElementById("sidebarPicture").innerHTML= "<img src= 'flojo summerstream big.jpg'>";
      document.getElementById("sidebarTitle").innerHTML= "FLOJO SUMMERSTREAM";
      document.getElementById("sidebarText").innerHTML= "Flojo holds the world record for most chelaxed person. He only uses 7% of his 372 total brain cells due to his marijuana addiction. Sell a treasure for 1 XP.";
      alert(FLOJO_SUMMERSTREAM_CONVERSATION)
      break;
    case SQ_STATUS_FLOJO_SUMMERSTREAM:;

      squares[pos].innerHTML = "<img src= 'flojo summerstream grass.jpg'>";

      break;
    case SQ_STATUS_NPC_ON_BLANK:

      // process good
      break;

    case SQ_STATUS_BLANK:

      squares[pos].innerHTML = "<img src= 'grass.jpg'>";
      document.getElementById("sidebarPicture").innerHTML= "<img src= 'sidebar grass.jpg'>";
      document.getElementById("sidebarTitle").innerHTML= "GRASS";
      document.getElementById("sidebarText").innerHTML= "Just some grass, nothing to see here. An occaisonal dog turd. Looks like Ichabod hasn't been trimming it enough lately.";

      break;

    default:
      console.log("Error in renderGame switch, invalid square status : " + squareStatus);

  } // end switch

}

function showTreasure(pos) {
  //var squares = document.querySelectorAll('.square');
  var treasureNum = Math.floor((Math.random() * 4) + 1);
  switch (treasureNum) {
    case 1:
      squares[pos].innerHTML = "<img src='treasure 1.jpg'>";
    break;
    case 2:
      squares[pos].innerHTML = "<img src='treasure 2.jpg'>";
      break;
    case 3:
      squares[pos].innerHTML = "<img src='treasure 3.jpg'>";
      break;
    case 4:
      squares[pos].innerHTML = "<img src='treasure 4.jpg'>";
      break;
    default:

  }
}
// function showNPC(pos,squareStatus) {
//   //var squares = document.querySelectorAll('.square');
//
//   switch (squareStatus) {
//     case SQ_STATUS_ICHABOD_TRISKET:
//       squares[pos].innerHTML = "<img src='ichabod trisket grass.jpg'>";
//       break;
//     case SQ_STATUS_FLOJO_SUMMERSTREAM:
//       squares[pos].innerHTML = "<img src='flojo summerstream grass.jpg'>";
//       break;
//     default:
//
//   }
//
// }

// ------------------------------
function deleteTreasure(pos) {
  var i = 0;
  var treasureFound = false;
  while ((treasureFound == false) && (i < treasures.length)) {
    if (treasures[i][TREASURE_INDEX_POSITION] == pos) {
      treasures.splice(i, 1)
      treasureFound = true;
    }
    else i++
  }
}

function getBadTreasure() {
  var lootAmount = Math.floor((Math.random() * 3 + 1));
  var i;
  for (i = 0; i < lootAmount; i++) {
    var lootNumber = Math.floor((Math.random() * 12 + 1));
    switch (lootNumber) {
      case 1:
        yourLoot.push("banana peel");
        break;
      case 2:
        yourLoot.push("old spice deoderant");
        break;
      case 3:
        yourLoot.push("bottle of lard");
        break;
      case 4:
        yourLoot.push("a pile of bat guano");
        break;
      case 5:
        yourLoot.push("used band-aid");
        break;
      case 6:
        yourLoot.push("a knickleback album");
        break;
      case 7:
        yourLoot.push("some moldy cole slaw");
        break;
      case 8:
        yourLoot.push("Biggy Cheese's long lost sandal");
        break;
      case 9:
        yourLoot.push("a cat");
        break;
      case 10:
        yourLoot.push("rusty bucket o' fish heads");
        break;
      case 11:
        yourLoot.push("donkey teeth");
        break;
      case 12:
        yourLoot.push("Sharknado 5 DVD");
        break;

      default:

    }
  }
}

function getMediumTreasure() {
  var lootAmount = Math.floor((Math.random() * 3 + 1));
  var lootFoundAlert;
  var i;
  for (i = 0; i < lootAmount; i++) {
    var lootNumber = Math.floor((Math.random() * 13 + 1));
    switch (lootNumber) {
      case 1:
        yourLoot.push("The Mantle of Virginity");
        break;
      case 2:
        yourLoot.push("Pokemon card");
        break;
      case 3:
        yourLoot.push("box labeled GABI'S ESTUCHE");
        break;
      case 4:
        yourLoot.push("angry inchworm in a tupperware");
        break;
      case 5:
        yourLoot.push("cell phone charger");
        break;
      case 6:
        yourLoot.push("the urn of a very particular lime");
        break;
      case 7:
        yourLoot.push("a chocolate coated camel hemorrhoid");
        break;
      case 8:
        yourLoot.push("a Peewee Herman doll");
        break;
      case 9:
        yourLoot.push("a talking map");
        break;
      case 10:
        yourLoot.push("a talking backpack");
        break;
      case 11:
        yourLoot.push("glowing pill");
        break;
      case 12:
        yourLoot.push("The Temporary Tattoo of Drunkeness");
        break;
      case 13:
        yourLoot.push("a tiny album of PSY's greatest hits");
        break;

      default:

    }
  }
}

// -----------------------------------------

function getGoodTreasure()
{
  var lootAmount = Math.floor((Math.random() * 3 + 1));
  var lootFoundAlert;
  var i;
  for (i = 0; i < lootAmount; i++)
  {
    var lootNumber = Math.floor((Math.random() * 13 + 1));
    switch (lootNumber)
    {
      case 1:
        yourLoot.push("phantom menace on blu-ray");
        break;
      case 2:
        yourLoot.push("leopard skin speedo");
        break;
      case 3:
        yourLoot.push("The Thimble of Circumcision");
        break;
      case 4:
        yourLoot.push("CARL'S JR. EXTRA BIG*** TACO");
        break;
      case 5:
        yourLoot.push("a 7 pound chunk of whale vomit");
        break;
      case 6:
        yourLoot.push("a mint condition Mr. Potato Head");
        break;
      case 7:
        yourLoot.push("The Banana Hammock of Gorilla Seduction");
        break;
      case 8:
        yourLoot.push("a 7 sided die made of pure gold");
        break;
      case 9:
        yourLoot.push("a whip made of an elephant trunk");
        break;
      case 10:
        yourLoot.push("a diamond formed into an indistinguishable utensil");
        break;
      case 11:
        yourLoot.push("The Portable Orb of Negate Sludge");
        break;
      case 12:
        yourLoot.push("Yellow Mechanism");
        break;

      default:

    }
  }
}

// -------------------------------------

function getSquareStatus(pos) {
  var treasureType;
  var NPCNameNum;

  if (pos == currentSquare) // pac man found
  {
    // Check for Pac Man on a treasure
    treasureType = checkForTreasure(pos);
    if (treasureType > 0)
    {
      switch (treasureType)
      {
        case TREASURE_TYPE_BAD:
          return SQ_STATUS_PAC_ON_TREASURE_BAD;
          break;

        case TREASURE_TYPE_MEDIUM:
          return SQ_STATUS_PAC_ON_TREASURE_MEDIUM;
          break;

        case TREASURE_TYPE_GOOD:
          return SQ_STATUS_PAC_ON_TREASURE_GOOD;
          break;

        default:

      } // END SWITCH

    } // end if found treasure

    NPCNameNum = checkForNPC(pos);
    if (NPCNameNum > 0) {
      switch (NPCNameNum) {
        case NPC_ICHABOD_TRISKET:
          return SQ_STATUS_PAC_ON_ICHABOD_TRISKET;
          break;
        case NPC_FLOJO_SUMMERSTREAM:
          return SQ_STATUS_PAC_ON_FLOJO_SUMMERSTREAM;
          break;
        default:

      } // END SWITCH for NPCNameNum

    }  // end if NPCNameNum > 0

    return SQ_STATUS_PAC_ON_BLANK;
  }

  // Pac Man not in this square --- Check for other conditions

  treasureType = checkForTreasure(pos);
  if (treasureType > 0) {
    switch (treasureType) {
      case TREASURE_TYPE_BAD:
        return SQ_STATUS_TREASURE_BAD;
        break;

      case TREASURE_TYPE_MEDIUM:
        return SQ_STATUS_TREASURE_MEDIUM;
        break;

      case TREASURE_TYPE_GOOD:
        return SQ_STATUS_TREASURE_GOOD;
        break;

      default:

    } // END SWITCH

  } // end if found treasure
  NPCNameNum = checkForNPC(pos);
  if (NPCNameNum > 0) {
    switch (NPCNameNum) {
      case NPC_ICHABOD_TRISKET:
        return SQ_STATUS_ICHABOD_TRISKET;
        break;
      case NPC_FLOJO_SUMMERSTREAM:
        return SQ_STATUS_FLOJO_SUMMERSTREAM;
        break;
      default:
    } // END SWITCH for NPCNameNum

  }  // end if NPCNameNum > 0



  // Check if a good friend in a square by itself ???
  // NPCNameNum = checkForNPC(pos);
  // if (NPCNameNum > 0) {
  //   switch (NPCNameNum) {
  //     case NPC_ICHABOD_TRISKET:
  //       return SQ_STATUS_PAC_ON_ICHABOD_TRISKET;
  //       break;
  //
  //     default:
  //
  //   } // END SWITCH for NPCNameNum

  return SQ_STATUS_BLANK;

} // end function get Square status

// ---------------------------------------

function checkForTreasure(position) {
  var i = 0;

  // check for ghosts in specific order
  var treasureFound = false;

  // you always need to go through the entire array of ghosts to check for special ones.
  while ((treasureFound == false) && (i < treasures.length)) {
    if (treasures[i][TREASURE_INDEX_POSITION] == position)
      treasureFound = true;
    else
      i++;
  }

  if (treasureFound == true)
    return treasures[i][TREASURE_INDEX_TYPE];
  else
    return 0;

}

// --------------------------------------------

function checkForNPC(position) {
  var i = 0;
  var NPCFound = false;

  // Check for NPCs unti you found one, don't need to check the whole array
  while ((NPCFound == false) && (i < NPCs.length)) {
    if (NPCs[i][NPC_INDEX_POSITION] == position)
      NPCFound = true;
    else
      i++;
  }

  // www
  if (NPCFound == true)
    return NPCs[i][NPC_INDEX_NAME];
  else
    return 0;

}

// ---------------------------------------

function createBoard() {
  // get the board
  var myBoard = document.getElementById("board");
  myBoard.innerHTML = "";
  var i;

  //  set the width and height styles to the number of pixels
  myBoard.style.width = (boardSize * SQUARE_SIZE) + "px"; // ppp
  myBoard.style.height = (boardSize * SQUARE_SIZE) + "px";

  // Create the squares
  for (i = 0; i < boardSize * boardSize; i++) {
    myBoard.innerHTML = myBoard.innerHTML + '<div class="square"></div>';
  }

  squares = document.querySelectorAll('.square');

}

// ----------------------------------------

function createTreasures()
{
  var treasureAmount = boardSize * boardSize / 12;
  var treasurePosition;
  var treasureTypeNumber;
  var foundSpot;
  var treasureType;
  var i;
  for (i = 0; i < treasureAmount; i++) {
    treasureTypeNumber = Math.floor((Math.random() * 3) + 1);
    foundSpot = false;
    while (foundSpot == false) {

      treasurePosition = Math.floor((Math.random() * (boardSize * boardSize)));

      if (currentSquare != treasurePosition) {
        foundSpot = true;
      } // end if safe spot for a wall
    }
    switch (treasureTypeNumber) {
      case 1:
        treasureType = TREASURE_TYPE_BAD;
        treasures.push([treasurePosition, treasureType])
        break;
      case 2:
        treasureType = TREASURE_TYPE_MEDIUM;
        treasures.push([treasurePosition, treasureType])
        break;
      case 3:
        treasureType = TREASURE_TYPE_GOOD;
        treasures.push([treasurePosition, treasureType])
        break;
      default:
    }
  }
}

  function createNPCs() {
    var NPCAmount = 2;//hard coded amount of npcs that exist, right now only 1
    var NPCPosition;
    var NPCNameNumber = 1;
    var foundSpot;
    var NPCName;
    var i;
    NPCNameNumber = 1;
    for (i = 0; i < NPCAmount; i++) {
      foundSpot = false;

      while (foundSpot == false) {

        NPCPosition = Math.floor((Math.random() * (boardSize * boardSize)));

        if (currentSquare != NPCPosition) {
          foundSpot = true;
        } // end if safe spot for a wall
      }

      switch (NPCNameNumber) {
        case 1:
          NPCName = NPC_ICHABOD_TRISKET;
          NPCs.push([NPCPosition, NPCName])
          NPCNameNumber++
          break;
        case 2:  //will add more npc here
          NPCName = NPC_FLOJO_SUMMERSTREAM;
          NPCs.push([NPCPosition, NPCName])
          NPCNameNumber++
          break;
        default:
      }
    }
}

// ----------------------------------------

function calculateClass() {
  if ((yourStrength > yourAgility) && (yourStrength > yourIntellect) && (yourStrength > yourVitality) && (yourStrength > yourCharisma)) {
    yourClass = "DESTROYER";
    return
  }
  if ((yourStrength == yourAgility) && (yourStrength > yourIntellect) && (yourStrength > yourVitality) && (yourStrength > yourCharisma)) {
    yourClass = "KNIGHT";
    return
  }
  if ((yourStrength > yourAgility) && (yourStrength == yourIntellect) && (yourStrength > yourVitality) && (yourStrength > yourCharisma)) {
    yourClass = "WARLORD";
    return
  }
  if ((yourStrength > yourAgility) && (yourStrength > yourIntellect) && (yourStrength == yourVitality) && (yourStrength > yourCharisma)) {
    yourClass = "SOLDIER";
    return
  }
  if ((yourStrength > yourAgility) && (yourStrength > yourIntellect) && (yourStrength > yourVitality) && (yourStrength == yourCharisma)) {
    yourClass = "HERO";
    return
  }
  if ((yourAgility > yourStrength) && (yourAgility > yourIntellect) && (yourAgility > yourVitality) && (yourAgility > yourCharisma)) {
    yourClass = "NINJA";
    return
  }
  if ((yourAgility > yourStrength) && (yourAgility == yourIntellect) && (yourAgility > yourVitality) && (yourAgility > yourCharisma)) {
    yourClass = "PEE-WEE";
    return
  }
  if ((yourAgility > yourStrength) && (yourAgility > yourIntellect) && (yourAgility == yourVitality) && (yourAgility > yourCharisma)) {
    yourClass = "SPY";
    return
  }
  if ((yourAgility > yourStrength) && (yourAgility > yourIntellect) && (yourAgility > yourVitality) && (yourAgility == yourCharisma)) {
    yourClass = "ROGUE";
    return
  }
  if ((yourIntellect > yourStrength) && (yourIntellect > yourAgility) && (yourIntellect > yourVitality) && (yourIntellect > yourCharisma)) {
    yourClass = "GENIUS";
    return
  }
  if ((yourIntellect > yourStrength) && (yourIntellect > yourAgility) && (yourIntellect == yourVitality) && (yourIntellect > yourCharisma)) {
    yourClass = "CHIEF";
    return
  }
  if ((yourIntellect > yourStrength) && (yourIntellect > yourAgility) && (yourIntellect > yourVitality) && (yourIntellect == yourCharisma)) {
    yourClass = "TRICKSTER";
    return
  }
  if ((yourVitality > yourStrength) && (yourVitality > yourAgility) && (yourVitality > yourIntellect) && (yourVitality > yourCharisma)) {
    yourClass = "TANK";
    return
  }
  if ((yourVitality > yourStrength) && (yourVitality > yourAgility) && (yourVitality > yourIntellect) && (yourVitality == yourCharisma)) {
    yourClass = "COOL-DUDE";
    return
  }
  if ((yourCharisma > yourStrength) && (yourCharisma > yourAgility) && (yourCharisma > yourIntellect) && (yourCharisma > yourVitality)) {
    yourClass = "TONGUE-LASHER";
  } else yourClass = "DUDE"


}

function getExperience() {
  yourExperience = yourExperience + 1
  if (yourExperience == 1) {
    var statBoost = Math.floor((Math.random() * 5) + 1);
    yourLevel++;
    yourExperience = 0;
    if (statBoost == 1) {
      yourStrength++;
      document.getElementById("yourStrength").innerHTML++;
    }
    if (statBoost == 2) {
      yourAgility++;
      document.getElementById("yourAgility").innerHTML++;
    }
    if (statBoost == 3) {
      yourIntellect++;
      document.getElementById("yourIntellect").innerHTML++;
    }
    if (statBoost == 4) {
      yourVitality++;
      document.getElementById("yourVitality").innerHTML++;
    }
    if (statBoost == 5) {
      yourCharisma++;
      document.getElementById("yourCharisma").innerHTML++;
    }
    calculateClass();
    title.innerHTML = "YOUR NAME IS " + yourCharacterName + ", LEVEL " + yourLevel + " " + yourClass;
  }
}
// ---------------------------
function ichabodTrisketPurchase(){
  getGoodTreasure();
}

document.getElementById("title").style.visibility = "hidden";

themesong.play();

createBoard();
createTreasures();
createNPCs();
squares = document.querySelectorAll('.square'); // faster to get first?


var i;
for (i = 0; i < squares.length; i++) {
  //processSquare(i);
  squares[i].innerHTML = "<img src= 'grass.jpg'>";
}
