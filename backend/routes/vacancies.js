// это файл маршрутов
const router = require("express").Router(); // создали роутер

const { celebrate, Joi } = require("celebrate");

const {
  getVacancies,
  createVacancies,
  deleteVacancy,
} = require("../controllers/vacancies");

const urlRegExp = new RegExp(
  "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=.]+$"
);

router.get("/vacancies", getVacancies);

router.post(
  "/vacancies",
  celebrate({
    // валидируем параметры
    body: Joi.object().keys({
      name: Joi.string().required(),
      salary: Joi.number().required(),
      education: Joi.string().required(),
      experience: Joi.string().required(),
      image: Joi.string().required().pattern(urlRegExp),
      updatedBy: Joi.string().required(),
      workload: Joi.string().required(),
      description: Joi.string().required(),
      conditions: Joi.array().items(Joi.string().required()),
      responsibilities: Joi.array().items(Joi.string().required()),
      fullEducation: Joi.string(),
      phoneNumber: Joi.string().required(),
    }),
  }),
  createVacancies
);

router.delete(
  "/vacancies/:vacancyId",
  celebrate({
    // валидируем параметры
    params: Joi.object().keys({
      vacancyId: Joi.string().required().length(24).hex(),
    }),
  }),
  deleteVacancy
);

module.exports = router;
