const test = (req, res) => {
  const db = req.app.get('db')

  db
    .get_test_user()
    .then(user => {
      console.log(user)
      res.status(200).json(user[0])
    })
    .catch(err => res.status(500).json(err))
}

module.exports = {
  test
}
