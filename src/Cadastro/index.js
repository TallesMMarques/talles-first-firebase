import React from 'react';
import firebase from '../services/init-firebase'

export default function Cadastro() {
  function handleSignUp() {
    var email = document.getElementById('email-c').value;
    var password = document.getElementById('password-c').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  return <>
    <h2>Cadrastro</h2>
    <input type="email" id="email-c" placeholder="email" />
    <input type="password" id="password-c" placeholder="password" />
    <button type="submit" onClick={handleSignUp}>Enviar</button>
  </>
}
