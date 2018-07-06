const functions = require('firebase-functions');
var admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.afterOauth = functions.auth.user().onCreate((userRecord, context) => {
    admin.database().ref(`users/${userRecord.uid}`).set({
        displayName: userRecord.displayName,
        email: userRecord.email,
        photoURL: userRecord.photoURL
    });
})
