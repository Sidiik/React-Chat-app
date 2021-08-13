import React, { useState } from "react";
import { Input, Button, TextField } from "@material-ui/core";
import { auth, db } from "../firebase";
import firebase from "firebase";
import styles from "./send.module.css";

function SendMsg() {
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (msg) {
      const { uid, photoURL } = auth.currentUser;
      await db.collection("msgs").add({
        message: msg,
        photoURL,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
      });
    }
    setMsg("");
  }

  return (
    <div className={styles.form} onSubmit={handleSubmit}>
      <form className={styles.sendForm}>
        <Input
          variant="outlined"
          placeholder="Type message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className={styles.input}
        />
        <Button type="submit" variant="contained" color="secondary">
          Send
        </Button>
      </form>
    </div>
  );
}

export default SendMsg;
