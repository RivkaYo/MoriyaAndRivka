import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import React from "react";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<h1>Login/</h1>} />
            <Route path="/signup" element={<h1>Signup</h1>} />
            <Route path="/home" element={<h1>Home</h1>}>
              <Route index element={<h1>Info</h1>} />
              <Route path="todos" element={<h1>Todos</h1>} />
              <Route path="posts" element={<h1>Posts</h1>} />
              <Route path="albums" element={<h1>Albums</h1>}>
                <Route path="photos" element={<h1>Photos</h1>} />
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
