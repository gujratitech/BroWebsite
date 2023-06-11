import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCourses from "./pages/AllCourses";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import About from "./components/About";
import Login from "./components/Login";

// For Home Page and Lazy Loading
const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<AllCourses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default App;
