import mongoose from "mongoose";
import {CourseModel} from "../models/Course.js";
import { mapObject } from "../util/mongoose.js";

// const CourseModel = mongoose.model("Course", Course);

class SiteController {
  async index(req, res, next) {
    try {
      const data = await CourseModel.find({});
      const course = mapObject(data);
      res.render("home", { data: course });
    } catch (error) {
      throw error;
    }
  }

  createCourse(req, res, next) {
    res.render('create')
  }

  showCourse(req, res, next) {
    res.render('detail')
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

  search(req, res, next) {
    res.render("search");
  }

  about(req, res, next) {
    res.render("about");
  }
}

export default SiteController;
