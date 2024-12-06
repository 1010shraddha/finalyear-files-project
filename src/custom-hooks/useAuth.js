

// import {useState,useEffect} from 'react'
// //import {onAuthStateChanged} from 'firebase/auth';
// import {auth} from '../firebase.config'

// const useAuth = () =>{
//     const [setCurrentUser] = useState({})
//     useEffect(()=>{
//         onAuthStateChanged(auth, (user)=>{
//            if(user){
//              setCurrentUser(user)
//            } 
//            else { 
//              setCurrentUser(null)
//            }
//         });
//     });

//     return {
//         CurrentUser,
//     };
// };

// export default useAuth;
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Ensure the correct import
import { auth } from '../firebase.config';

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null); // Correct state declaration

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, []); // Empty dependency array to run only once

    return { currentUser }; // Ensure you return the correct variable
};

export default useAuth;
