const firebaseConfig = {
  apiKey: process.env.REACT_APP_VOLUNTEER_API_KEY,
  authDomain: process.env.REACT_APP_VOLUNTEER_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_VOLUNTEER_PROJECT_ID,
  storageBucket: process.env.REACT_APP_VOLUNTEER_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_VOLUNTEER_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_VOLUNTEER_APP_ID,
  };

  // console.log( process.env.REACT_APP_VOLUNTEER_AUTH_DOMAIN);
  export default firebaseConfig;
  