import roleRepository from "../repositories/role.repository.ts";

//read
const getAll = async () => {
	const role = await roleRepository.findAll();
	if (!role) {
		throw new Error("Roles not found");
	}
	return role;
};


export default{getAll};