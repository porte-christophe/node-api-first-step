import salleRepository from "../repositories/salle.repository.ts";
import type Salle from "../dto/salle.type.ts";

//read
const getAll = async () => {
	const salle = await salleRepository.findAll();
	if (!salle) {
		throw new Error("Salles not found");
	}
	return salle;
};

//create
const create = async (newsalle:Salle) => {
	const salle = await salleRepository.create(newsalle);
	if (!salle) {
		throw new Error("Salle not create");
	}
	return salle;
};


//read one
const getById = async (id:number) => {
	const salle = await salleRepository.findOneById(id);
	return salle
}

//delete one
const deleteOne = async (id:number) => {
	const salle = await salleRepository.deleteOne(id);
	if (!salle) {
		throw new Error("Salle not delete");
	}
	return salle;
}

//update one
const updateOne = async (id:number, newsalle:Salle) => {
	const salle = await salleRepository.updateOne(id,newsalle);
	if (!salle) {
		throw new Error("Salle not update");
	}
	return salle;
}




export default {getAll, create, getById, deleteOne, updateOne};