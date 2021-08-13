import React, { useEffect } from "react";
import SignOut from "./SignOut";
import { db, auth } from "../firebase";
import { useState } from "react";
import SendMsg from "./SendMsg";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("msgs")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="chatFeed">
      <div className="header">
        <h1>Tiigsi Developer's room</h1>
        <SignOut />
      </div>

      <div className="ground">
        <div className="msgs">
          {messages.map(({ message, photoURL, id, uid }) => (
            <div>
              <div
                className={`msg ${
                  uid == auth.currentUser.uid ? "sent" : "recieved"
                }`}
                key={id}
              >
                <p className="sentMsg"> {message}</p>
                <img src={photoURL} alt="" />
              </div>
            </div>
          ))}
        </div>

        <SendMsg />
      </div>
    </div>
  );
}

export default Chat;
