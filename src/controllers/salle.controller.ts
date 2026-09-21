import salleService from "../services/salle.service.ts";

//read
const getAll = async (req, res) => {
	try {
		const salle = await salleService.getAll();
		res.status(200).json(salle);
	} catch (error) {
		return res.status(500).json(salle);
	}
};
//create
const create = async (req, res) => {
	try {
		const salle = await salleService.create(req.body);
		res.status(200).json(salle);
	} catch (error) {
		return res.status(500);
	}
};

//update
const updateOne = async (req,res) => {
	try {
		const salle = await salleService.updateOne(Number(req.params.id), req.body);
		res.status(200).json(salle);
	} catch (error) {
		return res.status(500);
	}
}

//delete
const deleteOne = async (req,res) => {
	try {
		const salle = await salleService.deleteOne(Number(req.params.id));
		res.status(200).json(salle);
	} catch (error) {
		return res.status(500);
	}
}


export default {getAll, create, deleteOne, updateOne};