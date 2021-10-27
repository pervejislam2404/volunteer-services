import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './shared/Header/Header';
import AuthContext from './Context/AuthContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Added from './components/Added/Added';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <AuthContext>
     <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/added" component={Added}/>
          <Route path="/dashboard" component={Dashboard}/>
          {/* <Route path="/register/:id" component={Register}/> */}
          <PrivateRoute path="/register/:id">
            <Register/>
          </PrivateRoute>
        </Switch>
      </Router>
     </AuthContext>
    </div>
  );
}

export default App;
