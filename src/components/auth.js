import { auth } from "../Backend/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { googleProvider } from "../Backend/firebase";
import { useState } from "react";
import { Button } from "@mui/material";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("userCreated")
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className={'mainContainer'}>
      <h1> Create Account </h1>
      <div className={'inputContainer'}>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
        className={'inputBox'}
      />
      <input
        placeholder="Password..."
        type="password"
        className={'inputBox'}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <Button onClick={signIn}> Sign In</Button>

      <Button onClick={signInWithGoogle} > Sign In With Google</Button>

      <Button onClick={logout}> Logout </Button>
    </div>
    </div>
  );
};