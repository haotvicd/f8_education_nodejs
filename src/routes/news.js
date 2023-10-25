import express from 'express'
import NewsController from '../controllers/NewsController.js'

const newsRouter = express.Router()
const newsController = new NewsController()

newsRouter.get('/:slug', newsController.detail)
newsRouter.get('/', newsController.index)

export default newsRouter