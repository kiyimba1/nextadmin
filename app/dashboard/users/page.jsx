import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../pagination/pagination";

const UsersPage = () => {
	return (
		<div className={styles.contatiner}>
			<div className={styles.top}>
				<Search placeholder={"search for user"} />
				<Link href="/dashboard/users/add">
					<button className={styles.addButton}>Add New</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Name</td>
						<td>Email</td>
						<td>Created At</td>
						<td>Role</td>
						<td>Status</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className={styles.user}>
								<Image
									src="/noavatar.png"
									alt=""
									width={40}
									height={40}
									className={styles.userImage}
								/>
								ed ed
							</div>
						</td>
						<td>john@mail.com</td>
						<td>13.01.2022</td>
						<td>Admin</td>
						<td>Active</td>
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
							<div className={styles.user}>
								<Image
									src="/noavatar.png"
									alt=""
									width={40}
									height={40}
									className={styles.userImage}
								/>
								ed ed
							</div>
						</td>
						<td>john@mail.com</td>
						<td>13.01.2022</td>
						<td>Admin</td>
						<td>Active</td>
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
export default UsersPage;
