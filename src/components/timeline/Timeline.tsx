import "./Timeline.css";
import { useState, type CSSProperties } from "react";
import { Assets } from "../../assets/assets";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../card/Card";

type Link = {
	icon: keyof typeof Assets.logos;
	href: string;
	text: string;
};

export type TimelineProject = {
	title: string;
	date: string | Date;
	icon: keyof typeof Assets.logos;
	shortDescription?: string;
	description?: string;
	links?: Link[];
};

type TimelineProps = {
	projects: TimelineProject[];
	className?: string;
};

const lineStyle: CSSProperties = {
	position: "absolute",
	top: 0,
	bottom: 0,
	left: "5.25rem",
	width: "2px",
	background: "#d1d5db",
};

export default function Timeline({
	title,
	subTitle,
	projects,
	className,
}: {
	title: string;
	subTitle: string;
	projects: TimelineProject[];
	className?: string;
}) {
	const [isExpanded, setIsExpanded] = useState(false);

	const grouped = new Map<number, { project: TimelineProject; date: Date }[]>();

	for (const project of projects) {
		const date =
			project.date instanceof Date ? project.date : new Date(project.date);
		if (Number.isNaN(date.getTime())) continue;

		const year = date.getFullYear();
		const yearProjects = grouped.get(year) ?? [];
		yearProjects.push({ project, date });
		grouped.set(year, yearProjects);
	}

	const years = [...grouped.entries()].sort(([a], [b]) => b - a);

	if (years.length === 0) {
		return <p className={className}>No projects to display.</p>;
	}

	return (
		<AnimatePresence>
			<div
				className={className}
				data-testid={"timeline-card"}
				aria-label={title}
				id={title}>
				<div
					className="expandable-header"
					onClick={() => setIsExpanded((prev) => !prev)}>
					<div className="header-box">
						<h1>{title}</h1>

						<img
							className="chevron"
							src={Assets.icons.chevron}
							style={{
								transform: `scaleY(${isExpanded ? -1 : 1})`,
								transition: "transform .5s ease",
							}}></img>
					</div>
					<p>{subTitle}</p>
				</div>

				<motion.div
					style={{
						position: "relative",
						overflow: "hidden",
					}}
					animate={{
						height: isExpanded ? "auto" : "2rem",
					}}
					transition={{
						duration: 0.5,
						ease: "easeInOut",
					}}>
					<>
						<div aria-hidden="true" style={lineStyle} />
						{years.map(([year, entries]) => (
							<section
								key={year}
								aria-labelledby={`timeline-year-${year}`}
								className="timeline-container">
								<h2 id={`timeline-year-${year}`} className="timeline-year">
									{year}
								</h2>
								<ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
									{entries
										.sort((a, b) => b.date.getTime() - a.date.getTime())
										.map(({ project, date }, index) => {
											return (
												<li
													key={`${project.title}-${date.toISOString()}-${index}`}
													className="timeline-title">
													<span aria-hidden="true" className="timeline-span" />
													<article className="timeline-article">
														<Card date={date} project={project} />
													</article>
												</li>
											);
										})}
								</ol>
							</section>
						))}
					</>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
