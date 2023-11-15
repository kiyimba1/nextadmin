import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const addUser = () => {
	return (
		<div className={styles.container}>
			<form action="" className={styles.form}>
				<input type="text" placeholder="username" name="username" required />
				<input type="text" placeholder="email" name="email" required />
				<input
					type="password"
					placeholder="password"
					name="password"
					required
				/>
				<input type="phone" placeholder="phone" name="phone" />
				<select name="isAdmin" id="isAdmin">
					<option value={false} selected>
						Is Admin?
					</option>
					<option value={true}>yes</option>
					<option value={false}>no</option>
				</select>
				<select name="iaActive" id="iaActive">
					<option value={true} selected>
						Is Active?
					</option>
					<option value={true}>yes</option>
					<option value={false}>no</option>
				</select>

				<textarea
					name="address"
					id="address"
					rows="16"
					placeholder="Address"></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
export default addUser;
