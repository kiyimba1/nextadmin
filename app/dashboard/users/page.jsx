import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";

const UsersPage = () => {
	return (
		<div className={styles.contatiner}>
			<div className={styles.top}>
				<Search placeholder={"search for user"} />
				<Link href="/dashbord/users/add">
					<button className={styles.addButton}>Add New</button>
				</Link>
			</div>
			<table className={styles.table}></table>
		</div>
	);
};
export default UsersPage;
