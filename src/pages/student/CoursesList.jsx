import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? setFilteredCourse(
          tempCourses.filter((item) =>
            item.courseTitle.toLowerCase().includes(input.toLocaleLowerCase())
          )
        )
        : setFilteredCourse(tempCourses);
    }
  }, [allCourses, input]);

  return (
   <>
    <div className="relative px-6 md:px-20 lg:px-36 pt-20 text-left">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between w-full">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Course List
          </h1>
          <p className="text-gray-500">
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            / <span>Course List</span>
          </p>
        </div>

        <div className="w-full md:w-auto">
          <SearchBar data={input} />
        </div>
      </div>
      {
        input && <div className=" inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600">
          <p>{input}</p>
          <img src={assets.cross_icon} alt="" className=" cursor-pointer" onClick={() => navigate('/course-list')} />
        </div>
      }
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
        {filteredCourse.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>

    <Footer/>
   </>
      
  );
};

export default CoursesList;
