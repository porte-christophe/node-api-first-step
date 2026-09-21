import {prisma} from "../../lib/prisma.ts";
import type Salle from "../dto/salle.type.ts";

//read
const findAll = async () => {
	return await prisma.salle.findMany();
};

//create
const create =  async(newsalle:Salle) => {
	try {
		const newSalle = await prisma.salle.create({
			data: newsalle,
		});
		return newSalle;

	} catch (error){
		return error;
	}
	
}


//read one
const findOneById = async (id:number) => {
	return await prisma.salle.findUnique({
		where: {
			id : id,
		}
	});
};

//delete one
const deleteOne =  async(id:number) => {
	try {
		const salle = await prisma.salle.delete({
			where: {
				id : id,
			},
		});
		return salle;

	} catch (error){
		return error;
	}
}

//update one
const updateOne =  async(id:number, newsalle:Salle) => {
	try {
		const salle = await prisma.salle.update({
			where: {
				id : id,
			},
			data: newsalle,
		});
		return salle;

	} catch (error){
		return error;
	}
}

export default {findAll, create, findOneById, deleteOne, updateOne};