const Card = require('../models/card');

const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');

module.exports.getCards = (req, res, next) => {
  Card.find({})
		.then((cards) => res.status(200).send({data: cards}))
		.catch(next);
};

module.exports.createCard = (req, res, next) => {
	const {
		squareMeters,
		year,
		month,
		city,
		project,
		image,
		name,
		street,
		cardId,
	} = req.body;

  Card.create({
		squareMeters,
		year,
		month,
		city,
		project,
		image,
		name,
		street,
		cardId,
	})
		.then((card) => res.status(200).send({data: card}))
		.catch((err) => {
			if (err.name === 'ValidationError') {
				next(new BadRequestError('Переданы некорректные данные при создании фильма'));
			}
			next(err);
		});
};

module.exports.deleteMovie = (req, res, next) => {
  Card.findById(req.params.movieId)
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
