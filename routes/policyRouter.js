var express = require('express');
var router = express.Router();
var policy_controller = require('../controllers/policyController');

//Home page route
//router.get('/', function(req,res){
//  res.send('Policy home page');
//});

// POST request for creating policy.
router.post('/', policy_controller.policy_create_post);

// GET request for listing all policies.
router.get('/', policy_controller.policy_list_get);

module.exports = router;