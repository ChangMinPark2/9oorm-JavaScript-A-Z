// let user = {
//     name : 'john',
//     age : 45
// }
//
// console.log(user.name);
// console.log(user.hasOwnProperty('email'));
//

function Person(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
}

Person.prototype.calculateAge = function () {
    const diff = Date.new() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const john = new Person('john', '@@asdf', '7-10-91');
const han = new Person('han', '@@asdf', '2-11-91');

console.log(john);
console.log(han);



