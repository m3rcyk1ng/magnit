const router = require('express')
  .Router(); // создали роутер
const routerUser = require('./users');
const routerProject = require('./projects');
const routerStorage = require('./storage');
// const auth = require('../middlewares/auth');

router.use(routerStorage);
// router.use(auth);
router.use(routerUser);
router.use(routerProject);

module.exports = router;
