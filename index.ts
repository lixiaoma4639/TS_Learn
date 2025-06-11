/**
 * 学习地址: https://www.bilibili.com/video/BV14Z4y1u7pi/
 */

// var noErrorTip = 'ff';
// if (noErrorTip) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// var name2 = 'fff'
// console.log(!!name2)
// if (name2) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// const cards = {
//     cvv: /^\d{2,4}$/,
//     OAX: /^3[4,7]\d{13}$/,
//     AX: /^3[4,7]\d{13}$/,
//     OMC: /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$|^2(?:2(?:2[1-9]|[3-9]\d)|[3-6]\d\d|7(?:[01]\d|20))-?\d{4}-?\d{4}-?\d{4}$/,
//     MC: /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$|^2(?:2(?:2[1-9]|[3-9]\d)|[3-6]\d\d|7(?:[01]\d|20))-?\d{4}-?\d{4}-?\d{4}$/,
//     OVA: /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/,
//     VA: /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/,
//     OJC: /(^(352)[8-9](\d{11}$|\d{12}$))|(^(35)[3-8](\d{12}$|\d{13}$))/,
//     JC: /(^(352)[8-9](\d{11}$|\d{12}$))|(^(35)[3-8](\d{12}$|\d{13}$))/,
//     DC: /^3[0,6,8]\d{12}$/,
//     UnionPay: /^[1-9]\d{14,18}$/,
// }
// const resolutionCards = {
//     "AX": /^3[47][0-9]{0,13}$/,//√
//     "MC": /^(5[1-5][0-9]{0,14}|2[2-7][0-9]{0,14})$/,//√
//     "VA": /^4[0-9]{0,18}$/,//√
//     "JC": /^(352[8,9]{1}[0-9]{0,15}|35[4-8]{1}[0-9]{0,16})$/,//√
//     "DC": /^(36)[0-9]{0,12}$/,//√
//     "UnionPay": /^[1-9]\d{14,18}$/,
// }
// console.log(resolutionCards.hasOwnProperty('ffff'))

// for (const [key, value] of Object.entries(resolutionCards)) {
// }


// const  cashierParams = {
//     name: "li",
//     age : 18,
//     height: 123
// }
// const aaa = {
//     ...cashierParams,
//     height: 88
// }
// console.log(aaa)


// const bbb = undefined
// let ccc = undefined
// console.log(bbb == ccc)

// const aaa = 'fff';
// if (!!aaa) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// let cardList: (number | string)[] = []
// console.log(cardList[0])


// const arrayA = ["a", "b", "dd", "4", "ff", "23"];

// function moveValueToFront(arr: Array<string>, target: string) {
//     // 使用sort方法，并提供一个自定义比较函数
//     arr.sort((a: string, b: string) => {
//         // 将目标值移动到数组首位
//         if (a === target) return -1;
//         if (b === target) return 1;
//         return 0;
//     });
// }

// const B = "4";
// moveValueToFront(arrayA, B);
// const C = "ff";
// moveValueToFront(arrayA, C);

// console.log(arrayA);


const arrayA = ["a", "b", "dd", "4", "ff", "23"];

function moveValueToFront(arr: Array<string>, target: string) {
    // 使用filter方法将匹配的元素过滤出来
    const matchingElements = arr.filter(item => item === target);

    // 使用concat方法将匹配的元素和剩余的元素合并
    const newArray = matchingElements.concat(arr.filter(item => item !== target));

    return newArray;
}

const B = "ff";
const newArrayA = moveValueToFront(arrayA, B);

console.log(newArrayA);

console.log(arrayA);