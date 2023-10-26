import mongoose from "mongoose";
import {CourseModel} from "../models/Course.js";
import { mapObject } from "../util/mongoose.js";


class CourseController {
  create(req, res, next) {
    res.render('course/create')
  }

  async show(req, res, next) {
    try {
      const data = await CourseModel.find({});
      const course = mapObject(data);
      res.render("home", { data: course });
    } catch (error) {
      throw error;
    }
  }

  add(req, res, next) {
    try {
      req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const newCourse = new CourseModel(req.body);
      newCourse.save().then(() => res.redirect('/me/stored/courses/'));
    } catch (error) {
      throw error;
    }
  }

  async edit(req, res, next) {
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

  update(req, res, next) {
    CourseModel.updateOne({_id: req.params.id}, req.body )
      .then(() => res.redirect('/me/stored/courses/'))
      .catch(next)
  }

  restore(req, res, next) {
    CourseModel.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  softDelete(req, res, next) {
    CourseModel.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  forceDelete(req, res, next) {
    CourseModel.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

export default CourseController;
