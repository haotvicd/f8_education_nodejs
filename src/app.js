import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import { fileURLToPath } from 'url'
import methodOverride from 'method-override'
import path from 'path'
import { route } from './routes/index.js'
import { connect } from './db/index.js'

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// connect db
connect()

// app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.engine('.hbs', engine({
  extname: '.hbs',
  helpers: {
    inc: function(value) {
      return parseInt(value) + 1;
    }
  }
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})