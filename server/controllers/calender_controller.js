const addEvent = async (req, res) => {
  const db = req.app.get('db');
  const { event, category, date, startTime, endTime } = req.body;
  const { authtoken, email, password } = req.headers;
  let currentUser;
  await db
    .get_user([email, password])
    .then(response => currentUser = response[0])
    .catch(err => console.log(err));

  if (authtoken === currentUser.authTokenOne) {
    db
      .add_event([currentUser.userIdentifier, event, category, date, startTime, endTime])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
};

module.exports = {
  addEvent,
}
