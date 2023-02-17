// // let firstName = "Bruce";
// // let lastName = "Wayne";
// // const address = "Gotham City";

// // console.log("Ich bin " + firstName + " " + lastName + " und komme aus " + address);


// // let hero = "Spiderman";
// // let city = "NYC";
// // // Ich bin Spiderman und komme aus NYC!

// // console.log("Ich bin " + hero + " und komme aus " + city + "!");

// // console.log();



// // ==========COMPARISON============
// // == compare value
// // === compare value & type

// console.log(3 == 3); // true
// console.log(4 == 3); // false
// console.log(4 === 4); // true
// console.log(5 == "5"); //true!!!!!!!!
// console.log(5 === "5"); //false!!!!!!!!
// console.log(2 == "two"); //false
// //-----------------------------------------
// console.log("%c-----------", "color:tomato");

// console.log(1 == true); //true
// console.log(0 == false); //true
// console.log(1 == false); //false
// console.log(1 === true); //false
// //-----------------------------------------
// console.log("%c-----------", "color:tomato");

// // ! -> not
// // != not equal value
// // !== not equal value & datatype

// console.log(3 != 3); //false
// console.log(4 != 3); //true
// console.log(3 !== "3"); //true

// // greater and less
// // < less than
// // > greater than
// // <= less than equal
// // >= greater than equal

// console.log(3 > 2); //true
// console.log(2 < 4); //true
// console.log(6 >= 6); //true

// //-----------------------------------------
// console.log("%c-----------", "color:tomato");

// console.log("a" == "a"); //true
// console.log("a" == "A"); //false
// console.log("a" > "A"); //true
// console.log("h" < "Z"); //false

// JS Output 3
// document.write()
// für testing

// document.write("Hallo Welt!");
// document.write("BliBlaBlub!");
// document.write("<h1>Ich bin eine Headline</h1>");

// innerHTML

const header = document.getElementById("headerHTML");
console.log(header);

header.innerHTML = "Mickey";
header.innerHTML += " Mouse";
header.innerHTML += "<img src='https://unsplash.it/100/100' alt='logo'/>";

const gallery = document.getElementById("gallery");
console.log(gallery);

gallery.innterHTML = "<figure><img src='https://unsplash.it/200/200' alt='random img'/><figcaption>Bildbeschreibung</figcaption></figure>";

gallery.innterHTML += "<figure><img src='https://unsplash.it/200/200' alt='random img'/><figcaption>Bildbeschreibung</figcaption></figure>";


//styling über javascript #für Leute mit viel langeweile
// gallery.style.display = "flex";
// gallery.style.flexDirection = "column";
// gallery.style.alignItems = "center";
// gallery.style.backgroundColor = "tomato";
