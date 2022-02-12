import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDI10Trn00hubt9tUmmys95dWuzuiI4E3E",
    authDomain: "prueba-50aa5.firebaseapp.com",
    projectId: "prueba-50aa5",
    storageBucket: "prueba-50aa5.appspot.com",
    messagingSenderId: "555503369211",
    appId: "1:555503369211:web:03671481d4f6c839a7e95e",
    measurementId: "G-5X1BEDHHR5"
});

export const getFirebase = () => {
    return app;
};

export const getFirestore = () => {
    return firebase.firestore(app);
};