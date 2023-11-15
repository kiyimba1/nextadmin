import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProduct = () => {
	return (
		<div className={styles.container}>
			<form action="" className={styles.form}>
				<input type="text" placeholder="title" name="title" required />
				<select name="cat" id="cat">
					<option value="general">Choose a category</option>
					<option value="kitchen">Kitchen</option>
					<option value="phone">Phonr</option>
					<option value="computer">Computer</option>
				</select>
				<input type="text" placeholder="price" name="price" />
				<input type="text" placeholder="stock" name="stock" />

				<input type="text" placeholder="color" name="color" />
				<input type="text" placeholder="size" name="size" />
				<textarea
					name="desc"
					id="desc"
					rows="16"
					placeholder="description"></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
export default AddProduct;
