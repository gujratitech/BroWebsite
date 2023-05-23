import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCourses from "./pages/AllCourses";
import Contact from "./components/Contact";

// For Home Page and Lazy Loading
const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<AllCourses />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default App;
