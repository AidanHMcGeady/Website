import { Assets } from "../../assets/assets";

export function Header() {
	return (
		<>
			<section
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					minWidth: "100%",
					maxWidth: "100%",
					minHeight: "5rem",
					maxHeight: "5rem",
					backgroundColor: "blue",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "0 1rem",
				}}>
				<img
					id="profile-pic"
					src={Assets.icons.profile}
					style={{ height: "4.5rem", borderRadius: "50%" }}
				/>

				<div id="nav-elements"></div>

				<button style={{ height: "4rem" }}>Contact</button>
			</section>
		</>
	);
}
