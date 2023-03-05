import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

function Contact() {
    return <h1>Contact</h1>;
}
