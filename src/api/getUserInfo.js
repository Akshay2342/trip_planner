import { db } from "../Backend/setup";
import { auth } from '../Backend/setup';
import { doc, getDoc } from 'firebase/firestore';
import { query, where, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";


export const getUserInfo = async () => {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, "users", user.uid);
                console.log(user.uid);
                // const docSnap = await getDoc(docRef);

                const q = query(collection(db, "users"), where("name", "==", "Aksh"));
                    const querySnapshot = await getDocs(q);

                    if (querySnapshot.empty) {
                    reject(new Error('No such document!'));
                    } else {
                    const docSnap = querySnapshot.docs[0];
                    resolve(docSnap.data());
                    }
            } else {
                reject(new Error("User not logged in"));
            }
        });
    });
}