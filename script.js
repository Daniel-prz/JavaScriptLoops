"use strict";

let ao1 = "Hi";
let ao2 = "Hello";
let ao3 = "Yo";
let ao4 = "Hey";
let ao5 = "Howdy";

const array1 = [ao1, ao2, ao3, ao4, ao5];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < array1.length; index++) {
  console.log(array1[index]);
}

for (let index = 0; index < 11; index++) {
  console.log([index]);
}

for (let index = 1990; index < 1999; index++) {
  console.log([index]);
}
let i = 1;
while (i < 6) {
  console.log([i]);

  i++;
}

const BTN = document.getElementById("button1");
const INPUT = document.getElementById("UserInput");

//click to multiply UserInput by 0-10 in console
document.getElementById("button1").addEventListener("click", function () {
  for (let index = 0; index < 11; index++) {
    console.log(INPUT.value * [index]);
  }
});
