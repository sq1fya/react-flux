import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import CoursList from "./CoursList";

function CoursesPage() {
  // hook setState zamiast state
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);
  // deps: mowi hej react odpal to tylko raz

  // componentDidMount() {
  //   getCourses().then(courses => this.setState({ courses: courses }));
  // }

  return (
    <>
      <h2>Courses</h2>
      <CoursList courses={courses} />
    </>
  );
}

export default CoursesPage;
