import {prisma} from "../../lib/prisma.ts";

export const findAll = async () => {
	return await prisma.role.findMany();
};