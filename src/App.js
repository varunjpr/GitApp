import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import firebase from "firebase/app";
import "firebase/auth";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import pageNotFound from "./pages/PageNotFound";
import { Usercontext } from "./context/UserContext";
import Footer from "./layout/Footer";
function App() {
  const [user, setuser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <Usercontext.Provider value={{ user, setuser }}>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Home} />
          <Route exact path="/signUp" component={Home} />
          <Route exact path="*" component={Home} />
        </Routes>
        <Footer />
      </Usercontext.Provider>
    </Router>
  );
}

export default App;
