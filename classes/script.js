// class Person{
//     constructor(name, email, birthday) {
//         this.name = name;
//         this.email = email;
//         this.birthday = birthday;
//     }
//     introduce() {
//         return `Hello my name is ${this.name}`;
//     }
//
//     static multipleNumbers(x, y) {
//         return x * y;
//     }
// }
// const john = new Person('john', 'aa@ba.com', '10-3-87');
// console.log(john);
// console.log(john.introduce());
// console.log(Person.multipleNumbers(2, 7))

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce() {
        return `hello i am ${this.name}`;
    }
}

class Client extends Person {
    constructor(name, email, phone, address) {
        super(name, email);

        this.phone = phone;
        this.address = address;
    }
}

const john = new Client('john', '.com', '010-1111', 'seoul');
console.log(john.introduce());