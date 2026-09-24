import Joi from'joi';

const salleSchema = Joi.object({
	name: Joi.string().required(),
	capacity: Joi.number().required()
})



const checkDataFromFront = async (req, res, next) => {
	const { error } = salleSchema.validate(req.body);
	if (error) {
	return res.status(400).json({
	message: "Données invalides"
	});
	}
	next();
};






export default { checkDataFromFront };