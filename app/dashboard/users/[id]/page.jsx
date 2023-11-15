import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUser = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.imgContainer}>
					<Image src="/noavatar.png" alt="" fill />
				</div>
				Edd
			</div>
			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
					<label>Username</label>
					<input type="text" name="username" placeholder="Edd" />

					<label>Email</label>
					<input type="email" name="username" placeholder="man@mail.com" />

					<label>Password</label>
					<input type="password" name="password" placeholder="Edd" />

					<label>Phone</label>
					<input type="text" name="phone" placeholder="Edd" />

					<label>Address</label>
					<textarea
						name="address"
						id="address"
						rows="16"
						placeholder="New Address"></textarea>

					<label> Is Admin</label>
					<select name="isAdmin" id="isAdmin">
						<option value={true}>Yes</option>
						<option value={false}>No</option>
					</select>

					<label> Is Active</label>
					<select name="isActive" id="isActive">
						<option value={true}>Yes</option>
						<option value={false}>No</option>
					</select>

					<button>Update</button>
				</form>
			</div>
		</div>
	);
};
export default SingleUser;
