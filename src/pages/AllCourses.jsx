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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam maximus tortor at diam gravida posuere. Curabitur
                        et malesuada mi
                    </p>
                </div>
            </Header>
            <section className="flex flex-col md:flex-row -mt-2 items-center justify-center font-sans gap-6 py-[100px] px-8">
                <CourseCard
                    heading="Social Media Marketing"
                    image="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/course-1-free-img-400x223.jpg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta."
                />
                <CourseCard
                    heading="Email Marketing Strategies"
                    image="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/course-2-free-img-400x223.jpg"
                    description="In porttitor ipsum eu justo condimentum euismod ullamcorper viverra."
                />
                <CourseCard
                    heading="Content Marketing"
                    image="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/course-2-free-img-400x223.jpg"
                    description="Repellat perspiciatis cum! Doloremque ea viverra eu doloremque."
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
                        Enter description text here. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ut elit tellus, luctus nec
                        ullamcorper mattis, pulvinar dapibus leo.
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
