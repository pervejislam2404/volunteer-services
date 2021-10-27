import React from 'react';
import { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


export const VolunteerContext = createContext()

const AuthContext = ({children}) => {
  
    const myVal = useFirebase();
    return (
        <VolunteerContext.Provider value={myVal}>
             {children}
        </VolunteerContext.Provider>
    );
};

export default AuthContext;