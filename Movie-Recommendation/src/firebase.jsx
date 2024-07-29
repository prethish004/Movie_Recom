// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider, signInWithPopup,sendPasswordResetEmail} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const registerUser=async(email,password,displayName)=>{
    try{
        await createUserWithEmailAndPassword(auth,email,password);
        await updateProfile(auth.currentUser,{displayName})
        console.log(auth.currentUser);
    }
    catch(err){
        return err.message.replace('Firebase:','')
    }

}
export const login=async(email,password)=>{
    try{
        const useCredential =await signInWithEmailAndPassword(auth,email,password);
        // console.log(useCredential);
    }
    catch(err){
        return err.message.replace("Firebase:","");
    }
}

export const userObserver=(setCurrentUser)=>{
    onAuthStateChanged(auth,(user)=>{
        if(user) setCurrentUser(user)
        else setCurrentUser(null)
    })
}
export const logout=()=>{
    signOut(auth);
}
export const signUpProvider = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      return err.message.replace("Firebase:", "");
    }
  };
export const forgotPassword=async(email)=>{
    console.log('Forgot Password')
    try
{
    await sendPasswordResetEmail(auth,email);
    return 'please check your mail box !'
}catch(err){
    return err.message.replace("Firebase:","")
}
}