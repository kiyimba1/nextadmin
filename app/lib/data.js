import { Product, User } from "./models";
import { connectToDB } from "./util";

export const fetchUsers = async (q, page) => {
	const regex = new RegExp(q, "i");

	const ITEMS_PER_PAGE = 2;
	try {
		connectToDB();
		const count = await User.find({ username: { $regex: regex } }).count();
		const users = await User.find({ username: { $regex: regex } })
			.limit(ITEMS_PER_PAGE)
			.skip(ITEMS_PER_PAGE * (page - 1));
		return { count, users };
	} catch (error) {
		throw new Error("Failed to fetch Users!");
	}
};

export const fetchProducts = async (q, page) => {
	const regex = new RegExp(q, "i");

	const ITEMS_PER_PAGE = 2;
	try {
		connectToDB();
		const count = await Product.find({ title: { $regex: regex } }).count();
		const products = await Product.find({ title: { $regex: regex } })
			.limit(ITEMS_PER_PAGE)
			.skip(ITEMS_PER_PAGE * (page - 1));
		return { count, products };
	} catch (error) {
		throw new Error("Failed to fetch Users!");
	}
};
