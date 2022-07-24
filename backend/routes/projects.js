// это файл маршрутов
const router = require('express')
  .Router(); // создали роутер

const {
  celebrate,
  Joi,
} = require('celebrate');

const {
  getProjects,
  createProject,
  deleteMovie,
} = require('../controllers/projects');

const urlRegExp = new RegExp('^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&\'()*+,;=.]+$');

router.get('/projects', getProjects);

router.post('/projects', celebrate({
  // валидируем параметры
  body: Joi.object()
    .keys({
      squareMeters: Joi.string()
        .required(),
      year: Joi.string()
        .required(),
      month: Joi.string()
        .required(),
      city: Joi.string()
        .required(),
      project: Joi.string()
        .required(),
      image: Joi.string()
        .required()
        .pattern(urlRegExp),
      name: Joi.string()
        .required(),
      street: Joi.string()
        .required(),
    }),
}), createProject);

router.delete('/movies/:movieId', celebrate({
  // валидируем параметры
  params: Joi.object()
    .keys({
      movieId: Joi.string()
        .required()
        .length(24)
        .hex(),
    }),
}), deleteMovie);

module.exports = router;
