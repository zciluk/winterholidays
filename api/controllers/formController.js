Form = require("../models/formModel");
// Form controller - defying function on post and get calls
exports.getAllForms = function(req, res) {
  Form.get(function(err, forms) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "200",
      message: "Records received succesfuly",
      data: forms
    });
  });
};
exports.newForm = function(req, res) {
  var form = new Form();
  form.name = req.body.name;
  form.surname = req.body.surname;
  form.email = req.body.email;
  form.date = req.body.datePicker;
  form.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json({
        message: "New record created in database.",
        data: form
      });
    }
  });
};
