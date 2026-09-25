import {prisma} from "../../lib/prisma.ts";

const findAll = async () => {
	return await prisma.role.findMany();
};

export default {findAll};