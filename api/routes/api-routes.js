let router = require('express').Router();
var formController = require('../controllers/formController');
// Routes - GET and POST

router.route('/form')
    .get(formController.getAllForms)
    .post(formController.newForm);
   

module.exports = router;