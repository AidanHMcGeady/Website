import "./Social.css";
import { Assets } from "../../assets/assets";

const links = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/aidan-mcg/",
		description: "Connect professionally",
		img: Assets.logos.linkedIn,
	},
	{
		name: "GitHub",
		href: "https://github.com/",
		description: "Explore projects and code",
	},
	{
		name: "Bold.pro",
		href: "https://www.behance.net/",
		description: "View online career",
	},
];

export default function Socials() {
	return (
		<section className="portfolio-section">
			<div className="social-section">
				<span className="eyebrow">AROUND THE WEB</span>

				<h2>Connect & explore</h2>

				<p>Visit my professional profiles and discover more of my work.</p>

				<div className="social-links">
					<a
						href=""
						onClick={() => open("https://www.linkedin.com/in/aidan-mcg/")}
						className="social-button">
						<img src={Assets.logos.linkedIn} style={{ height: "2rem" }}></img>
						LinkedIn
					</a>

					<a
						href=""
						onClick={() => open("https://github.com/AidanHMcGeady")}
						className="social-button">
						<img src={Assets.logos.linkedIn} style={{ height: "2rem" }}></img>
						GitHub
					</a>

					{/* <a href="#" className="social-button">
						<img src={Assets.logos.boldPro} style={{ height: "2rem" }}></img>
						Bold.pro
					</a> */}
				</div>
			</div>
		</section>
	);
}
