import { useContext } from 'react';
import { VolunteerContext } from './AuthContext';

const AuthProvider = () => {
    return useContext(VolunteerContext);
}

export default AuthProvider;