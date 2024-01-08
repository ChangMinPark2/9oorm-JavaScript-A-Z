// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         console.log('it is 3');
//         continue;
//     }
//
//     if (i === 5) {
//         console.log('it is 5');
//         break;
//     }
//     console.log('number' + i);
// }

const user = {
    name: 'han',
    province: '경기도',
    city: '성남시'
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}