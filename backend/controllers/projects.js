const Project = require("../models/project");

const NotFoundError = require("../errors/not-found-error");
const BadRequestError = require("../errors/bad-request-error");

module.exports.getProjects = (req, res, next) => {
  Project.find({})
    .then((projects) => res.status(200).send(projects))
    .catch(next);
};

module.exports.createProject = (req, res, next) => {
  const {
    squareMeters,
    year,
    month,
    city,
    project,
    image,
    name,
    street,
    projectTitle,
    projectText,
    optionalBlock,
    imageGallery,
    projectId,
  } = req.body;

  Project.create({
    squareMeters,
    year,
    month,
    city,
    project,
    image,
    name,
    street,
    projectTitle,
    projectText,
    optionalBlock,
    imageGallery,
    projectId,
  })
    .then((project) => res.status(200).send(project))
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(
          new BadRequestError(
            "Переданы некорректные данные при создании проекта"
          )
        );
      }
      next(err);
    });
};

module.exports.updateProject = (req, res, next) => {
  Project.findByIdAndUpdate(req.project._id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((project) => {
      if (project) {
        res.status(200).send(project);
      }
      throw new NotFoundError("Проект с указанным _id не найден");
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(new BadRequestError("Переданы некорректные данные"));
      }
      next(err);
    });
};

module.exports.deleteProject = (req, res, next) => {
  Project.findById(req.params.projectId)
    .then((project) => {
      if (!project) {
        next(new NotFoundError("Проект с указанным _id не найден"));
      } else {
        return Project.deleteOne({ _id: project._id }).then(
          res.status(200).send({ message: "Проект удален" })
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
