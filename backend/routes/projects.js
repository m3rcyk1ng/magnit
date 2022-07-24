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
	deleteProject,
	updateProject,
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
			projectTitle: Joi.string()
				.required(),
			projectText: Joi.string(),
			projectText2: Joi.string(),
			optText: Joi.string(),
			optText2: Joi.string(),
			optText3: Joi.string(),
			optText4: Joi.string(),
			imageGallery: Joi.string()
				.pattern(urlRegExp),
			imageGallery2: Joi.string()
				.pattern(urlRegExp),
			imageGallery3: Joi.string()
				.pattern(urlRegExp),
			imageGallery4: Joi.string()
				.pattern(urlRegExp),
		}),
}), createProject);

router.delete('/projects/:projectId', celebrate({
	// валидируем параметры
	params: Joi.object()
		.keys({
			projectId: Joi.string()
				.required()
				.length(24)
				.hex(),
		}),
}), deleteProject);

router.patch('/projects', updateProject);

module.exports = router;
