module.exports = function(app) {
  var userController = require('../controllers/museings-api-controller');

  // museings-api Routes
  app.route('/users')
    .get(userController.list_all_users)
    .post(userController.create_a_user);


  app.route('/users/:id')
    .get(userController.get_a_user)
    .delete(userController.delete_a_user);
};
