// const person = {
//     name: 'Amit',
//     age: 24,
//     location: {
//         city: 'Haifa',
//         temp: 28
//     }
// };

// const { name = 'Anonymous', age } = person;

// const { city, temp: temper} = person.location;

const address = ['Yakinton 14 b', 'qiryat bialik', 'Israel'];

const [street, city, state] = address;

console.log(`you are in ${city} ${state}`);

const item = ['coffee', '2', '3', '4'];

const [drinkType, , medium] = item;
console.log(`A medium ${drinkType} cost ${medium} $`)