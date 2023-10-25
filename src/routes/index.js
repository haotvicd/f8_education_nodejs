import newsRouter from "./news.js";
import meRouter from "./me.js";
import courseRouter from "./course.js";
import siteRouter from "./site.js";

export function route(app) {
  app.use('/news', newsRouter)
  app.use('/me', meRouter)
  app.use('/course', courseRouter)
  app.use('/', siteRouter)
}