import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";

function SignOut() {
  function signOuthandler() {
    auth.signOut();
  }
  return (
    <div>
      <Button onClick={signOuthandler} variant="contained" color="secondary">
        Signout
      </Button>
    </div>
  );
}

export default SignOut;
