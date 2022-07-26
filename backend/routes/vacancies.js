// это файл маршрутов
const router = require('express')
	.Router(); // создали роутер

const {
	celebrate,
	Joi,
} = require('celebrate');

const {
	getVacancies,
	createVacancies
} = require('../controllers/vacancies');

const urlRegExp = new RegExp('^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&\'()*+,;=.]+$');

router.get('/vacancies', getVacancies);

router.post('/vacancies', celebrate({
	// валидируем параметры
	body: Joi.object()
		.keys({
			name: Joi.string()
				.required(),
			salary: Joi.number()
				.required(),
			education: Joi.string()
				.required(),
			experience: Joi.string()
				.required(),
			image: Joi.string()
				.required()
				.pattern(urlRegExp),
			updatedBy: Joi.string()
				.required(),
			workload: Joi.string()
				.required(),
			description: Joi.string()
				.required(),
			conditions: Joi.array()
        .items(Joi.string().required()),
			phoneNumber: Joi.string()
				.required(),
		}),
}), createVacancies);

module.exports = router;
