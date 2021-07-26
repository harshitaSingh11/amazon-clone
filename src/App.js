import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import Checkout from './MyComponents/Checkout';
import Login from './MyComponents/Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './MyComponents/StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, []);

  console.log("USER IS ->", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;