import mongoose from "mongoose";
import Course from "../models/Course.js";
import { mapObject } from "../util/mongoose.js";

const CourseModel = mongoose.model("Course", Course);

class MeController {
  storedCourses(req, res, next) {
    CourseModel.find({})
      .then(course => res.render('me/stored-course', { courses: mapObject(course) }))
      .catch(next)
  }
}

export default MeController