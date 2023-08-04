import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import Emaillist from "./Emaillist";
import "./App.css";
import SendMail from "./SendMail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectmail } from "./config/mailSlice";
import { login } from "./config/userSlice";
import store from "./config/store";
import { selectUser } from "./config/userSlice";
import Login from "./Login";
import { auth } from "./Authentication/Firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectmail);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    // if you login one time than after refresh you can't go to login page you are in still in main page
    auth.onAuthStateChanged((users) => {
      if (users) {
        dispatch(
          login({
            displayName: users.displayName,
            email: users.email,
            photoUrl: users.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    // <Provider store={store}>
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<Emaillist />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
