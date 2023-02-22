// ternay operator

// let isloggine = 0;
// if (isloggine == 0) {

//   document.write('login');
// } else {
//   document.write('logout');
// }

// let option = isloggine == 1 ? 'logout' : 'login';
// document.write(option);
// let user;
// user = 'prashant';
// alert(user ?? "gesest user");
// let input;

// input = 0;

// if (input === 1) {
//   document.write('conti...');
// } else if (input === 'y') {
//   document.write('conti...');
// } else if (input === 'yes') {
//   document.write('conti...');
// } else if (input === 'end') {
//   document.write('no...');
// }

// switch (input) {
//   case 1: // if(input===1)
//     document.write('continue');
//     break;
//   case y: //if(input===1)
//     document.write('continue');
//     break;
//   case 1:
//     // if // (input === 1)
//     document.write('continue');
//     break;
//   case 0: // if(input===1)
//     document.write('end');
//     break;
//   default:
//     document.write('wrong input');
// }

// while

// let counter = 1;
// while (counter <= 10) {
//   document.write('ram');
//   counter++;
// }

// do while
// let c = 1;
// do {
//   document.write('prashant');
//   c++;
// } while (c >= 10);

// forloop
// for (let x = 1; x <= 10; x++) {
//   document.write(x);
// }

// break
// for (let x = 1; x <= 10; x++) {
//   if (x == 5) {
//     break;
//   }
//   document.write(x);
//   document.write('<br>');
// }

// continue
// for (let x = 1; x <= 10; x++) {
//   if (x == 5) {
//     continue;
//   }
//   document.write(x);
//   document.write('<br>');
// }

// nestedloop
// for (let x = 1; x <= 10; x++) {
//   document.write(x);
//   document.write('<br><br>');
//   for (let y = 1; y < 3; y++) {
//     document.write(y);
//     document.write('<br>');
//   }
// }

// alert
// alert('hello');

// prompt
// prompt('enter no')
// let age = prompt('enter your age', 20);
// if (age != null) {
//   document.write('your age is ${age}');
// } else {
//   document.write('your age is blank');
// }

// confirm
// let responce = confirm('are u sure, you want to delete?');
// if (responce) {
//   document.write('deleted');
// } else {
//   document.write('not deleted');
// }

// typeof
// let type = true;
// alert(typeof type);
// let type = '5' - 'ten' ;
// console.log(type);
// console.log(typeof type);

// conver string to Number
// let newtype = '32';
// console.log(typeof newtype);
// let new2type = Number(newtype);
// console.log(typeof new2type);

// let type = 0;
// console.log(typeof type);
// let Newtype = Boolean(type);// only 0 is false
// console.log(Newtype);
// console.log(typeof Newtype);

// string manipulation   string chng
// let str = 'prashant';
// let str2 = 'damale';
// let green = `hi ${str}`;
// console.log(str.length);
// console.log(str[3]);
// console.log(str + '     ' + str2);
// if ('damale' == str) {
//   console.log('Equal');
// } else {
//   console.log('not Equal');
// }

// let str3 = str.concat(' ', str2);
// console.log(str3);

// let str = ' this is javascript tutorial. it  is good tutorial ';
// let substring = str.substr(8, 19);
// console.log(substring);
// let position = str.indexOf('is', 6);
// let lastposition = str.lastIndexOf('is');
// let trimedstr = str.trim();
// console.log(str + ' ' + trimedstr.length);

// console.log(str + ' ' + str.length);
// let uppercase = str.toUpperCase();
// console.log(uppercase);
// console.log(position);
// console.log(lastposition);

// replace String
// let replacefunction = str.replace('good', 'the best');
// console.log(str);
// console.log(replacefunction);

// let checkstringheyanahi = str.includes('good');
// console.log(checkstringheyanahi);

// Array;
// let book = ['math', 'physics', 'bio', 'computerscience'];
// let books = book.slice();
// console.log(books);
// console.log(book);
// console.log(book[0]);
// book[1] = 'english';
// console.log(book);

// operation of Array
// console.log(book.length);
// book.push('hindi');
// book.unshift('hindi');
// console.log(book);

// delete last element pop
// book.pop();
// console.log(book);

// delete first Element
// book.shift();
// console.log(book);

// delete Promise Element
// book.splice(1, 2);
// console.log(book);

// Selected element Position
// let position = book.indexOf('bio');
// console.log(position);

// let books = 'math';
// who to find normal arr or variable
// console.log(Array.isArray(book));

// split(msg convert in Array)
// let text = 'this is a random text';
// let splitemsginarray = text.split(' ');
// console.log(splitemsginarray);

// array join in msg type
// console.log(book);
// let joinarray = book.join('-');
// console.log(joinarray);

// console.log(book);

// let a = 'prashant';
// a[5] = 'A';
// let text = a.split('');
// console.log(text);
// text.splice(4, 1, 'a');
// let notchng=text.splice(4,0,'A')
// console.log(text);
// let atext = text.join('');
// console.log(atext);

// let btext

// console.log(a);

// text.insert(index[2], 'a');
// console.log(text);

// let A = 'prashant';
// replace h to u
// let text = a.split('');
// console.log(text);
// text.splice(4, 1, 't');
// console.log(text);
// text1 = text.join('');
// console.log(text1);

// let a = [1, 2, 3, 4, 3, 2];
// b = [...new Set(a)];

// console.log(b);

// let result = {};

// for (let i = 0; i < b.length; i++) {
//   result[b[i]] = [];
//   for (let j = 0; j < a.length; j++) {
//     if (b[i] == a[j]) {
//       result[b[i]].push(a[j]);
//     }
//   }
// }

// console.log(result);

// let b1 = a.split('');
// console.log(b1);
// b1[3] = 't';
// console.log(b1);

let a = {
  proj1: ['emp1', 'emp2'],
  proj2: ['emp3', 'emp4', 'emp1'],
  proj3: ['emp2', 'emp4'],
};

console.log(Object.keys(a));
/**
  Write a program to return  {
    emp1: ['proj1', 'proj2'],
    emp2: ['proj1', 'proj3'],
    emp3: ['proj2'],
    emp4: ['proj2', 'proj3'],
  }
*/
// console.log(Object.values(a));
// console.log(Object.keys(a));

// for (let key of Object.keys(a)) {
//   console.log(key,a[key]);
//   let b = [];
//   b = a[key];
//   console.log(b);
// }

// resulat = Object.keys[a];
// console.log(resulat);
// }
// console.log(resulat);
// let b = [];
// b = a.keys;
// console.log(b);

// const array1 = [5, 12, 8, 130, 44];

// let index = 2;

// console.log(array1.at(index));

// x = Object.keys(a);
// x = [1, 2, 3];
// // console.log(x);
// let result = [];
// for (var i = 0; i < x.length; i++) {
//   for (var j = 1 + 1; j < x.length + 1; j++) {
//     console.log(x.at(i, j));
//     let v = x.at(i);
//     // console.log(v);
//   }
// }

// x = Object.keys(a);
// // console.log(x);
// for (var i = 0; i < x.length; i++) {
//   for (var j = 1 + 1; j < x.length + 1; j++) {
//     let b = i;
//     let c = j;
//     let v = x.slice(i, j);
//     console.log(v);
//   }
// }

// x=(Object.keys(a));
// // console.log(x);
// for (var i = 1; i < x.length; i++) {
// for (var j = 1 + 1; j < x.length + 1; j++) {
//     // console.log(x)
//      let v = x.slice(i, j);
//     console.log(v)
// }

// }

x = Object.keys(a);
// console.log(x);
let v = [];
for (var i = 1; i < x.length; i++) {
  for (var j = 1 + 1; j < x.length + 1; j++) {
    console.log(x);
    v = x.at(i);
    console.log(v);
    console.log(i, j);
    return i;
  }
  console.log(i);
}

console.log(x.at(b));
console.log('hellooo');
