//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");
}

// Put your answer below -------------------------
var doSomethingCool = function() {
  console.log("Something Cool!");
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi() {
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);

// Put your answer below -------------------------
var sayHi = function() {
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------

//The answer is [c], z then y.
//Although the function calling the letter y is before the console that calls the
//letter z, it is set to a timer. This means that the function will be called at a
//delay. This gives the next command (console of letter z) time to be displayed first.
//Therfore, letter y is called after letter z.

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

// Put your answer below -------------------------
var reverseStr = function(str) {
  return str.split("").reverse().join("");
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};

// Put your answer below -------------------------

var spanishColor = function(colorName) {
  var color = {
    "rojo": "#ff0000",
    "blanco": "#ffffff",
    "azul": "#0000ff",
    "verde": "#00ff00",
    "negro": "#000000"
  };

  return color[colorName];
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";

// Put your answer below -------------------------

var foo;
foo = "bar";

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  for(var i = 0; i < 10; i++) {
    console.log(callback);
  }
};

// Put your answer below -------------------------

var callNTimes = function(n) {
  for(var i = 0; i < n; i++) {
    console.log(n);
  }
};


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};


// Put your answer below -------------------------

var game = function() {
  var score = 0;
  var increaseScore = function() {
    score++;
  }
  var decreaseScore = function() {
    score--;
  }
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------

var addNumbers = function(numberA, numberB) {
  return numberA+numberB;
};

var twoPlusTwo = addNumbers(2,2);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

var accelerate = function(amount) {
  speed += amount;
};

// Put your answer below -------------------------
//The reason the speed becomes NaN when we don't specify an
//amount is because by default, a functions paramater is
//undefined. Therefore, speed += undefined is not a number.

var speed = 0;

var accelerate = function(amount) {
  if (amount ==== undefined) {
    amount = 0;
  }
  speed += amount;
};


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------

function callbackDefault() {
alert("Call back!");
}

var callLater = function(timeout, callback) {
  "use strict";
  if (timeout === undefined) {
    timeout = 0;
  }
  if (callback === undefined) {
    callback = callbackDefault();
  }
  setTimeout(callback, timeout);


};

// -----------------------------------------------




//////////////////////////////////////////////////

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(numA,numB){
  "use strict";
    if (numA > numB) {
      return numA;
    }
    else {
      return numB;
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(numA, numB, numC){
  "use strict";
    if (numA > numB && numA > numC) {
      return numA;
    }
    else if (numB > numA && numB > numC) {
      return numB;
    }
    else {
      return numC;
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  "use strict";
    var vowel = {
      a: 1, b: 0, c: 0, d: 0, e: 1,
      f: 0, g: 0, h: 0, i: 1, j: 0,
      k: 0, l: 0, m: 0, n: 0, o: 1,
      p: 0, q: 0, r: 0, s: 0, t: 0,
      u: 1, v: 0, w: 0, x: 0, y: 0, z: 0
    };
    return vowel[char] === 1;

};

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
      var myArray = phrase.split("");

      var consonant = {
        a: 1, b: 0, c: 0, d: 0, e: 1,
        f: 0, g: 0, h: 0, i: 1, j: 0,
        k: 0, l: 0, m: 0, n: 0, o: 1,
        p: 0, q: 0, r: 0, s: 0, t: 0,
        u: 1, v: 0, w: 0, x: 0, y: 0,
        z: 0, " ": 1
      };
      var newArray = [];
      for (var i = 0; i < myArray.length; i++) {
        if (consonant[myArray[i]] === 0) {
          newArray.push([myArray[i]]);
          newArray.push("o");
          newArray.push([myArray[i]]);
        }
        else {
          newArray.push([myArray[i]]);
        }
      };

      return newArray.join("");



};

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

var myArray = [8, 12, 34, 58, 95, 27, 6];
var count = 0;
function sum(){
  "use strict";
  for (var i = 0; i < myArray.length; i++) {
        count = count + myArray[i];
      }
  return count;
};
var countMult = 1;
function multiply(){
  "use strict";
  for (var i = 0; i < myArray.length; i++) {
      countMult = countMult * myArray[i];
  }
  return countMult;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
  "use strict";
  return str.split("").reverse().join("");
};



// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
var myArray = ["beach", "waves", "sand", "swell", "surfing"];
function findLongestWord(words){
    "use strict";
    for (var i = 0; i < myArray.length; i++) {
        var currentWord = myArray[i].length;
        var longestWord = 0;
        if (currentWord > longestWord ) {
          longestWord = myArray[i];
        }
        else {

        }
    }
    return longestWord;
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

var myArray = ["red", "blue", "white", "purple", "yellow", "black"];
function filterLongWords(words, i){
    "use strict";
    var newArray = [];
  for (var x = 0; x < myArray.length; x++) {
       if (myArray[x].length > i) {
         newArray.push(myArray[x]);
       }
       else {

       }
  }
  return newArray;
};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    string = string.split("");

    var frequency = {
      a: 0, b: 0, c: 0, d: 0, e: 0,
      f: 0, g: 0, h: 0, i: 0, j: 0,
      k: 0, l: 0, m: 0, n: 0, o: 0,
      p: 0, q: 0, r: 0, s: 0, t: 0,
      u: 1, v: 0, w: 0, x: 0, y: 0,
      z: 0, " ": 0
    };

    for (var i = 0; i < string.length; i++) {
      frequency[string[i]] = frequency[string[i]] + 1;
    };

    for (var property in frequency) {
      if (frequency[property] > 0) {
        console.log(property + ": " + frequency[property]);
      }
      else {

      }

    };


};
