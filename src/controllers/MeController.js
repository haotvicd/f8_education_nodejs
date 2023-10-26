import mongoose from "mongoose";
import { CourseModel } from "../models/Course.js";
import { mapObject } from "../util/mongoose.js";

// const CourseModel = mongoose.model("Course", CourseSchema);

class MeController {
  storedCourses(req, res, next) {
    Promise.all([CourseModel.find({}), CourseModel.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => {
        res.render('me/stored-course', { courses: mapObject(courses), deletedCount })
      })
      .catch(next)

    // CourseModel.countDocumentsDeleted()
    //   .then(count => console.log(count))
    //   .catch(err => console.error(err))

    // CourseModel.find({})
    //   .then(course => res.render('me/stored-course', { courses: mapObject(course) }))
    //   .catch(next)
  }

  trashCourses(req, res, next) {
    CourseModel.findDeleted({})
      .then(deletedCourse => res.render('me/trash-course', { courses: mapObject(deletedCourse) }))
      .catch(next)
  }
}

export default MeController