import About from "./components/About";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useState } from "react";
import { Accordion } from "./components/Accordion";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header className="font-bold py-5 bg-black text-white text-center flex px-2">
        <nav className="px-20 m-2 flex justify-between text-lg w-[80%]">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/login">Login </a>
          <a href="/accordion">Accordion </a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="p-2 m-2 text-black">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About lang={lang} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;