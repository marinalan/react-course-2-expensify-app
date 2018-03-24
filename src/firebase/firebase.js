import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_STORAGE_BUCKET
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };  

  // database.ref('expenses')
  //   .on('child_added', (snapshot) => {
  //     console.log(snapshot.key, snapshot.val());
  //   });
    // database.ref('expenses')
    // .on  ('child_changed', (snapshot) => {
    //   console.log(snapshot.key, snapshot.val());
    // });
  // database.ref('expenses')
  //   .on('child_removed', (snapshot) => {
  //     console.log(snapshot.key, snapshot.val());
  //   });
  // database.ref('expenses')
  //   .on('value', (snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });

  //     console.log(expenses);
  //   });
  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });

  //     console.log(expenses);
  //   });
  // database.ref('expenses').push({      
  //     description: 'order of new glasses',
  //     note: 'replacing scratched glasses',
  //     amount: 30000,
  //     createdAt: moment(0).add(4, 'days').valueOf()
  // });

  //database.ref('notes/-L7mBHKCkB96NJxBaz-c').remove();
  // database.ref('notes/-L7mBHKCkB96NJxBaz-c').update({
  //   body: 'Buy food'
  // });

  // database.ref('notes').push({
  //   title: 'Course Topic',
  //   body: 'React Native, Angular, Python'
  // });
  // const firebaseNotes = {
  //   notes: {
  //     apoijsadf: {
  //       title: 'First note!',
  //       body: 'This is my note'
  //     },
  //     apoijasdfpoijwe: {
  //       title: 'Another note',
  //       body: 'This is my note'
  //     }
  //   }
  // };

  // const notes = [{
  //     id: '12',
  //     title: 'First note',
  //     body: 'This is my note'
  //   },{
  //     id: '761ase',
  //     title: 'Another note',
  //     body: 'This is my note'
  // }];

  // database.ref('notes').set(notes);
  // database.ref('notes/12')

  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // }, (e) => {
  //   console.log('Error with data fetching', e);
  // });

  
  // database.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val); 
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });

  // database.ref().set({
  //   name: 'Andrew Mead',
  //   age: 26,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software Developer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Philadelphia',
  //     country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((e) => {
  //   console.log('This failed.', e); 
  // });

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });

  // database.ref('age')
  //   .remove()
  //   .then(() => {
  //     console.log('Removed isSingle');
  //   })
  //   .catch((e) => {
  //     console.log('Failed to remove isSingle: ', e);
  //   })
