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

const usersList =
[
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39
    }
  ];
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

