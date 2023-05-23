import React from "react";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import StudentCard from "../components/StudentCard";

const AllCourses = () => {
    return (
        <div>
            <Header>
                <div className="flex flex-col md:items-center gap-8 flex-1 text-white px-10 py-32">
                    <h1 className="text-5xl font-bold font-sans text-left md:text-center">
                        All Courses
                    </h1>
                    <p className="text-lg text-left md:text-center max-w-[60vw]">
                    Premium content for learners with a foresight towards their career and a fantacy to lift it up 
                    <br/>Begin your journey here
                    </p>
                </div>
            </Header>
            <section className="flex flex-col md:flex-row -mt-2 items-center justify-center font-sans gap-6 py-[100px] px-8">
                <CourseCard
                    heading="Blockchain Developer"
                    image="images/blockchain logo.jpg"
                    description="
                    Blockchain is the revolutionary technology that enables peer to peer transfer of Digital assets without intermides and is predicted to be as powerfull as internet and used to immutably record any number of data points

                    ...
                   "
                />
                <CourseCard
                    heading="Web 3.0"
                    image="images/web 3 logo.png"
                    description="Web 3.0is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics  "
                />
                <CourseCard
                    heading="Git & Github"
                    image="images/github logo2.webp"
                    description="
                    Git is the popular version of the control system that provides a platform to work together as a team It is used for tracking code changes, who made changes and coding colaboration...
                    
                    "
                />
            </section>
            <section className="bg-[#FAFAFA] py-[100px] px-40">
                <h1 className="text-4xl font-bold font-sans text-left md:text-center pb-5">
                    What Our Students Have to Say
                </h1>
                <div className="py-5 flex flex-wrap">
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                </div>
            </section>
            <footer className="bg-[#0d68ae] pt-[100px]  flex flex-col items-center">
                <div className="flex flex-col items-center w-[50%] gap-12 mb-16 px-[30px]">
                    <h2 className="text-4xl font-bold font-sans  text-white">
                        Join Our 7452 Happy Students Today!
                    </h2>
                    <p className="font-sans text-left md:text-center text-white">
                    Working forward to forge ahead students to dignify their career with high end training modules
                    </p>
                    <button className="bg-white text-[#0d68ae] p-4 px-10 rounded-[50px]">
                        Start Learning
                    </button>
                </div>
                <div className="h-[1px] opacity-30 bg-[#ffffff] w-full"></div>
                <div className="py-5 text-white">
                    <p>Copyright © 2023 LearnDash Academy</p>
                </div>
            </footer>
        </div>
    );
};

export default AllCourses;
