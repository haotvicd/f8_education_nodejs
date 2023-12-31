import express from 'express'
import MeController from '../controllers/MeController.js'

const meRouter = express.Router()
const meController = new MeController()

meRouter.get('/stored/courses', meController.storedCourses)

export default meRouter