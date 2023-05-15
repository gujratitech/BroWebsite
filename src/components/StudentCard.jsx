import React from "react";

const StudentCard = () => {
    return (
        <div className="bg-white rounded-[5px] p-[30px] m-5 flex flex-col gap-4 w-[45%]" style={{boxShadow: "0 15px 30px 5px rgba(0,0,0,.06)"}}>
            <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-2">
                <img
                    src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/testimonial4-free-img.jpg"
                    alt="" className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                    <h4 className="font-bold">Kelvin Black</h4>
                    <p>From Dallas, USA</p>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;
