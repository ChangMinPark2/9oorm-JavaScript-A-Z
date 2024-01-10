function makeIterator(numbers) {
    let nexIndex = 0;

    return {
        next: function () {
            return nexIndex < numbers.length ?
                {value: numbers[nexIndex++], done: false } :
                {value: undefined, done: true}
        }
    }
}



const numbersArray = [1, 2, 3];
// const numbersIterator = makeIterator(numbersArray);

//심볼 이터레이터를 이용하면 반복가능한 값을 반복기로 생성가능하다.
const numbersIterator = numbersArray[Symbol.iterator] () // 위에 만든 메서드랑 똑같은거임


console.log(numbersIterator.next()); //1
console.log(numbersIterator.next()); //2
console.log(numbersIterator.next()); //3
console.log(numbersIterator.next()); //undefined, true



