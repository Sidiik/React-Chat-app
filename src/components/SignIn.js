import React from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { auth } from "../firebase";
function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className="signin">
      <Button onClick={signInWithGoogle} color="primary" variant="contained">
        Sign in with google
      </Button>
    </div>
  );
}

export default SignIn;
