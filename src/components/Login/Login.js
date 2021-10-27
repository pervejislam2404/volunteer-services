import React from 'react';
import AuthProvider from '../../Context/AuthProvider';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import googleImg from './google.png'

const Login = () => {
    const {signWithGoogle,setUser,setError,setIsLoading} = AuthProvider();
    const location = useLocation();
    const history = useHistory()

    console.log(location);

    const redirect_url= location.state?.from || "/";
    console.log(window.location.from?.state);

    const handleSign = () => {
        signWithGoogle()
        .then((result) => {           
            const user = result.user;
            setIsLoading(false)
            setUser(user)
            history.push(redirect_url)           
           
          }).catch((error) => {           
            const errorMessage = error.message;
            setError(errorMessage)           
          });
    }
    // console.log(user);
    return (
        <div className="d-flex justify-content-center align-items-center mt-5  p-5 rounded text-white">
            <span onClick={handleSign} className="row bg-light rounded shadow  p-2">
                <div className="col-3">
                    <img height="50" src={googleImg} alt="" />
                </div>
                <div className="col-9 text-black pt-2">
                   <h5>Sing with google</h5>
                </div>
            </span>
        </div>
    );
};

export default Login;