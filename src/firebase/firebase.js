// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH6P4OlF4AAgHncBNF3NNKIqEZxQe0JEg",
    authDomain: "jack-back-learning-app.firebaseapp.com",
    projectId: "jack-back-learning-app",
    storageBucket: "jack-back-learning-app.appspot.com",
    messagingSenderId: "727723967936",
    appId: "1:727723967936:web:8ba77af99d083e550fb425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;