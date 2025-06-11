// const aaa = ''
// if (aaa) {
//     console.log(true)
// } else {
//     console.log(false)
// }
 
// console.log(aaa ? true : false)

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// array.every((element) => {
//   if (element === 3) {
//     console.log('Found 3, exiting loop');
//     return false; // 结束 every 循环
//   }
//   console.log(element);
//   return true;
// });

let aaa =[ 'a' , 'b' , 'c']
let bbb = aaa.map((item, index) => {
    return item + index
});
console.log(aaa)
console.log(bbb)