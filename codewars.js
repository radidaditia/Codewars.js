//Pelatihan JS #1: buat fungsi JS pertama Anda dan cetak "Hello World!"
function helloWorld() {
  var somewords = "Hello world";
  console.log(somewords);
}

//Pelatihan JS #2: Tipe data dasar--Nomor
let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
  let a = v3, //set number value to a
    b = v1; //set number value to b
  return a - b;
}

function equal3() {
  let a = v1, //set number value to a
    b = v5; //set number value to b
  return a * b;
}

function equal4() {
  let a = v4, //set number value to a
    b = v5; //set number value to b
  return a / b;
}

function equal5() {
  let a = v6, //set number value to a
    b = v3; //set number value to b
  return a % b;
}

//Pelatihan JS #3: Tipe data dasar--String
var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes";
}

//Pelatihan JS #4: Tipe data dasar--Array
function getLength(arr) {
  // Return the length of arr
  return arr.length;
}

function getFirst(arr) {
  // Return the first element of arr
  return arr[0];
}

function getLast(arr) {
  // Return the last element of arr
  return arr[arr.length - 1];
}

function pushElement(arr) {
  var el = 1;
  // Push el to arr
  arr.push(el);
  return arr;
}

function popElement(arr) {
  // Pop an element from arr
  arr.pop();
  return arr;
}

//Pelatihan JS #5: Tipe data dasar--Objek

function animal(obj) {
  return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
}

//Pelatihan JS #6: Tipe data dasar--Boolean dan pernyataan kondisional if..else
function trueOrFalse(val) {
  if (!val) {
    return "false";
  } else {
    return "true";
  }
}

//Training JS #7: if..else and ternary operator
function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

//Pelatihan JS #8: Pernyataan bersyarat--switch
function howManydays(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28; // Not considering leap year
    default:
      return "Invalid month"; // You can customize this message based on your requirements
  }
}

//Pelatihan JS #9: pernyataan loop --sementara dan lakukan..sementara

function padIt(str, n) {
  let result = str;
  let count = 1;

  while (count <= n) {
    if (count % 2 !== 0) {
      // If count is odd, pad "*" to the left side
      result = "*" + result;
    } else {
      // If count is even, pad "*" to the right side
      result = result + "*";
    }

    count++;
  }

  return result;
}

//Training JS #10: loop statement --for
function pickIt(arr) {
  var odd = [],
    even = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}

//Training JS #11: loop statement --break,continue
function grabDoll(dolls) {
  var bag = [];

  for (var i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    } else {
      // Skip other strings using continue
      continue;
    }

    if (bag.length === 3) {
      // Break out of the loop if the bag is full
      break;
    }
  }

  return bag;
}

//Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj) {
  var result = [];

  for (var key in obj) {
    if (key.length === 5) {
      result.push(key);
    }

    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }

  return result;
}

//Training JS #13: Number object and its properties
function whatNumberIsIt(n) {
  if (isNaN(n)) {
    return "Input number is Number.NaN";
  } else if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else {
    return "Input number is " + n;
  }
}

//Training JS #14: Methods of Number object--toString() and toLocaleString()
function colorOf(r, g, b) {
  // Convert each component to hex string using toString(16)
  var red = r.toString(16).padStart(2, "0");
  var green = g.toString(16).padStart(2, "0");
  var blue = b.toString(16).padStart(2, "0");

  // Combine the components to form the color code
  var colorCode = "#" + red + green + blue;

  return colorCode;
}

// Test cases
console.log(colorOf(255, 0, 0)); // Output: "#ff0000"
console.log(colorOf(0, 111, 0)); // Output: "#006f00"
console.log(colorOf(1, 2, 3)); // Output: "#010203"

//Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
function howManySmaller(arr, n) {
  // Mission 1: Keep two decimal places for all elements in the array
  arr = arr.map(function (element) {
    return parseFloat(element.toFixed(2));
  });

  // Mission 2: Count the number of elements smaller than n
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      count++;
    }
  }

  return count;
}

// Test cases
console.log(howManySmaller([1.234, 1.235, 1.228], 1.24)); // Output: 2
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); // Output: 1
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)); // Output: 2

//Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(arr) {
  // Find the shortest string length
  var minLength = arr.reduce(function (min, str) {
    return Math.min(min, str.length);
  }, Infinity);

  // Intercept all strings to the shortest length
  var result = arr.map(function (str) {
    return str.slice(0, minLength);
  });

  return result;
}

// Test cases
console.log(cutIt(["ab", "cde", "fgh"])); // Output: ["ab","cd","fg"]
console.log(cutIt(["abc", "defgh", "ijklmn"])); // Output: ["abc","def","ijk"]
console.log(cutIt(["codewars", "javascript", "java"])); // Output: ["code","java","java"]

//Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
function firstToLast(str, c) {
  var firstIndex = str.indexOf(c);
  var lastIndex = str.lastIndexOf(c);

  if (firstIndex !== -1 && lastIndex !== -1) {
    return lastIndex - firstIndex;
  } else {
    return firstIndex;
  }
}

// Test cases
console.log(firstToLast("ababc", "a")); // Output: 2
console.log(firstToLast("ababc", "c")); // Output: 0
console.log(firstToLast("ababc", "d")); // Output: -1

//Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(str, separator) {
  // Split the string into words
  var words = str.split(" ");

  // Split each word into separate characters and join them back with the specified separator
  var result = words.map(function (word) {
    return word.split("").join(separator);
  });

  // Join all the resulting "words" back into a sentence with spaces
  return result.join(" ");
}

// Test cases
console.log(splitAndMerge("My name is John", " ")); // Output: "M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John", "-")); // Output: "M-y n-a-m-e i-s J-o-h-n"
console.log(splitAndMerge("Hello World!", ".")); // Output: "H.e.l.l.o W.o.r.l.d.!"
console.log(splitAndMerge("Hello World!", ",")); // Output: "H,e,l,l,o W,o,r,l,d,!"

//Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
function alienLanguage(str) {
  return str
    .split(" ")
    .map(
      (word) => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase()
    )
    .join(" ");
}

console.log(alienLanguage("My name is John")); // "My NAMe Is JOHn"
console.log(alienLanguage("this is an example")); // "THIs Is An EXAMPLe"
console.log(alienLanguage("Hello World")); // "HELLo WORLd"

//Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
function topSecret(str) {
  let shift = (start) => (ch) =>
      String.fromCharCode(((ch.charCodeAt(0) - start - 3 + 26) % 26) + start),
    match = (re) => (str.match(re) || [])[1] || "";

  str = str.replace(/[a-z]/g, shift(97)).replace(/[A-Z]/g, shift(65));

  answer1 = match(/Top secret files: No\. (\d*)/);
  answer2 = match(/Super agent (\w*)/);
  answer3 = match(/stole the (.*) from National Museum/);

  return str;
}
