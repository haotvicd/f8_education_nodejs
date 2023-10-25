class NewsController {
  index(req, res) {
    res.render('news')
  }

  detail(req, res) {
    res.send('news detail')
  }
}

export default NewsController