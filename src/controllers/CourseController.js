import mongoose from "mongoose";
import Course from "../models/Course.js";
import { mapObject } from "../util/mongoose.js";

const CourseModel = mongoose.model("Course", Course);

class CourseController {
  createCourse(req, res, next) {
    res.render('course/create')
  }

  async showCourse(req, res, next) {
    try {
      const data = await CourseModel.find({});
      const course = mapObject(data);
      res.render("home", { data: course });
    } catch (error) {
      throw error;
    }
  }

  addCourse(req, res, next) {
    try {
      const formData = req.body;
      formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const newCourse = new CourseModel(formData);
      newCourse.save().then(() => res.redirect('/'));
    } catch (error) {
      throw error;
    }
  }

  async editCourse(req, res, next) {
    try {
      const data = await CourseModel.findById(req.params.id);
      res.render('course/edit', {
        id: data._id,
        name: data.name,
        description: data.description,
        videoId: data.videoId
      });
    } catch (error) {
      throw error;
    }
  }

  updateCourse(req, res, next) {
    CourseModel.updateOne({_id: req.params.id}, req.body )
      .then(() => res.redirect('/me/stored/courses/'))
      .catch(next)
  }

  deleteCourse(req, res, next) {
    CourseModel.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

export default CourseController;
