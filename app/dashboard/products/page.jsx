import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../pagination/pagination";

const ProductsPage = () => {
	return (
		<div className={styles.contatiner}>
			<div className={styles.top}>
				<Search placeholder={"search for product"} />
				<Link href="/dashboard/products/add">
					<button className={styles.addButton}>Add New</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Title</td>
						<td>Description</td>
						<td>Price</td>
						<td>Created At</td>
						<td>Stock</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className={styles.product}>
								<Image
									src="/noproduct.jpg"
									alt=""
									width={40}
									height={40}
									className={styles.productImage}
								/>
								Iphone
							</div>
						</td>
						<td>desc</td>
						<td>$999</td>
						<td>13.01.2022</td>
						<td>72</td>
						<td>
							<div className={styles.buttons}>
								<Link href="/">
									<button className={`${styles.button} ${styles.view}`}>
										View
									</button>
								</Link>
								<Link href="/">
									<button className={`${styles.button} ${styles.delete}`}>
										Delete
									</button>
								</Link>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<div className={styles.product}>
								<Image
									src="/noproduct.jpg"
									alt=""
									width={40}
									height={40}
									className={styles.productImage}
								/>
								Iphone
							</div>
						</td>
						<td>desc</td>
						<td>$999</td>
						<td>13.01.2022</td>
						<td>72</td>
						<td>
							<div className={styles.buttons}>
								<Link href="/">
									<button className={`${styles.button} ${styles.view}`}>
										View
									</button>
								</Link>
								<Link href="/">
									<button className={`${styles.button} ${styles.delete}`}>
										Delete
									</button>
								</Link>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<Pagination />
		</div>
	);
};
export default ProductsPage;
