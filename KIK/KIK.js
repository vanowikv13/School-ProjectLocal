var table = [];
var status;
var sign;
var signNow;

function resetData(x) {
   table[0] = ["", "", ""];
   table[1] = ["", "", ""];
   table[2] = ["", "", ""];
   status = false;
   signNow = x;
}

function isWinSign(x) {
   sign = x;
   if (table[0][0] == sign && table[0][1] == sign && table[0][2] == sign || table[0][0] == sign && table[1][0] == sign && table[2][0] == sign || table[2][0] == sign && table[2][1] == sign && table[2][2] == sign || table[0][2] == sign && table[1][2] == sign && table[2][2] == sign || table[0][0] == sign && table[1][1] == sign && table[2][2] == sign || table[0][2] == sign && table[1][1] == sign && table[2][0] == sign)
      return true;
   else
      return false;

}

function isWin() {
   if (isWinSign("x"))
      return "x";
   if (isWinSign("o"))
      return "o";
   else return false;
}


function writeArray() {
   for (var i = 0; i < 3; i++) {
      for(var j=0; j < 3; j++) {
         document.write(table[i][j]);
      }
   }
}

function writeWhoWin(x) {
   alert("Wygrał gracz " + x);
}

function game() {
   resetData("x");
   while (true) {
      writeArray();
      //var point = prompt(signNow+" chose your number","");
      //check is difrent
      var x = isWin();
      if (x != false) {
         writeWhoWin(x);
         break;
      }
      //for who turn is now
      if (signNow == "x")
         signNow = "o";
      else
         signNow = "x";
   }
}
