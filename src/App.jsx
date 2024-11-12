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
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Link to="/login">login</Link>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />}>
              <Route index element={<Info />} />
              <Route path="todos" element={<Todos />} />
              <Route path="posts" element={<Posts />} />
              <Route path="albums" element={<Albums />}>
                <Route path="photos" element={<Photos />} />
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
