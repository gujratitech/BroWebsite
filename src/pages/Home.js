import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SpecialitiesCard from "../components/SpecialitiesCard";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header
        className="w-full h-[120vh]"
        image="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-01-free-img.jpg"
      >
        <div className="flex flex-col md:items-center gap-8 flex-1 text-white px-10">
          <h1 className="text-5xl font-semibold font-sans text-left md:text-center mt-[10%]">
            Learn From Industry Experts
          </h1>
          <p className="text-lg text-left md:text-center max-w-[60vw]">
       Enrich your career with emerging technology .get grip on advanced skills with corporation curated courses by expert alumini placed in top packages 
          </p>

          <button className="bg-white text-[#0274be] px-10 py-2 w-fit text-md rounded-full font-bold  hover:shadow-lg">
            <Link to={"/signup"}>Register</Link>
          </button>
        </div>
      </Header>
      <div className="flex flex-col md:justify-center px-8 items-center md:flex-row gap-8 w-full relative -translate-y-[100px]">
        <SpecialitiesCard
          image="./images/training.svg"
          heading="Emerging technologies"
          description="Be ahead in this advanced world with a grip on emerging technology."
        />
        <SpecialitiesCard
          image="./images/puzzle.svg"
          heading="Back 2 Basics"
          description="Pedestal for a rising career in tech."
        />
        <SpecialitiesCard
          image="./images/box.svg"
          heading="Study Material"
          description="Practice for creating great technologies."
        />
      </div>
      {/* <main className="home">
        <section className="flex flex-col items-center justify-center font-sans gap-6 py-10 px-8">
          <h1 className="text-4xl text-center text-gray-700 font-bold">
            Our Most Popular Courses
          </h1>
          <p className=" text-center md:max-w-[40vw] font-semibold text-md text-gray-500">
          Groom yourself technically with enhancement of skills in industrial Science. Tailor your career with experts
          </p>
        </section>

        <section className="flex flex-col md:flex-row -mt-2 items-center justify-center font-sans gap-6 py-10 px-8">
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



        <section className="flex flex-col md:flex-row -mt-2 items-center justify-center font-sans gap-6 py-10 px-8">
          <div className="container">
            <div className="left-img">

            </div>
            <div className="right">
              
            </div>
          </div>
        </section>
      </main> */}
      <Footer />
    </>
  );
};

export default Home;
