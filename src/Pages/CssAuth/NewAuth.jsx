import React from 'react';
// import './NewAuth.css';
import styles from './NewAuth.module.css';
import { useEffect } from 'react';
import { auth } from "../../Backend/setup";
import { doc, addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { googleProvider } from "../../Backend/setup";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { CallMissedOutgoing } from '@mui/icons-material';
import { db } from "../../Backend/setup";
import {UserContext} from '../../components/authContext';
import { getUserInfo } from '../../api/getUserInfo';
import { useContext } from 'react';


function ModernLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [CurrUser,setCurrUser] =useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  
  const signIn = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("userCreated")
        } catch (err) {
          console.log("not working")
          console.error(err);
        }
      };
    
      const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
          navigate("/form");
        } catch (err) {
          console.error(err);
        }
      };


      const signUpWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider).then(async (userCredential) => {
            const user = userCredential.user;
      
            await addDoc(collection(db, "users"), {
              uid: user.uid,
              name: name,
              email: email,
            });
      
          })
          .catch((error) => {
            console.error("Error in signInWithPopup or addDoc:", error);
          });
        } catch (error) {
          console.error("Error in signUpWithGoogle:", error);
        }
      };
    
    const signUp = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
          const user = userCredential.user;
          await updateProfile(user, {
            displayName: name,
          });
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: name,
            email: email,
          });
        });
        console.log("userCreated")
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
    
    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
        
        const handleRegisterClick = () => {
            container.classList.add("active");
        };
        
        const handleLoginClick = () => {
            container.classList.remove("active");
        };
        
        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);
        
        // Clean up event listeners when component unmounts
        return () => {
            registerBtn.removeEventListener('click', handleRegisterClick);
            loginBtn.removeEventListener('click', handleLoginClick);
        };
    }, []); // Empty de

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setCurrUser(user.displayName || null);
            if(CurrUser == null){
                setCurrUser(user.email);
            }
            // console.log({user})
            getUserInfo().then((dataa) => {
              console.log({dataa});
              setUser(oldUser => ({...oldUser, ...dataa}));
              
            }).catch((err) => {
              console.error(err);
            }
            );

             // or user.displayName, or any other user property
          } else {
            setCurrUser(null);
          }
        });
    
        // Cleanup subscription on unmount
        return () => unsubscribe();
      }, [auth]);
    
    
    return (
      <div className={styles.body}>
        <div className={styles.container} id="container">
            <div className={styles['form-container']}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name"  onChange={(e) => setName(e.target.value)} required/>
                    <div className="social-icons">
                        {/* <googleIcon/> */}
                        
                        <button onClick={signUpWithGoogle} href="#" className="icon"><img src= "../assets/googleIcon.ico" alt="googleIcon" /></button>
                        {/* <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a> */}
                        {/* <a href="#" className="icon"><i className="fab fa-github"></i></a> */}
                        {/* <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                    <span>or use your email for registration</span>
                    <input type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={signUp}>Sign Up</button>
                </form>
            </div>
            <div className={`${styles['form-container']} ${styles['sign-in']}`}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <button onClick={signInWithGoogle}  className="icon"><img src= "../assets/googleIcon.ico" alt="googleIcon" /></button>
                        {/* <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a> */}
                        {/* <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a> */}
                        {/* <a href="#" className="icon"><i className="fab fa-github"></i></a> */}
                        {/* <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                    <a href="#">Forget Your Password?</a>
                    <button onClick={signIn}>Sign In</button>
                <button onClick={logout}>LogOut</button>
                <div><h1>Hello {CurrUser}</h1></div>
                </form> 
            </div>
            <div className={styles['toggle-container']}>
            <div className={styles.toggle}>
              <div className={`${styles['toggle-panel']} ${styles['toggle-left']}`}>
                  <h1>Welcome Back!</h1>
                  <p>Enter your personal details to use all site features</p>
                  <button className={styles.hidden} id="login">Sign In</button>
              </div>
              <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
                  <h1>Hello, Friend!</h1>
                  <p>Register with your personal details to use all site features</p>
                  <button className={styles.hidden} id="register">Sign Up</button>
              </div>
          </div>
            </div>
        </div>
        </div>
    );
}

export default ModernLoginPage;