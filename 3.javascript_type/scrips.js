let foo = true;

console.log(typeof foo)

//원시 타입
const name = "han";

const age = 30;

const hasJob = true;

const car = null;

let anything;

const sym = Symbol();

//참조 타입
const hobbies = ['walking', 'books'];

//객체 타입
const address = {
    province: '경기도',
    city: '성남시'
}
console.log(typeof hobbies);
console.log(Array.isArray(hobbies));