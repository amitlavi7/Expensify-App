import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_AUTH_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// //child_removed
// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('Expenses')
// //     .on('value', (snapshot) => {
// //         const expenses =[];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// // database.ref('Expenses').push({
// //     description:'Rent',
// //     note: 'Rent for november',
// //     amount: 1200,
// //     createdAt: 0
// // });


// // database.ref('notes/-M4ivWRH1f98EKO6XaEt').remove();

// // database.ref('notes').push({
// //     title: 'aaaaa First note!',
// //     body: 'this is my note'
// // });

// // const notes = [{
// //     id: '12',
// //     title: 'First note!',
// //     body: 'this is my note'
// // }, {
// //     id: '1asf2',
// //     title: 'sec note!',
// //     body: 'this is my note'
// // }];

// // database.ref().set(notes);

// // database.ref()
// //     .on('value', (snapshot) => {
// //         const val = snapshot.val();
// //         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// //     });

// // setTimeout(() => {
// //     database.ref('age').set(25);
// // }, 5000);

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val)[];
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e);
// //     });

// // database.ref().set({
// //     name: 'Amit Lavi',
// //     age: 25,
// //     stressLevel: 6,
// //     job: {
// //         title: 'software',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Beer-Sheva',
// //         country: 'Israel'
// //     }  
// // }).then(() => {
// //     console.log('Data is saved!');
// // }).catch((e) => {
// //     console.log('This failed.', e)
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'TLV'
// // });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed ');
// //     }).catch((e) => {
// //         console.log('error:', e)
// //     });