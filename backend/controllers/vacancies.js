const Vacancy = require("../models/vacancy");
const BadRequestError = require("../errors/bad-request-error");
const NotFoundError = require("../errors/not-found-error");

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
    fullEducation,
    responsibilities,
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
    fullEducation,
    responsibilities,
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

module.exports.deleteVacancy = (req, res, next) => {
  Vacancy.findById(req.params.vacancyId)
    .then((vacancy) => {
      if (!vacancy) {
        next(new NotFoundError("Вакансия с указанным _id не найдена"));
      } else {
        return Vacancy.deleteOne({ _id: vacancy._id }).then(
          res.status(200).send({ message: "Вакансия удалена" })
        );
      }
    })
    .catch((err) => {
      if (err.name === "CastError") {
        next(new BadRequestError("Передан невалидный id"));
      }
      next(err);
    });
};
