import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([])

  // Fetch All Courses
  const fetchAllCourses = () => {
    setAllCourses(dummyCourses);
  };

  // Function to calculate average rating of a course
  const calculateRating = (course) => {
    if (!course.courseRatings || course.courseRatings.length === 0) {
      return 0;
    }
    const totalRating = course.courseRatings.reduce((sum, rating) => sum + rating.rating, 0);
    return totalRating / course.courseRatings.length;
  };

  // Function to calculate course chapter time
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.forEach((lecture) => {
      time += lecture.lectureDuration;
    });

    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate course duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.forEach((chapter) => {
      chapter.chapterContent.forEach((lecture) => {
        time += lecture.lectureDuration;
      });
    });

    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate the number of lectures in the course
  const calculateNoOfLectures = (course) => {
    return course.courseContent.reduce((total, chapter) => {
      return total + (Array.isArray(chapter.chapterContent) ? chapter.chapterContent.length : 0);
    }, 0);
  };

  //Fetch User Enrolled Courses
  const fetchUserEnrolledCourses = async()=>{
    setEnrolledCourses(dummyCourses)
  }

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateNoOfLectures,
    calculateChapterTime,
    calculateCourseDuration,
    enrolledCourses,
    fetchUserEnrolledCourses
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

