import express from 'express'
import SiteController from '../controllers/SiteController.js'

const siteRouter = express.Router()
const siteController = new SiteController()

siteRouter.get('/search', siteController.search)
siteRouter.get('/about', siteController.about)
siteRouter.get('/', siteController.index)

export default siteRouter