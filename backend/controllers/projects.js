const Project = require('../models/project');

const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');

module.exports.getProjects = (req, res, next) => {
	Project.find({})
		.then((projects) => res.status(200).send({data: projects}))
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
		projectId,
	})
		.then((project) => res.status(200).send({data: project}))
		.catch((err) => {
			if (err.name === 'ValidationError') {
				next(new BadRequestError('Переданы некорректные данные при создании проекта'));
			}
			next(err);
		});
};

module.exports.deleteMovie = (req, res, next) => {
	Project.findById(req.params.movieId)
		.then((movie) => {
			if (!movie) {
				next(new NotFoundError('Фильм с указанным _id не найден'));
			} else if (movie.owner.toString() === req.user._id) {
				return Card.deleteOne({_id: movie._id}).then(
					res.status(200).send({message: 'Фильм удален'}),
				);
			} else {
				next(new ForbiddenError('Недостаточно прав для удаления'));
			}
		})
		.catch((err) => {
			if (err.name === 'CastError') {
				next(new BadRequestError('Передан невалидный id'));
			}
			next(err);
		});
};
