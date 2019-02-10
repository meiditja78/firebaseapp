import firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyCClszg09TpeongiU6gHd8UO_9lCwumlBw",
    authDomain: "my-first-react-project-757e7.firebaseapp.com",
    databaseURL: "https://my-first-react-project-757e7.firebaseio.com",
    projectId: "my-first-react-project-757e7",
    storageBucket: "my-first-react-project-757e7.appspot.com",
    messagingSenderId: "710116115666"
  };

var fire = firebase.initializeApp(config);

export default fire;
