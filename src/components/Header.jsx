import React from "react";
import Navbar from "./Navbar";

const Header = (props) => {
    return (
        <header
            className={`${props.className} relative bg-[#0945acde] bg-no-repeat bg-cover bg-center  bg-fixed`}
            style={{
                backgroundImage: `linear-gradient(to right, #0274be, #003bb1), url(${props.image})`,
            }}
        >
            <Navbar />
            {props.children}
        </header>
    );
};

export default Header;
