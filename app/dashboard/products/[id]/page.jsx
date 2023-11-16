import styles from "@/app/ui/dashboard/products/singlePropduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.imgContainer}>
					<Image src="/noavatar.png" alt="" fill />
				</div>
				Iphone
			</div>
			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
					<label>Title</label>
					<input type="text" name="title" placeholder="Iphone" />

					<label>Price</label>
					<input type="number" name="price" placeholder="$1129" />

					<label>Stock</label>
					<input type="number" name="stock" placeholder="70" />

					<label>Color</label>
					<input type="text" name="color" placeholder="red" />

					<label>Size</label>
					<input type="text" name="size" placeholder="Plus" />

					<label>Category</label>
					<select name="cat" id="cat">
						<option value="phone">Phone</option>
						<option value="kitchen">Kitchen</option>
						<option value="computers">Computers</option>
					</select>

					<label>Description</label>
					<textarea
						name="desc"
						id="desc"
						rows="16"
						placeholder="Description"></textarea>

					<button>Update</button>
				</form>
			</div>
		</div>
	);
};
export default SingleProductPage;
