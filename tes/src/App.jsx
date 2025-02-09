import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import User from "./pages/Users"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
