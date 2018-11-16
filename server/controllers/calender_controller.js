const addEvent = (req, res) => {
  const { event, category, date, startTime, endTime } = req.body;
  console.log(req.body);
};

module.exports = {
  addEvent,
}
