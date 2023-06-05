/* eslint-disable */

// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// let multi = [];
// for (let i = 1; i < 11; i++) {
//   for (let j = 1; j < 11; j++) {
//     multi.push("${i} * ${j} = ${i*j}");
//   }
// }

// console.log(multi);

let prefix = ["big", "important", "very", "cool", "super", "hard"];
let word = ["code", "coders", "tech", "stack", "geeks", "computing"];

for (let i = 0; i < prefix.length; i++) {
  for (let j = 0; j < word.length; j++) {
    // console.log("${prefix[i]}${word[j]}.com");
    let div = document.createElement("div");
    div.innerText = `
        ${prefix[i]}${word[j]}.com
      `;
    document.body.appendChild(div);
  }
}
