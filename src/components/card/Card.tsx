import "./Card.css";
import { useState } from "react";

import { Assets } from "../../assets/assets";
import { TimelineProject } from "../timeline/Timeline";

export function Card({
	project,
	date,
}: {
	project: TimelineProject;
	date: Date;
}) {
	const [isExpanded, setIsExpanded] = useState(false);

	const formatter = new Intl.DateTimeFormat(undefined, {
		month: "short",
		day: "numeric",
	});

	return (
		<div
			className="card-container"
			onClick={() =>
				setIsExpanded((prev) => (project.description ? !prev : prev))
			}>
			<img src={Assets.logos[project.icon]} className="card-image"></img>
			<div className="card-subtitle">
				<div>
					<div className="card-title">
						<h3 style={{ margin: 0, fontSize: "1rem" }}>{project.title}</h3>
						<time
							dateTime={date.toISOString()}
							style={{ color: "#6b7280", fontSize: "0.875rem" }}>
							{formatter.format(date)}
						</time>
					</div>

					<p className="card-text">
						{isExpanded
							? project.description || "No Long Description Provided"
							: project.shortDescription || "No Short Description Provided"}
					</p>
				</div>

				{project.links && (
					<div className="card-link-container">
						{project.links.map((x, i) => (
							<img
								src={Assets.logos[x.icon]}
								style={{
									display: "flex",
									width: `3rem`,
									height: "3rem",
								}}
								onClick={() => open(x.href)}></img>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
