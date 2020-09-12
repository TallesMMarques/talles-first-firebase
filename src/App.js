import React from 'react';
import firebase from './services/init-firebase';

import Cadastro from './Cadastro';
import Login from './Login';
import LoginGoogle from './LoginGoogle';

function App() {
  const [userName, setUserName] = React.useState("");

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.

      var displayName = user.displayName;
      var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      // ...
      setUserName(displayName);
      console.log("User is signed in:", displayName);
    } else {
      // User is signed out.
      setUserName("");
      console.log("User is signed out:", user);
      // ...
    }
  });

  return (
    <>
      <h1>{userName ? userName : "Usuário deslogado"}</h1>
      <Cadastro />
      <Login />
      <LoginGoogle />
    </>
  );
}

export default App;
