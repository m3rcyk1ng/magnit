const router = require('express')
  .Router(); // создали роутер
const routerProject = require('./projects');
const routerVacancy = require('./vacancies');

router.use(routerProject);
router.use(routerVacancy);

module.exports = router;
