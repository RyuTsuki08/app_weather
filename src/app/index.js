import React from "react";
import ReactDOM, {createRoot}  from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import '../../public/style.css'
import Who_are from "./components/Who_are";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="contact-us" element={<Who_are />} />
        </Routes>
    </BrowserRouter>
);