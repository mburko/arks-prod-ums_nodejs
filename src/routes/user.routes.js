module.exports = app => {
  import user from '../controllers/user.controller.js';

  app.post('/user', user.create);
};
