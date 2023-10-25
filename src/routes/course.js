import express from 'express'
import CourseController from '../controllers/CourseController.js'

const courseRouter = express.Router()
const courseController = new CourseController()

courseRouter.get('/edit/:id', courseController.editCourse)
courseRouter.put('/:id', courseController.updateCourse)
courseRouter.delete('/:id', courseController.deleteCourse)
courseRouter.get('/create', courseController.createCourse)
courseRouter.post('/store', courseController.addCourse)
courseRouter.get('/:slug', courseController.showCourse)

export default courseRouter