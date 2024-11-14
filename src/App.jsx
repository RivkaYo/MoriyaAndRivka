import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Todos from "./pages/Todos";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          >
            <Route index element={<Link to="/login">login</Link>} />
            <Route
              path="/login"
              element={
                <Login
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <Home
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            >
              <Route index element={<Info 
                  currentUser={currentUser}
                  />} />
              <Route
                path="todos"
                element={<Todos currentUser={currentUser} />}
              />
              <Route
                path="posts"
                element={<Posts currentUser={currentUser} />}
              >
                 <Route
                  path=":id:"
                  element={<Photos currentUser={currentUser} />}
                />
              </Route>
              <Route
                path="albums"
                element={<Albums currentUser={currentUser} />}
              >
                <Route
                  path=":id:"
                  element={<Photos currentUser={currentUser} />}
                />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
