import express from 'express'
import CourseController from '../controllers/CourseController.js'

const courseRouter = express.Router()
const courseController = new CourseController()

courseRouter.get('/edit/:id', courseController.edit)
courseRouter.put('/:id', courseController.update)
courseRouter.patch('/:id/restore', courseController.restore)
courseRouter.delete('/:id', courseController.softDelete)
courseRouter.delete('/:id/force', courseController.forceDelete)
courseRouter.get('/create', courseController.create)
courseRouter.post('/store', courseController.add)
courseRouter.get('/:slug', courseController.show)

export default courseRouter