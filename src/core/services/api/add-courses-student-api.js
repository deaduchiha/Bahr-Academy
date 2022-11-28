import react from "react";
import { setItem } from "../storage/storage";
import Http from "../interceptor/interceptor";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const AddCourses = async (course, id) => {
  try {
    const result = await Http.post(
      `${MainUrl}course/addStudentToCourse/${id}`,
      { courseId: course }
    );

    return result;
  } catch (error) {
    return false;
  }
};

export { AddCourses };
