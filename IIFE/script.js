// (
//     function () {
//         var aName = 'Barry';
//     }
// )();
//IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능 하다.
// console.log(aName);


// const score = () => {
//     let count = 0;
//     return {
//         current: () => {return count},
//         increment: () => {return count++},
//         reset: () => {count = 0}
//     }
// }
//
// console.log(typeof score());
// console.log(score);
//
// console.log(score().current());
// score().increment();
// console.log(score().current());

const score = (() => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {return count++},
        reset: () => {count = 0}
    }
})()

console.log(typeof score);
console.log(score);
console.log(score.current());
