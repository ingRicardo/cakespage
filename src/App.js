import './App.css';
import * as React from 'react';

import { createContext } from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import  Login  from "./pages/Login";
import NoPage from "./pages/NoPage";

export const AppContext = createContext();

function App() {
  const [globalUserState, setGlobalUserState] =  React.useState({ usercont: "Rik" });

  return (
    <AppContext.Provider value={{ globalUserState, setGlobalUserState }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
