import { Button } from "@material-ui/core";
import SignIn from "./components/SignIn";
import "./index.css";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
function App() {
  const [user] = useAuthState(auth);
  return <div className="app">{!user ? <SignIn /> : <Chat />}</div>;
}

export default App;
