import roleService from "../services/role.service.ts";

//read
const getAll = async (req, res) => {
	try {
		const role = await roleService.getAll();
		res.status(200).json(role);
	} catch (error) {
		return res.status(500).json(role);
	}
};

export default{getAll};