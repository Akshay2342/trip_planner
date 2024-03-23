import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSEng_KzYUgAyJpuD4UNQVOGXmvgPM3zg",
  authDomain: "ai-travel-407815.firebaseapp.com",
  projectId: "ai-travel-407815",
  storageBucket: "ai-travel-407815.appspot.com",
  messagingSenderId: "930815818031",
  appId: "1:930815818031:web:231bd528649301c9e109da",
  measurementId: "G-SK1F3ZBG24"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;