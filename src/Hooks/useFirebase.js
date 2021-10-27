import { useEffect, useState } from 'react';
import FirebaseInitialize from '../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";


FirebaseInitialize()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
       signOut(auth).then(() => {
          setUser({})
        }).catch((error) => {
          setError(error);
        });
    }

    useEffect(()=>{
      const handleState=()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
             setUser(user)
            }
          });   
         
      }
      setIsLoading(false)
      return handleState()
    },[])

    return {signWithGoogle,setUser,user,error,setError,logOut,isLoading,setIsLoading}
};

export default useFirebase;