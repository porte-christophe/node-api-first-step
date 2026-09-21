import salleService from "../services/salle.service.ts";


const checkExists = async (req, res, next) => {
	const salle = await salleService.getById(Number(req.params.id));
	if (!salle) {
		return res.status(404).json({
			message: "Salle not found",
		});
	}
	req.salle = salle;
	next();
};






export default { checkExists };