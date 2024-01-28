// 1#
// let number = -5;
//  number < 0 ? console.log("число від'ємне") : console.log("число додатнє");

// 2#
// const string = "залупа ушаста";
// console.log(string.length);

// 3#
// const string = "залупа ушаста";
// console.log(string[string.length - 1]);

// 4#
// const num = -6;
// num % 2 === 0 ? console.log(num, "парне") : console.log(num, "непарне");

// if (num % 2 === 0) {
//   console.log(num, "парне");
//  }
//  else { console.log(num, "непарне");
// }

// 5#
// const firstWord = "кінська";
// const secondWord = "залупа";
// console.log(firstWord[0] == secondWord[0]);

// 6#
// const firstWord = "кінськьm";
// if (firstWord[firstWord.length - 1] === "ь") {
//   console.log(firstWord[firstWord.length - 2]);
// //   return firstWord[firstWord.length - 2];
// }
// console.log(firstWord[firstWord.length - 1]);

// 7#
// let num = -65497815;
// let stringNum = num + "";
// stringNum >= 0 ? console.log(stringNum[0]) : console.log("невірне значення");

// 8#
// let num = -65497815;
// let strNum;
// strNum = num.toString();
// console.log("остання цифра", strNum[strNum.length - 1]);
// console.log(typeof(strNum));

// 9#
// let num = 65497815;
// let strNum = num + "";
// let firstDigit = Number.parseInt (strNum[0]);
// let lastDigit = Number.parseInt (strNum[strNum.length - 1])
// let sumDigit = firstDigit + lastDigit;
// console.log(sumDigit);

// 12#
// let num = 65497815;
// let strNum = num.toString();
// console.log(strNum.length, "символів");

// 12#
// let numFirst = 65497815;
// let numSecond = 65497815;
// let strNumFirst = numFirst.toString();
// let strNumSecond = numSecond.toString();
// console.log(strNumFirst[0] === strNumSecond[0]);

// 13#
// const string = "кфівлаорлрфпаащш";
// string.length > 1 ? console.log(string[string.length - 2]) : console.log("string is too short");

// 14#
// let num = 65497815;
// let numTwo = 65497813;
// num % numTwo === 0 ? console.log("yes") : console.log("no");

// 15#
// for (let i=1; i <=100; i++) {
//   console.log(i);
// }

// 16#
// for (let i=-100; i <=0; i++) {
//   console.log(i);
// }

// 17#
// for (let i=100; i>=1; i-=1 ) {
//   console.log(i);
// }

// 18#
// for (let i=1; i <=100; i++) {
//   i % 2 === 0 ? console.log(i) : console.log();
// }

// let upperLimmit = 365;
// for (let i=2; i <=upperLimmit; i+=2) {
//   console.log(i);
// }

// 19#
// for (let i=1; i <=100; i+=1) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// 20#
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log('Сума чисел від 1 до 100:', sum);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(2));

// 21#
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//    if (i % 2 ===0) {
//        sum += i;
//    }
// }
// console.log('Сума парних чисел від 1 до 100:', sum);

// 22#
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//    if (i % 2 ===0) {
//        sum += i;
//    }
// }
// console.log('Сума парних чисел від 1 до 100:', sum);

// 23#
// const a = 15;
// const b = 13;
// let c = 0;
// a > b ? c = a % b : c = "невірне значення";
// console.log(c);

// 23#

// function reverseString(input) {
//     const reverseRow = input.split("").reverse().join("");
//     return reverseRow;
// }

// console.log(reverseString("цикло-пентан-пергідро-фенантрен на основі орто-нафто-хінон-діазидів"));

// 24#
// let result = 0;
// let sqrt;
// const a = [1, 2, 3, 4, 5];

//     for (let i = 0; i < a.length; i++) {
//         sqrt = Math.pow(a[i], 2);
//         result += sqrt;
//     }
//     console.log(result);

// 25#
// let result = 0;
// let sqrt;
// const a = [1, 2, 3, 4, 5];

//     for (let i = 0; i < a.length; i++) {
//         sqrt = Math.sqrt(a[i], 2);
//         result += sqrt;
//     }
//     console.log(result.toFixed());

// 26#
// let result = 0;
// const a = [1, -2, 3, -4, 5, 6, -7, 8];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > 0) {
//             result += a[i];
//         }
//     }
// console.log(result);

// 27#
// let result = 0;
// const a = [1, -2, 3, -4, 5, 6, -7, 8, 12, -14];
//     for (let i = 0; (a[i] < 10 && a[i] < a.length); i++) {
//         if (a[i] > 0) {
//             result += a[i];
//         }
//     }
//     console.log(result);

// 28#
// const a = 'abcde';
// let b = a.split("");
// console.log(b);

// 29#
// const a = '12345';
// let b = a.split("");
// console.log(b);

// 30#
// const a = 12345;
// let b = parseInt(a.toString().split("").reverse().join(""));
// console.log(typeof a, a);
// console.log(typeof b, b);

// const quest = prompt("Яка офіційна назва JavaScript?");

// if (quest === "EcmaScript") {
//     alert("ПEcmaScriptравильно");
// } else {
//     alert("Не знаєте? EcmaScript!")
// }

// let message;
// function timeString(hours, minutes) {
//     minutes > 0 ? message = `${hours} г. ${minutes} хв.` : message = `${hours} г.`;
//     console.log(message);
// }

// timeString(14, 01);
// if (minutes) {
//     message = `${hours} г. ${minutes} хв.`
// } else {
//     message = `${hours} г.`
// }

// const currenTime = new Date();
// const hours = currenTime.getHours();
// const minutes = currenTime.getMinutes();
// const seconds = currenTime.getSeconds();
// let timestr = `${hours}:${minutes}:${seconds}`;
// console.log(timestr);

// const answer = parseInt(prompt("Input number:"));
// if (answer > 0) {
//   console.log("Це позитивне число");
// } else if (answer === 0) {
//   console.log("Це нуль");
// } else if (answer < 0) {
//   console.log("Це від'ємне число");
// } else {
//     console.log("Число не введено");
// }

// const newAnswer = prompt("Input number:");
// let answer = parseInt(newAnswer);
// if (answer > 0) {
//   console.log("Це позитивне число");
// } else if (!answer) {
//   console.log("Це нуль");
// } else if (answer < 0) {
//   console.log("Це від'ємне число");
// } else {
//     console.log("Число не введено");
// }

// const a = 20;
// const b = 180;

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else if (b > a) {
//     console.log(b);
//   } else {
//     console.log("числа рівні")
//   }
// } else {
//     console.log(b + 512);
// }

// let link = "https://my-site.com/about";
// console.log(link);
// if (!link.endsWith("/")) {
// link += "/";
// }
// console.log(link);

// let link = "https://my-site.com/about";
// if (link.includes("my-site") && !link.endsWith("/")) {
//     link += "/";
// }
// console.log(link);

// let link = "https://my-site.com/about";
// console.log(link.includes("my-site") && !link.endsWith("/") ? link += "/" : link);
// if (link.includes("my-site") && !link.endsWith("/")) {
//     link += "/";
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const message = "JavaScript - це цікаво";
// console.log(message.split("і"));

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const result = array1 + "," + array2;
// console.log(result, typeof(result));

// const message = "JavaasdScript - це asdasdці ка вadsaasdsdо";
// const characters = message.split(''); // Розбиваємо рядок на масив символів
// for (let i = 0; i < characters.length; i++) {
//   if (characters[i] === ('a') || characters[i] === ('а')) {
//     characters.splice(i, 1); // Видаляємо символ 'a' з масиву
//     i--; // Зменшуємо лічильник, оскільки масив скоротився на один елемент
//   }
// }
// const result = characters.join(''); // Повертаємо масив символів в рядок
// console.log(result);

// const colors = ["red", "green", "blue", "yellow", "black"];

// colors.splice(2, 1, "purple");
// console.log(colors);

// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }

// count(0, 30, 3);
// count(2);
// count();

// let message = "akdhskjasdhkajsdhkjasd";
// const arr = message.split('');
// console.log(message, typeof(message));
// console.log(arr, typeof(arr), Array.isArray(arr), "це масив");
// console.log(arr.join(''), typeof(arr));

// function sum(...numbers) {
//   let result = 0;
//   for (const number of numbers) {
//     result += number;
//   }
//   return result;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
//   console.log(`"${book.title}" has rating: ${book.rating}`);
//   console.log(book);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const bookKey in book) {
//   console.log(`${bookKey}: ${book[bookKey]}`);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(animal);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam"));

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(2, 0));

// function getExtremeElements(array) {
// const first = array[0];
// const last = array[array.length - 1];
// const result = [first, last];
// return result;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function splitMessage(message, delimiter) {
//     let words;
//     words = message.split(delimiter)
//     return words;
//   }
//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
//   console.log(splitMessage("best_for_week", "_"));

// function calculateEngravingPrice(message, pricePerWord) {
//   const messageToArray = message.split(" ");
//   const totalPrice = messageToArray.length * pricePerWord;
//   return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   return string;
// }
// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// function slugify(title) {
//   let midArray = [];
//   const changeTitleCase = title.toLowerCase();
//   midArray = changeTitleCase.split(" ");
//   const slug = midArray.join("-");
//   return slug;
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   let totalArray = firstArray.concat(secondArray);
//   if (totalArray.length > maxLength) {
//     totalArray = totalArray.slice(0, maxLength);
//   }
//    return totalArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//   console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
//   console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// function calculateTotal(number) {
//     let result = 0;
//     for (let i = 1; i<= number; i ++)
//             result += i;
//     return result;
//    }
//    console.log(calculateTotal(1));
//    console.log(calculateTotal(3));
//    console.log(calculateTotal(7));
//    console.log(calculateTotal(18));
//    console.log(calculateTotal(24));

// function calculateTotalPrice(order) {
//     let total = 0;
//    for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//    }
//     return total;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function findLongestWord(string) {
//   const wordsArray = string.split(" ");
//   let longestWord = "";
//   for (const word of wordsArray) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   } return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// /**
//  * Сортує вхідний масив та виводить ті числа, що більші за 'value'
//  * @param {Object} obj
//  * @returns
//  */
// function filterArray({numbers, value}) {
//   const totalArray = [];
//     for (let number of numbers) {
//     if (number > value) {
//         totalArray.push(number);
//     }
//   }
//     return totalArray;
//  }
//  console.log(filterArray({numbers : [1, 2, 3, 4, 5], value : 3}));
//  console.log(filterArray({numbers : [1, 2, 3, 4, 5], value : 4}));
//  console.log(filterArray({numbers : [1, 2, 3, 4, 5], value : 5}));
//  console.log(filterArray({numbers : [12, 24, 8, 41, 76], value : 38}));
//  console.log(filterArray({numbers : [12, 24, 8, 41, 76], value : 20}));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// function getCommonElements(array1, array2) {
//   const commonsArray = [];
//   for (let item of array1) {
//     if (array2.includes(item)) {
//       commonsArray.push(item);
//     }
//   }
//   return commonsArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let item of order) {
//     total += item;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getEvenNumbers(start, end) {
//   const evenArray = [];
//   for (let i = start; i <= end; i++) {
//     if (!(i % 2)) {
//       evenArray.push(i);
//     }
//   }

//   return evenArray;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// function includes(array, value) {
//   for (let item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

// const array = [1, "Hello", null, true, [1, 2, 3]];

// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i] === "string") {
//         array[i] = false;
//     }
// }
// console.log(array);

//
// string = string.split(' ');
// string.pop();
// string.shift();
// const result = string.split(' ').slice(1, -1).join(' ');
// console.log(result);

// let langs = ["c", "b", "a", "e", "d"];
//          //  b
// for (let i = 1; i < langs.length; i++) {
// //                             b
//     let currentElement = langs[i];
// //        c
//   let j = i - 1;
// //       c              c           b
//   while (langs[j] > currentElement) {
//      //   b             c
//     langs[j + 1] = langs[j];
//     j--;
//   }

//   langs[j + 1] = currentElement;
// }

// console.log(langs);

// let courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(course) {
//   if (courses.includes(course)) {
//     return "Ви вже маєте такий курс";
//   } else {
//     courses.push(course);
//     return courses;
//   }
// }

// function removeCourse(course) {
//   if (courses.includes(course)) {
//     const index = courses.indexOf(course);
//     courses.splice(index, 1);
//     return courses;
//   } else {
//     return 'Курсів з таким ім"ям не знайдено';
//   }
// }

// function updateCourse(oldCourse, newCourse) {
//   const index = courses.indexOf(oldCourse);
//   if (!!~index) {
//     courses.splice(index, 1, newCourse);
//     return courses;
//   }
//   return 'Курсів з таким ім"ям не знайдено';
// }

// console.log(addCourse("Express"));
// console.log(updateCourse("Express", "NestJS"));
// console.log(updateCourse("Parentall", "NestJS"));

// console.log(addCourse("CSS"));
// console.log(removeCourse("CSS"));
// console.log(removeCourse("Vue"));

// function countUp(n) {
//     if(n<1) {
//         return [];
//     } else {
//         const countArray = countUp(n-1);
//         countArray.push(n);
//         return countArray;
//     }
// }
// console.log(countUp(5));

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   getBooks() {
//     return this.books.join(", ");
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//     const keys = Object.keys(bookShelf);

//     for (const key of keys) {
//         if (typeof(key) !== 'function')
//       return key;
//     }
//   },
// };

// // console.log(bookShelf.getBooks());

// console.log(bookShelf.addBook("Нова книга"));
// console.log(bookShelf);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {

//     console.log(book[key]);
//   }

// const arr = ["Апельсин", "Яблоко", "Слива"];

// function editFruits(fruit) {
//   const addFruits = [...arguments].splice(1);

//   if(arr.indexOf(fruit) === -1){
//     arr.push(...addFruits)
//   } else {
//     arr.splice(arr.indexOf(fruit), 1, ...addFruits);
//   }

//   console.log(arr);
// }

// editFruits("Апельсин", 1,2,3)

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// const arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].toFixed(1);
// }
// console.log(arr);

// let arr = ["lkf;sdfk", "http://asdf", "lasdjladj", "http://lasjldjas22"];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].startsWith("http://")) {
//     arr.splice(i, 1);
//   }
// }
// console.log('arr:', arr);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i<numbers.length; i++) {
//     numbers[i] = Math.(numbers[i] * 0.1) + numbers[i];
// }
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = [];

// for(i=0; i<numbers.length; i+=2) {
//     result.push(numbers.slice(i, i+2))
// }
// console.log(result);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push('trusted');

// console.log(apartment);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {};
//   apartment.location.country = "Jamaica";
//   apartment.location.city = "Kingston";
// console.log(apartment);

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(const key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   for(let key in object){
//     if(object.hasOwnProperty(key)) {
//       propCount +=1;
//     }
//   }

//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for(const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {

//   // let propCount = 0;
//   // for (const key in object) {

// let propCount = Object.keys(object).length;

//   return propCount;

// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salarie = Object.values(salaries)
//   for(const key of salarie) {
//     totalSalary += key;
//     // console.log(totalSalary);
//   }

//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for(let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for(const product of products) {
//    if (productName === product.name) {
//      return product.price;
//   }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = [];
//   for (const product of products) {
//     if (propName in product) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// let result = 0;
// for (const product of products) {
//   if (productName === product.name) {
//     result = product.price * product.quantity;
//     return result;
//   }
// }
// return result
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "dkjhfdkjfsh",
// } = firstBook;

// // console.log(firstBook.coverImage);
// console.log(firstCoverImage);

// console.log(firstBook);
// console.log(firstTitle);

/**
 *
 */
// let args = {};
// function foo( first,sec, ...args){
//   console.log(typeof args);

// }

// foo (1,2,3,4,5,6,7,8,9,10)

// function generateId(){
//   return '_' + Math.random
// }
// console.log(generateId());
// console.log(generateId());

// const uuid = require('uuid');
// const userId = uuid.v4();
// console.log(userId);

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { tomorrow, today, yesterday } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { tomorrow, today, yesterday, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { tomorrow : highTomorrow, today : highToday, yesterday : highYesterday, icon : highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
//   console.log(hexColors);
//   console.log(rgbColors);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// const bookShelf = {

//   books: ["The last kingdom", "The guardian of dreams"],

//   getBooks() {
//     return "Returning all books";
//   },

//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },

// updateBook(oldName, newName) {
//   return `Updating book ${oldName} to ${newName}`
// }

// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     if(this.books.includes(oldName)){
//       this.books.splice(this.books.indexOf(oldName), 1, newName);
//     } else {
//       return `There is no book with name ${oldName} on the bookshelf`
//     }
//     return this.books;
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     if (this.potions.includes(potionName)) {
//     this.potions.splice(this.potions.indexOf(potionName), 1)
//       }
//   },
// };

// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     if (this.potions.includes(oldName)) {
//       this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//       return this.potions;
//     }
//   },
// };
// console.log(atTheOldToad.updatePotionName("Spee potion", 'Залупа коня'));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
//     }
//     return `Error! Potion ${potionName} is already in your inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         return this.potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

// const arr = [1,2,3,4,5,6,7,8];

// const temp = Math.floor(arr.length / 2);
// let temp2=0;
// let temp3=0;
// for (let i = 0, j = temp + 1; i <= temp, j<=arr.length; i++, j ++) {
//   temp2 += i;
//   temp3 += j;
// }
// const temp4 = (temp3 / temp2).toFixed();
// console.log(temp2);
// console.log(temp3);
// console.log(temp4);

// let num = "12,34,56";
// let temp2 = 0;
// const temp = num.split(",");
// for (let i = 0; i < temp.length; i++) {
//   temp2 += Number.parseInt(temp[i]);
// }
// console.log(temp2);

// const str =  "12,34,56";
// let sum = 0;

// for (const num of str.split(",")) {
//   sum += Number.parseInt(num);
// }
// console.log(sum);

// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }

//   // Функція вищого порядку
//   function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }

//   registerGuest("Манго", greet);

// const array = [1, 2, 3, 4, 5, 6];

// function each(array, callback) {
//   let total = array[0];
//   for (let i = 1; i < array.length; i++) {
//     total = callback(total, array[i]);
//   }
//   return total;
// }
// let sum = 0;
// function add(first, second) {
//     return sum = first + second;
// }
// function divide(first, second) {
//     each(array, add);
//     return  sum / array.length;
// }
// function multiply(first, second) {
//     return first * second;
// }
//  console.log(each(array, divide));

//  function createIncrementor (n) {
//     return function(num) {
//         return n + num
//     }
//  }
//  const addTen = createIncrementor(10)

//  console.log(addTen(15));

// const students = [
//     { name: "Манго", courses: ["математика", "фізика"] },
//     { name: "Полі", courses: ["інформатика", "математика"] },
//     { name: "Ківі", courses: ["фізика", "біологія"] },
//   ];
//   console.log(students.flatMap(student => student.courses));

//Повернути об'єкт у якому вказується кількість тегів
// {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tagCounts = {};
// tweets.forEach((tweet) => {tweet.tags.forEach((tag) => {if (tagCounts[tag]) {tagCounts[tag] ++} else {tagCounts[tag] = 1}})})
// const tags = tweets.flatMap(tweet => tweet.tags).reduce((curentTag, tag) => {if (curentTag[tag]) {curentTag[tag]++} else {curentTag[tag] = 1} return curentTag}, {})

// console.log(tagCounts)
// console.log(tags);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// // const inAscendingScoreOrder = students.sort(
// //   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// // );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// // const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
// //   firstStudent.name.localeCompare(secondStudent.name)
// // );

// console.log(students);
// console.log(inDescendingScoreOrder);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if(this.pizzas.includes(pizzaName)){
//       return onSuccess(pizzaName)
//     } else {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     }
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach(number => { number > value ? filteredNumbers.push(number) : number});

//     // Change code above this line
//     return filteredNumbers;
//   }

//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//   firstArray.forEach(item => { if (secondArray.includes(item)) {commonElements.push(item)}})
//       return commonElements;

//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));

// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach(item => {totalPrice += item;});

//     return totalPrice;
//   }

//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Change code above this line
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function changeEven(numbers, value) {
//    const pureEven = [...numbers]
//    pureEven.forEach((number, index) => {if (number % 2 === 0) {pureEven[index] += value}})
//    return pureEven
//   }

//   console.log(changeEven([1, 2, 3, 4, 5], 10));
//   console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//   console.log(changeEven([17, 24, 68, 31, 42], 100));
//   console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];

//   const titles = books.map(book => book.title);
//   console.log(titles);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];

//   const genres = books.flatMap(genre => genre.genres)
//   console.log(genres);

// const usersList =
// [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];
//   const getUserNames = users => users.map(({name}) => name)
//   console.log(getUserNames(usersList));
//   const getUserEmails = users => users.map(emails => emails.email)
//   console.log(getUserEmails(usersList));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = (students.flatMap(student => student.courses)).filter((course, index, array) => array.indexOf(course) === index);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// console.log(allCourses);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];

//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genre, idx, arr) => arr.indexOf(genre) === idx);
// console.log(allGenres);
// console.log(uniqueGenres);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];

//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";

//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING)
//   console.log(topRatedBooks);
//   const booksByAuthor = books.filter(book => book.author.includes(AUTHOR));
//   console.log(booksByAuthor);

// const usersList = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color)
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => (user.age > minAge && user.age < maxAge))
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.filter(fellow => fellow.includes(friendName)));
// const getFriends = (users) => users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
// const getActiveUsers = (users) => users.filter(user => user.isActive === true)
// const getInactiveUsers = (users) => users.filter(user => user.isActive === false)
// const getUserWithEmail = (users, email) => users.find(user => user.email.includes(email))
// const isEveryUserActive = (users) => users.every(user => user.isActive === true)
// const isAnyUserActive = users => users.some(user => user.isActive === true)
// const calculateTotalBalance = users => users.reduce((total, user) => {return user.balance + total}, 0)
// const getTotalFriendCount = users => users.reduce((count, user) => {return user.friends.length + count}, 0)
// const sortByAscendingBalance = users => users.sort((a, b) => a.balance - b.balance)
// const sortByDescendingFriendCount = users => [...users].sort((a, b) => b.friends.length - a.friends.length)
// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name))
// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
// const getSortedFriends = users => [...users].flatMap(friend => friend.friends).filter((friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b))
// const getTotalBalanceByGender = (users, gender) => [...users].filter(user => user.gender === gender).reduce((totall, user) => {return user.balance + totall}, 0)

// console.log(getUsersWithEyeColor(usersList, 'blue'));
// console.log(getUsersWithAge(usersList, 20, 30));
// console.log(getUsersWithFriend(usersList, "Briana Decker"));
// console.log(getFriends(usersList));
// console.log(getActiveUsers(usersList));
// console.log(getInactiveUsers(usersList));
// console.log(getUserWithEmail(usersList, "shereeanthony@kog.com"));
// console.log(isEveryUserActive(usersList));
// console.log(calculateTotalBalance(usersList));
// console.log(getTotalFriendCount(usersList));
// console.log(sortByAscendingBalance(usersList));
// console.log(sortByDescendingFriendCount(usersList));
// console.log(sortByName(usersList));
// console.log(getNamesSortedByFriendCount(usersList));
// console.log(getSortedFriends(usersList));
// console.log(getTotalBalanceByGender(usersList, 'female'));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(num => (num % 2 ===0));
// const eachElementInFirstIsOdd = firstArray.every(num => (num % 2 !==0));
// const eachElementInSecondIsEven = secondArray.every(num => (num % 2 ===0));
// const eachElementInSecondIsOdd = secondArray.every(num => (num % 2 !==0));
// const eachElementInThirdIsEven = thirdArray.every(num => (num % 2 ===0));
// const eachElementInThirdIsOdd = thirdArray.every(num => (num % 2 !==0));

// const anyElementInFirstIsEven = firstArray.some(num => (num % 2 ===0));
// const anyElementInFirstIsOdd = firstArray.some(num => (num % 2 !==0));
// const anyElementInSecondIsEven = secondArray.some(num => (num % 2 ===0));
// const anyElementInSecondIsOdd = secondArray.some(num => (num % 2 !==0));
// const anyElementInThirdIsEven = thirdArray.some(num => (num % 2 ===0));
// const anyElementInThirdIsOdd = thirdArray.some(num => (num % 2 !==0));

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((prValue, time) => prValue + time);
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);
// console.log(averagePlayTime);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {return total = total + (player.playtime / player.gamesPlayed)}, 0)
// console.log(totalAveragePlaytimePerGame);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// const authorsInAlphabetOrder = [...authors].sort();
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// const names = [...books].filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b))
// console.log(names);
//
// class User {
// constructor({ userName, userEmail, userAddress }) {
// this.userName = userName;
// this.userEmail = userEmail;
// this.userAddress = userAddress;
// }
// getUserEmail = () => this.userEmail;
// changeUserEmail = (newEmail) => this.userEmail = newEmail;
// }
//
// const mango = new User({
// userName: "Mango",
// userEmail: "mango@mango.net",
// userAddress: "Lviv",
// });
// console.log(mango);
// const newEmail = 'fuck@pusy.com'
// mango.changeUserEmail(newEmail)
// console.log(mango);

// class User {
// static #takenEmails = [];
//
// static isEmailTaken(email) {
// return User.#takenEmails.includes(email);
// }
//
// #email;
//
// constructor({ email }) {
// this.#email = email;
// User.#takenEmails.push(email);
// }
// get email()  {return this.#email};
// }
//
// const mango = new User({ email: "mango@mail.com" });
//
// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(mango.email);

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//      this.items = this.items.filter(item => item !== itemToRemove)
//     // const index = this.items.indexOf(itemToRemove);
//     // if (index !== -1) {this.items.splice(index, 1)}
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor (initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {return this.value};
//   padEnd(str) {this.value += str};
//   padStart(str) {this.value = str + this.value}
//   padBoth(str) { this.value = str + this.value + str}
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class User {
//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line

//   class Admin extends User {

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser"}

//   }
//   console.log(Admin.AccessLevel.BASIC);

// class User {
//     email;

//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }

//   class Admin extends User {
//     // Change code below this line
//     constructor({email, accessLevel}) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }

//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };

//     // Change code above this line
//   }

//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });

//   console.log(mango.email);
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

// class User {
//     email;

//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }

//   class Admin extends User {
//     // Change code below this line

//     blacklistedEmails = [];

//     blacklist(email) {
//         this.blacklistedEmails.push(email)
//     }

//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }

//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }

//     // Change code above this line
//   }

//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });

//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true

// let a = 'fuck';
// let b = 'kfuck';
// a = a.split('')
// b = b.split('')
// let c = b[0] === a[a.length - 1]
// console.log(c);

// // Дана некоторая строка. Найдите позицию третьего нуля в строке.
// let a = 'fuck0dsaf0adsf0asdfdfsg0dfsg0';
// a = a.split('')
// let position;
// let count = 0;
// for (let i = 0; i < a.length; i ++) {
// if (a[i] === '0') {
//    position = i;
//       count += 1;
//       if (count === 3)
//       break;
//   };
// }
// console.log(position);

// // Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.
// let a = '12,34,56'
// let b = 0;
// // a = a.split(',').map((value) => {b += Number(value); return b;})
// // b = (a.split(',')).reduce((prValue, number) => {return prValue += Number(number)},0)
// console.log(b);

// // Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: {	year: '2025',	month: '12', day: '31',}
// let a = '2025-12-31'
// a = a.split('-')
// console.log(a);
// const b = {}
// function foo(year, month, day) {
//     b.year = year;
//     b.month = month;
//     b.day = day;
// }
// foo(a[0], a[1], a[2]);
// console.log(b);

// // Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
// let a = "fuckdsafadsfasdfdfsgd3fsg";
// let b = a.split("");
// let index;
// for (let i = 0; i < b.length; i++) {
//   if (!isNaN(b[i])) {
//     console.log(index = Number(b.indexOf(b[i])));
//     break;
//   } else if (isNaN(b[i]) && i === b.length-1) {
//     console.log('Чисел не знайдено');
//   }
// }

// // Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// const obj = {
//   name: 'Alice',
//   age: 25,
//   isFuck: true,
// }
// a = Object.keys(obj)
// b = Object.values(obj)
// console.log(a, b);

// // Дано число. Выведите в консоль количество четных цифр в этом числе.
// const a = 459843186446;
// const b = a.toString().split('').reduce((prValue, elem) => {
//   if (Number(elem) % 2 === 0) {return prValue + 1}
//   return prValue;
//  }, 0)
//  console.log(b);

// // Дана некоторая строка:'abcde'Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:'AbCdE'
// let a = 'abcde'
// for (i=0; i<a.length; i++) {
//   if(i % 2 ===0 ) {
//    a = a.replace(a[i], a[i].toUpperCase())
//     console.log(a[i]);
//   }
// }
// console.log(a);

// // Дана некоторая строка со словами: 'aaa bbb ccc' Сделайте заглавным первый символ каждого слова в этой строке.
// // В нашем случае должно получится следующее: 'Aaa Bbb Ccc'
// let a = 'aaa bbb ccc';
// a = a.split(' ').map(word => {const firstLetter = word.charAt(0).toUpperCase(); const restWord = word.slice(1); return firstLetter + restWord})
// console.log(a);

// // Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех нулей в этой в строке.
// const a = '023m0df0dfg0';
// b = a.split('').filter(zero => Number(zero) === 0)
// console.log(b);

// // Дана некоторая строка:'abcdefg'  Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'
// a = "abcdefg";
// b = a.split("");
// for (let i = 2; i < b.length; i+=2) {
//     b.splice(i, 1)
// }
// a = b.join('')
// console.log(a);

// // Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
// a = [1, 2, 3, 4, 5, 6];
// even = a.filter(pos => pos %2 ===0).reduce((total, item) => total + item, 0)
// odd = a.filter(pos => pos%2 !==0).reduce((total, item) => total + item, 0)
// total = (even / odd).toFixed(2);
// console.log(even);
// console.log(odd);
// console.log(total);

// // Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
// const a = "023m0df0dfg0";
// b = a.split("");
// numbers = []
// for (i = 0; i < b.length; i++) {

//   if (!isNaN(Number(b[i]))) {
//     numbers.push(i+1)
//   }
// }
// console.log(numbers);

// // Дан массив с некоторыми числами, например, вот такой: [123, 456, 789] Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]
// a = [123, 456, 789]
// a = a.map(num => {return parseInt(num.toString().split('').reverse().join(''))});
// console.log(a);

// Дана некоторая строка с числом: '1234567' Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'

// a = "1234567654564654654654897987";
// b = a.split("");
// for (let i = b.length; i > 0; i -= 2) {
//   b.splice(i, 0, " ");
//   i--;
// }
// b = b.join(" ");
// console.log(a);
// console.log(b);

// // Дана некоторая строка: 'AbCdE' Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'
// a = 'AbCdE'
// b = a.split('')
// b = b.map(letter => {return letter === letter.toUpperCase() ? letter = letter.toLowerCase() : letter.toUpperCase()}).join('')
// console.log(b);

// // Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6] Слейте пары элементов вместе: [12, 34, 56]
// a = [1, 2, 3, 4, 5, 6, 789, 3];
// for (i = 0; i < a.length; i++) {
//   a[i] = a[i].toString();
// }
// for (i = 0; i < a.length; i++) {
//   if (i < a.length - 1) {
//     a[i] = parseInt(a[i] + a[i + 1]);
//     a.splice(i + 1, 1);
//   } a[a.length-1] = parseInt(a[a.length-1])
// }
// console.log(a);

// // Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Сделайте заглавным первый символ каждого второго слова в этой строке.
// // В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'
// a = "aaa bbb ccc eee fff";
// a = a.split(" ");
// for (let i = 1; i < a.length; i += 2) {
//   let firstLetter = a[i].charAt(0).toUpperCase();
//   let restWord = a[i].slice(1);
//   const totall = firstLetter + restWord;
//   a.splice(i, 1, totall);
// }
// a = a.join(' ')
// console.log(a);

// // Дана некоторая строка:  'a bc def ghij' Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем.
// // В нашем случае должно получится следующее: 'A BC DEF ghij'
// a = "a bc def ghij";
// b = a.split(" ").map((element) => {
//   if (element.length <= 3) {
//     return element.toUpperCase();
//   }
//   return element;
// });
// b = b.join(' ')
// console.log(b);

// // Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
// a = 'F'
// if( a === a.toUpperCase()) {console.log(`символ ${a} у верхньому регістрі`);} else {console.log(`символ ${a} у нижньому регістрі`)}

// // Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры.
// // В нашем случае получится такой результат: 28
// a = 123789;
// a = a.toString().split("");
// for (i = 0; i < a.length; i++) {
//   if (a[i] % 2 !== 0) {
//     a.splice(i, 1);
//     i--
//   }
// }
// a = a.join('')
// console.log(a);

// // Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
// a = "abCcdDeftg";
// b = a.split('').filter(letter => letter === letter.toUpperCase()).length > 2 ? console.log('більше 2') : console.log('меньше 2');

// // Дана некоторая строка: '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в которых количество символов больше трех.
// // В нашем случае должно получится следующее: '1 22 333 22 1'
// a = '1 22 333 4444 22 5555 1';
// a = a.split(' ').filter((subStr) => subStr.length <= 3).join(' ')
// console.log(a);

// // Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// arr1 = arr1.slice(0, 2).concat(arr2, arr1.slice(2))
// console.log(arr1);

// // Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56
// a = 123456;
// b = a.toString().split("");
// for (i = 0; i < b.length; i ++) {
//   b[i] = parseInt(b[i] + b[i + 1]);
//   b.splice(i + 1, 1);
// }
// b = b.reduce((total, item) => {return total + item}, 0)
// console.log(b);

// // Дан массив с числами: [1, 2, 3, 4, 5] Выведите в консоль элементы этого массива в обратном порядке.
// a = [1, 2, 3, 4, 5];
// console.log(a.reverse());

// // Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
// a = 'f689f';
// b = a.split('').filter(value => isNaN(parseInt(value)))
//     if (b.length > 3) {
//         console.log('в рядку більше трьох букв');
//     } else {console.log('в рядку менше трьох букв');}

// // Дано число. Получите первую четную цифру с конца этого числа.
// a = 123456654654;
// b = a.toString().split("");
// for (i = b.length; i > 0; i--) {
//   if (i % 2 === 0) {
//     console.log(`позиція ${i}, число ${b[i-1]}`);
//     break;
//   }
// }

// // Дана некоторая строка: 'abcde abcde abcde'  Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'
// a = 'abcde abcde abcde';
// a = a.split(' ').map(item => firstLetter = item.replace(item[0], '!'))
// console.log(a);

// // Дан массив с числами: [1, 2, 3, 3, 4, 5,5] Проверьте, что в этом массиве есть два одинаковых элемента подряд.
// a = [1, 2, 3, 3, 4, 5];
// for (i = 0; i < a.length; i++) {
//     if(a[i] === a[i+1]) {
//     console.log(`у масиві є два елементи "${a[i]}" підряд`);
//     }
// }

// // Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
// a = 12345678;
// b = Number(a.toString().split('').sort((a, b) => a - b).join(''));
// if (a === b) { console.log('цифри йдуть у порядку зростання');} else {console.log('цифри НЕ йдуть у порядку зростання');}

// // Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.
// a = [1, "", 2, 3, "", 5];
// a.map((item, idx, arr) => {
//   if (!item) {
//     arr.splice(idx, 1), 0;
//   }
// });
// console.log(a);

// // Дан массив:[[2, 1, 4, 3, 5], [3, 5, 2, 4, 1], [4, 3, 1, 5, 2]] Отсортируйте элементы в каждом подмассиве.
// a = [
//   [2, 1, 4, 3, 5],
//   [3, 5, 2, 4, 1],
//   [4, 3, 1, 5, 2],
// ];
// a = a.map((item) => item.sort((a, b) => a - b));
// console.log(a);

// // Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [1, 2, 3, 4, 5];
// // Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
// arr1 = [1, 2, 3, 4, 5, 9];
// arr2 = [1, 2, 3, 4, 5];
// // if (arr2 > arr1) {arr2 = arr2.slice(0, arr1.length)} else {arr1 = arr1.slice(0, arr2.length)}
// // // if (arr2 > arr1) {diff = arr2.length - arr1.length
// // // arr2.splice(-diff, diff)} else {diff = arr1.length - arr2.length
// // //     arr1.splice(-diff, diff)}
// console.log(arr1);
// console.log(arr2);

// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
// for (i = 10; i <= 1000; i++) {
//   if (i.toString().charAt(i.length - 2) % 2 === 0) {
//     console.log(i);
//   }
// }

// // Дан массив. Удалите из него каждый пятый элемент.
// let b = [];
// a = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// // for (i=4; i<a.length; i+=5) {
// //     a.splice(i, 1);
// //     i --;
// // }
// a = a.filter((_, idx) => (idx +1) % 5 !== 0)
// console.log(a);

// // Дана некоторая переменная с числом: let num = 5; Сделайте строку, содержащую столько нулей, сколько указано в переменной.
// // В нашем случае получится такая строка: '00000'
// let num = 3;
// // let a = [];
// // for (i = 0; i < num; i++) {
// //     a.push(0)
// // }
// // a = a.join('')
// a = '0'.repeat(num)
// console.log(a);

// // Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Удалите из этой строки каждое второе слово.
// // В нашем случае должно получится следующее: 'aaa ccc fff'
// a = 'aaa bbb ccc eee fff';
// a = a.split(' ').filter((_, idx)  => idx %2 === 0)
// console.log(a);

// // Дан массив:[[1, 2, 3], [4, 5, 6], [7, 8, 9]] Найдите сумму элементов этого массива.
// a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// a = a.flat().reduce((totall, item) => totall + item)
// console.log(a);

// // Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
// a = ['asdf', 'asd', 'sd', 'asp[odi]'];
// a = a.filter(item => item.length <= 3)
// console.log(a);

// // Дано некоторое число: 1357 Проверьте, что все цифры этого числа являются нечетными.
// a = 13576;
// a = a.toString().split('').every(item => item % 2 !== 0)
// console.log(a);

// // Дано некоторое слово: 'abcba' Проверьте, что это слово читается одинаково с любой стороны.
// a = "abcbag";
// b = a.split('').reverse().join('')
// a === b ? console.log(true): console.log(false);

// // Дан массив: [[[11, 12, 13],[14, 15, 16],[17, 17, 19],],[[21, 22, 23],[24, 25, 26],[27, 27, 29],],[[31, 32, 33],[34, 35, 36],[37, 37, 39],],]
// // Найдите сумму элементов этого массива.
// a = [
//   [
//     [11, 12, 13],
//     [14, 15, 16],
//     [17, 17, 19],
//   ],
//   [
//     [21, 22, 23],
//     [24, 25, 26],
//     [27, 27, 29],
//   ],
//   [
//     [31, 32, 33],
//     [34, 35, 36],
//     [37, 37, 39],
//   ],
// ];
// a = a.flat(2).reduce((total, item) => total += item)
// console.log(a);

// // Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
// for (i = 10; i <= 1000; i++) {
//   if (i.toString().charAt(i[0]) % 2 === 0) {
//     console.log(i);
//   }
// }

// // Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// // Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5]
// a = [1, 2, 3, 4, 5, 6, 7];
// for (i = 0; i < a.length - 1; i++) {
//     temp = a[i];
//     a[i] = a[i + 1]
//     a[i+1] = temp
//     i++
// }
// console.log(a);

// // Дан следующий объект:  Найдите сумму элементов этого объекта.
// let obj = {
//   1: {
//     'a': 11,
//     'b': 12,
//     'c': 13,
//   },
//   2: {
//     'd': 21,
//     'e': 22,
//     'f': 23,
//   },
//   3: {
//     'g': 31,
//     'h': 32,
//     'i': 33,
//   },
// };
// let k = 0
// for (let key in obj) {
//   innerObj = obj[key]
//    k += Object.values(innerObj).reduce((total, item) => total += item)
// }
// console.log(k);

// // Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
// a = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nam minu'
// a = a.split(' ').filter(item => item.charAt(0) === 'a')
// console.log(a);

// // Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
// a = [
//   11, 12, 13, 14, 15, 16, 17, 17, 19, 21, 22, 23, 24, 25, 26, 27, 27, 29, 31,
//   32, 33, 34, 35, 36, 37, 37, 39,
// ];
// a = a.filter(item => item % 5 === 0)
// console.log(a);

// // Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
// a = [
//     11, 12, 13, 14, 15, 16, 17, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 29, 30, 31,
//     32, 33, 34, 35, 36, 37, 37, 39, 40, 0.5
//   ];
//   a = a.filter(item => item.toString().includes('0'))
//   console.log(a);

// // Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
// a = [
//       11, 12, 13, 14, 15, 16, 17, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 29, 30, 31,
//       32, 33, 34, 35, 36, 37, 37, 39, 40, 0.5
//     ];
//     console.log(a.some(item => item.toString().includes('3')))

// // Дано некоторое число: 35142 Отсортируйте цифры этого числа. В нашем случае должно получится следующее: 12345
// const n = 35142
// const c = parseInt(Array.from(n.toString()).sort((a, b) => a - b).join(''))
// // const c = parseInt(n.toString().split('').sort((a, b) => a - b).join(''))
// console.log(typeof c);

// // Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'
// let str = "";
// for (i = 1; i <= 5; i++) {
//   str = str + "-" + i;
//   if ((i === 5)) {
//     str = str + "-";
//   }
// }

// let arr = [];
// for (let i = 1; i <= 5; i++) {
//   arr.push(i);
// }
// let str = "-" + arr.join("-") + "-";
// console.log(str);

// // Дан следующий объект: Найдите сумму элементов этого объекта.
// const object = {
//   1: {
//     1: {
//       1: 111,
//       2: 112,
//       3: 113,
//     },
//     2: {
//       1: 121,
//       2: 122,
//       3: 123,
//     },
//   },
//   2: {
//     1: {
//       1: 211,
//       2: 212,
//       3: 213,
//     },
//     2: {
//       1: 221,
//       2: 222,
//       3: 223,
//     },
//   },
//   3: {
//     1: {
//       1: 311,
//       2: 312,
//       3: 313,
//     },
//     2: {
//       1: 321,
//       2: 322,
//       3: 323,
//     },
//   },
// };

// function sum(obj) {
// 	let totall = 0;
//   for (let item in obj) {
//     if (typeof obj[item] === "object") {
//       totall += sum(obj[item]);
//     } else {
//       totall += obj[item];
//     }
// }
// return totall;
// }
// console.log(sum(object));

// // Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
// a = [
// 	    11, 12, 132, 14, 15, 16, 17, 17, 19, 20569, 21, 22, 23, 24, 25, 26, 27, 27, 29, 30, 31,
// 	    32, 33, 34, 35, 36, 37, 3748, 39, 40, 0.5
// 	  ];
// a = a.filter(item => item = item.toString().length <= 3)
// console.log(a);

// // Дано число, например, вот такое: let num = 12345; Проверьте, что все цифры этого числа больше нуля.
// let num = 12345;
// num = num.toString().split('').map(item => item > 0)
// console.log(num);

// // Дан некоторый массив, например, вот такой: [123, 456, 789] Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// a = [123, 456, 789];
// a =a.join('').toString().split('')
// console.log(a);

// // Дан следующая структура:Найдите сумму элементов этой структуры.
// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// function sum(obj) {
// 		let totall = 0;
// 	  for (let item in obj) {
// 	    if (typeof obj[item] === "object") {
// 	      totall += sum(obj[item]);
// 	    } else {
// 	      totall += obj[item];
// 	    }
// 	}
// 	return totall;
// }
// console.log(sum(data));

// // Дана строка со словами. Отсортируйте слова в алфавитном порядке.
// a = "єнот гніздо ананас двері банан елемент вишня"
// a = a.split(' ').sort((a, b) => a.localeCompare(b)).join(' ')
// console.log(a);

// // Через запятую написаны числа. Получите максимальное из этих чисел.
// a = '5, 5, 6, 7, 9, 5'
// b = a.split(',')
// b = Math.max(...b)
// console.log(b);

// // Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
// let a = [
//   1, 12, 1, 14, 15, 16, 7, 17, 9, 20569, 21, 2, 23, 24, 5, 26, 27, 27, 29, 30,
//   31, 32, 33, 34, 35, 6, 37, 3748, 39, 40, 0.5,
// ];
// for (i = 0; i < a.length; i++) {
//   if (a[i].toString().length === 1) {
//     a.splice(i + 1, 0, a[i]);
//     i++;
//   }
// }
// console.log(a);

// // Дана строка. Удалите из нее все гласные буквы.
// a = "єнот гніздо ананас двері банан елемент вишня";
// b = ["А", "Е", "Є", "И", "І", "О", "У", "Ю", "Я"];
// a = a.split('').filter(item => !b.includes(item.toUpperCase())).join('')
// console.log(a);

// a = "єнот гніздо ананас двері банан елемент вишня";
// b = ["А", "Е", "Є", "И", "І", "О", "У", "Ю", "Я"];
// a = a.split("").map((item) => b.includes(item.toUpperCase()) ? item.toUpperCase() : item).join('');
// console.log(a);

// // Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
// a = "єнот гніздо ананас двері банан елемент вишня";
// a = a.split(' ').map(item => item = item.slice(0, item.length-1) + item.charAt(item.length-1).toUpperCase()).join(' ')
// console.log(a);

// // Дан следующая структура: Найдите сумму элементов этой структуры.
// let data = [
//   {
//     1: [1, 2, 3],
//     2: [1, 2, 3],
//     3: [1, 2, 3],
//   },
//   {
//     1: [1, 2, 3],
//     2: [1, 2, 3],
//     3: [1, 2, 3],
//   },
//   {
//     1: [1, 2, 3],
//     2: [1, 2, 3],
//     3: [1, 2, 3],
//   },
// ];
// function totall(arr) {
//   result = 0;
//   for (obj of arr) {
//     if (typeof obj === "object") {
//       for (item in obj) {
//         result += obj[item].reduce((sum, item) => (sum += item));
//       }
//     }
//   }
//   return result;
// }
// console.log(totall(data));

// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
// let a = [
//       1, 12, 1, 14, 15, 16, 7, 17, 9, 20569, 21, 2, 23, 24, 5, 26, 27, 27, 29, 30,
//       31, 32, 33, 34, 35, 6, 37, 3748, 39, 40, 0.5,
//     ];

//    a.every(item => item.toString().includes('3')) ? console.log(true) : console.log(false);
//     // console.log(a);

// // Дана строка в формате: Преобразуйте ее в формат: 'snake_case'
// a = 'kebab-case'
// a = a.replace('-', '_')
// console.log(a);

// // Дана строка в формате: Преобразуйте ее в формат:'camelCase'
// a = "snake_case";
// a = a
//   .split("_")
//   .map((item, idx) =>
//     idx !== 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item
//   )
//   .join("");
// console.log(a);

// // Дана строка в формате: Преобразуйте ее в формат: 'snake_case'
// a = 'camelCase';
// a = a.split('').map((item, idx, arr) => item === item.toUpperCase() ? '_' + item : item).join('')
// console.log(a);

// // Сформируйте с помощью циклов следующий массив:
// // [
// // 	[1, 2, 3],
// // 	[1, 2, 3],
// // 	[1, 2, 3],
// // 	[1, 2, 3],
// // 	[1, 2, 3],
// // ]

// let a = [];
// let total = []
// for(i=1; i<=3; i++) {
//     total.push(i)
// } while (a.length <= 4) {
//     a.push(total)
// }
// console.log(a);
// console.log(total);

// // Дана строка. Проверьте, что эта строка состоит только из цифр.
// a = "5555ф5";
// function foo(str) {
//     let total = 0;
//     b = str.split('')
//    for (item of b) {
//     if(!isNaN(parseInt(item))) {
//         total += 1
//     }
//    }
//    if (total === b.length) {
//     console.log("рядок лише з цифр");
//    } else {console.log("рядок не лише з цифр");}
// }
// foo(a)

// // Дана строка. Проверьте, что эта строка состоит только из четных цифр.
// a = "22";
// function foo(str) {
//   for (item of str.split("")) {
//     if (!isNaN(parseInt(item)) && item % 2 === 0) {
//       continue;
//     } else {
//       return "рядок містить непарні числа, або містить букви чи символи";
//     }
//   }
//   return "усі числа парні";
// }
// console.log(foo(a));

// // Дан массив со числами. Удалите из него числа, имеющие два и более нуля.
// let a = [
//         1, 12, 1, 1004, 1500, 16, 7, 17, 9, 20569, 21, 2, 200003, 24, 5, 26, 27, 27, 29, 30,
//         31, 32, 33, 34, 35, 6, 37, 374008, 30009, 40, 0.5,
//       ];
// function editArr(array) {
//  b = array.filter(item => !item.toString().includes('00'))
//  console.log(b);
// }
// console.log(editArr(a))

// // Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
// for (i = 1; i <= 1000; i++) {
//   a = i
//     .toString()
//     .split("")
//     .map((item) => parseInt(item));
//   if (a.reduce((total, num) => (total += parseInt(num))) === 13) {
//     console.log(`${i}, ${a.join(' + ')} = 13`);
//   }
// }
// ___________________________________________
// for (i = 1; i <= 1000; i++) {
//   number = i;
//   totall = 0;
//   while (number > 0) {
//     totall += number % 10;
//     number = Math.floor(number / 10)
//   }
//   if (totall  === 13) {
//     console.log(`Сума чисел ${i} = 13`);
//   }
// }

// // Сформируйте с помощью циклов следующий массив:
// // [
// // 	[1, 2, 3],
// // 	[4, 5, 6],
// // 	[7, 8, 9],
// // ]
// const rows = 3;
// const cols = 3;
// let counter = 1;
// const resultArray = [];

// for (let i = 0; i < rows; i++) {
//   const row = [];
//   for (let j = 0; j < cols; j++) {
//     row.push(counter);
//     counter++;
//   }
//   resultArray.push(row);
// }
// console.log(resultArray);

// // Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
// let a = [
//   1, 12, 1, 1004, 1500, 16, 7, 17, 9, 20569, 21, 2, 200003, 24, 5, 26, 27, 27,
//   29, 30, 31, 32, 33, 34, 35, 6, 37, 374008, 30009, 40, 0.5,
// ];
// for (i = 0; i < a.length; i++) {
//     a.splice(i, 0, a[i])
//     i++
// }
// console.log(a);

// // Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
// let a = [
//   1, 12, 1, 1004, 1500, 16, 7, 17, 9, 20569, 21, 2, 200003, 24, 5, 26, 27, 27,
//   29, 30, 31, 32, 33, 34, 35, 6, 37, 374008, 30009, 40, 0.5,
// ];
// const foo = (arr, numb) => {
//     b = arr.filter(item => item % numb === 0)
//     return b;
// }
// console.log(foo(a, 5))

// // Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
// a = 123456
// b = 123467
// c = a.toString().split('').filter(item => b.toString().split('').includes(item))
// console.log(c);

// // Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
// a = 35732135347397365432;
// b = [];
// a.toString()
//   .split("")
//   .map((item, idx, arr) => {
//     if (parseInt(item) === 3) {
//       b.push(idx);
//     }
//   });
// b.pop();
// b.shift();
// console.log(b);

// // Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
// let a = [
//   1, 12, 1, 1004, 1500, 16, 7, 17, 9, 20569, 21, 2, 200003, 24, 5, 26, 27, 27,
//   29, 30, 31, 32, 33, 34, 35, 6, 37, 374008, 30009, 40, 0.5,
// ];

// findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]);
// console.log("result:", result);

// function findUniq(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let isUnique = true;

//       for (let j = 0; j < arr.length; j++) {
//         if (i !== j && arr[j].split('').some(char => arr[i].includes(char))) {
//           isUnique = false;
//           break;
//         }
//       }

//       if (isUnique) {
//         return arr[i];
//       }
//     }

//     return null; // Повертаємо null якщо унікальний рядок не знайдено
//   }

//   console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));

// // Потрібно створити функцію яка буде шукати нарциса. Головна умова: нарциса знають всі, нарцис не знає нікого.
// // Not found
// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: ['Alex']
//     },
// ]
// // //Not found
// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// // // jhon
// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];
// function findNarcisse (arr) {
//     let result = '';
//     arr.map((item) => {
//         for (const key in item) {
//             if(item[key].length === 0) {
//                 result +=` ${item.name}`;
//                 return result;
//             }
//         }
//     })
//     return result || 'Not found';
// }

// console.log(findNarcisse(people1))
// --------------------------------------------------------------------------------------------------------//

// // Представлений масив фільмів (films) кожен елемент масиву являється об'єктом в якого є назва фільму та масив з жанрами до яких він відноситься, але в масиві (genreIDs) тільки ID цих фільмів.
// // Потрібно в кожен об'єкт додати ключ genreNames який буде масивом з назвами жанрів до яких цей фільм відноситься. Після чого відрендерити список фільмів як наведено в прикладі нижче (Expected result),
// // якщо в списку жанрів більш ніж 2 фільми тоді рендеримо назву перших двох жанрів, а всі інші замінюємо на "Others".
// // Співвідношення ID жанру та назви жанру знаходиться в об'єкті genresInfo.

// // //Object example
// // {
// //     title: "Interceptor",
// //     genreIDs: [
// //         28,
// //         53,
// //         12,
// //     ],
// //     genreNames: [
// //         "Action",
// //         "Thriller",
// //         "Adventure"
// //     ]
// // }

// ////  Expected result
// // Films list:
// // 1. 'Interceptor: Action, Thriller, Others.'
// // 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// // 3. 'Last Seen Alive: Action, Thriller.'
// // 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'

// const films = [{
//         title: "Interceptor",
//         genreIDs: [
//             28,
//             53,
//             12,
//         ],
//     },
//     {
//         title: "Fantastic Beasts: The Secrets of Dumbledore",
//         genreIDs: [
//             14,
//             12,
//             28
//         ],
//     },
//     {
//         title: "Last Seen Alive",
//         genreIDs: [
//             28,
//             53
//         ],
//     },
//     {
//         title: "Jurassic World Dominion",
//         genreIDs: [
//             878,
//             28,
//             12,
//             53
//         ],
//     },
// ];

// const genresInfo = {
//     genres: [{
//         id: 28,
//         name: "Action"
//     }, {
//         id: 12,
//         name: "Adventure"
//     }, {
//         id: 14,
//         name: "Fantasy"
//     }, {
//         id: 878,
//         name: "Science Fiction"
//     }, {
//         id: 53,
//         name: "Thriller"
//     }, {
//         id: 10752,
//         name: "War"
//     }, {
//         id: 37,
//         name: "Western"
//     }]
// }

// //     .

// --------------------------------------------------------------------------------------------------------//

// // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // name приватна властивість (ім'я, успадковується від User),
// // surname приватна властивість (прізвище, успадковується від User),
// // year (рік вступу до вузу).
// // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // Приклад ініціалізації екземпляру класа:
// // const student = new Student('Петрик', 'Пяточкин', 2019);

// // student.getFullName(); //поверне 'Петрик Пяточкин'
// // student.getCourse();   //поверне 3 (третій курс)

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");

const input = document.querySelector('.js-input')
input.addEventListener('input', onChange)
console.log(input.value)

function onChange(evt){
    evt.defaultPrevented;
    console.info(evt)
    console.log(evt.target.isCheked())
    // evt.target.value = defaultValue;
}