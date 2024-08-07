// // 1-masala
// let array = [1, 2, 3, 4, 5, 6, 7];
// function OddElements(arg) {
//     let arr = arg.filter(num => num % 2 === 1);
//     return arr.length;
// }
// let res = OddElements(array);
// console.log(res);

// // 2-masala
// let str = 'He1l2lo 5w65o85r5l8dd';
// function extractNumbers (arg) {
//     let arr = arg.split('').filter(num => num >= 0 || num < 0).filter(num => num !== " ");
//     return arr;
// }
// let res = extractNumbers(str);
// console.log(res);

// // 3-masala
// let str = 'hello world';
// function strSum(arg) {
//     let arr = arg.split(' ');
//     return arr.length;
// }
// let res = strSum(str);
// console.log(res);

// // 4-masala
// let array = [-1, 4, 5, 6, 7];
// function minArr(arg) {
//     let arr = Math.min(...arg);
//     return arr;
// }
// console.log(minArr(array));

// // 5-masala
// let str = 'hello world';
// function reverseStr(arg) {
//     return str.split('').reverse().join('');
// }console.log(reverseStr(str));

// // 6-masala
// let num = 484651;
// function numberSum(arg) {
//     let sum = 1;
//     let arr = arg.toString().split('');
//     arr.forEach(element => {
//         sum *= element;
//     });
//     return sum;
// }
// console.log(numberSum(num));

// // 7-masala
// let array = [-1, 4, 5, 6, 7];
// function maxOfMin(arg) {
//     let arr = arg.sort(function(a, b) {
//         return b - a;});
//         return arr;
// }
// console.log(maxOfMin(array));

// // 8-masala
// let string = 'hello world';
// let str = 'wor';
// function deleteStr(arg1, arg2) {
//     let arr = arg1.replace(arg2, '')
//     return arr;
// }
// console.log(deleteStr(string, str));

// // 9-masala
// let str = ['apple', 'banana', 'cherry'];
// function UpperCaseStr(arr) {
//     return arr.map(element => element.toUpperCase());
// }
// console.log(UpperCaseStr(str));

// // 10-masala
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function OddNumbers(arr) {
//     return arr.filter(num => num % 2 !== 0);
// }
// console.log(OddNumbers(numbers));

// // 11-masala
// function findLongestWord(arr) {
//     return arr.reduce((longest, currentWord) => {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, "");
// }
// let words = ['apple', 'banana', 'cherry', 'watermelon'];
// let longestWord = findLongestWord(words);
// console.log(longestWord);

// // 12-masala
// function sumArray(arr) {
//     return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }
// let numbers = [1, 2, 3, 4, 5];
// let sum = sumArray(numbers);
// console.log(sum);

// // 13-masala
// function removeNumbers(arr) {
//     return arr.filter(num => num >= 0);
// }
// let numbers = [1, -2, 3, -4, 5, -6];
// let res = removeNumbers(numbers);

// console.log(res);


// 14-masala
// let arr = ['salom', 'hayr', 'kun']
// function arrayLength(arg) {
//     let res= []
//     for (const i of arg) {
//         res.push(i.length)
//     }
//     return res
// }
// console.log(arrayLength(arr));

// 15-masala
// let arr = [1, 2, 3, 4, 5]
// function arrayKvadrati(arg) {
//     let res = []
//     for (const i of arg) {
//         res.push(i**2)
//     }
//     return res
// }
// console.log(arrayKvadrati(arr));

// 16-masala
// function getUniqueElements(arr) {
//     return [...new Set(arr)];
// }
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// let uniqueNumbers = getUniqueElements(numbers);
// console.log(uniqueNumbers);

// 17-masala
// let arr = [1, 2, 3, 4, 5]
// function teskariArray(arg) {
//     let res = []
//     for (const i of arg) {
//         res.unshift(i)
//     }
//     return res
// }
// console.log(teskariArray(arr));

// 18-masala
// let arr = ['qalay','assalom','salom', 'hayr', 'kun']
// function str(arg) {
//     let res = []
//     res.push((arg.sort()).join(' '))
//     return res.join(' ')
// }
// console.log(str(arr));

// 19-masala
// function str1(arg) {
//     let res = arg.split(' ');
//     let res2 = res.map(e => e.split('').sort().join(''));
//     return res2.join(' ');
// }
// let str = "salom dunyo";
// console.log(str1(str));

// 20-masala
// let str = 'salom ishlar qalay'
// let resArray = str.split(' ')
// let res = resArray.map(function(v){
//     return v[0].toUpperCase() + v.slice(1);
// })
// console.log(res.join(' '));

// 21-mmasala
// let str = 'salom ishlar qalay'
// function removeProbel(arg) {
//     let res = arg.split(' ')
//     return res.join('')
// }
// console.log(removeProbel(str));

// 22-masala
// let str = 'salom ishlar qalay'
// function teskariSoz(arg) {
//     let res = arg.split(' ');
//     let res2 = res.map(e => e.split('').reverse().join(''));
//     return res2.join(' ');
// }
// console.log(teskariSoz(str));
//? metodlarsiz ishlanishi

// 23-masala
// function wordLengths(arg) {
//     let res = [];
//     let res2 = 0;
//     for (const i of arg) {
//         if (i !== ' ') {
//             res2++;
//         } else {
//             if (res2 > 0) {
//                 res.push(res2);
//                 res2 = 0;
//             }
//         }
//     }
//     if (res2 > 0) {
//         res.push(res2);
//     }
//     return res;
// }
// let str = 'salom ishlar qalay'
// console.log(wordLengths(str));



















