const Vacancy = require("../models/vacancy");
const BadRequestError = require("../errors/bad-request-error");

module.exports.getVacancies = (req, res, next) => {
  Vacancy.find({})
    .then((vacancies) => res.status(200).send(vacancies))
    .catch(next);
};

module.exports.createVacancies = (req, res, next) => {
  const {
    name,
    salary,
    education,
    experience,
    image,
    updatedBy,
    workload,
    description,
    conditions,
    phoneNumber,
    vacancyId,
  } = req.body;

  Vacancy.create({
    name,
    salary,
    education,
    experience,
    image,
    updatedBy,
    workload,
    description,
    conditions,
    phoneNumber,
    vacancyId,
  })
    .then((vacancy) => res.status(200).send(vacancy))
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(
          new BadRequestError(
            "Переданы некорректные данные при создании вакансии"
          )
        );
      }
      next(err);
    });
};

