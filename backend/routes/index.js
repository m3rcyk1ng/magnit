const router = require('express')
  .Router(); // создали роутер
const routerProject = require('./projects');

router.use(routerProject);

module.exports = router;
