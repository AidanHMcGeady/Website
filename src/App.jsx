import { useState } from "react";
import "./App.css";
import Timeline from "./components/timeline/Timeline";
import { Assets } from "./assets/assets";
import Link from "./components/links/Social";
import GitHubDashboard from "./screens/githubDashboard/GitHubDashboard";
import { Header } from "./components/header/Header";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<section style={{ padding: "5rem 0 0 0" }}>
				<Link />

				<GitHubDashboard />

				<Timeline
					title="Projects"
					subTitle="Explore My Work"
					projects={[
						{
							title: "Ziyx App",
							date: "January 2026",
							shortDescription:
								"ZIYX is a gamified, mobile-first educational platform designed to make entrepreneurship more accessible by helping people develop the knowledge, confidence and practical skills needed to start and grow a business.",
							icon: "ziyxApp",
						},
						{
							title: "STEM Treck",
							date: "Apr 2023",
							shortDescription:
								"STEM-Trek is an immersive XR educational experience developed by The VR Hive, designed to engage young people aged approximately 13–17 with Science, Technology, Engineering and Mathematics (STEM).",
							icon: "theVRHive",
						},
						{
							title: "XR Sports Analysis",
							date: "Jan 2023",
							shortDescription:
								"Research and development involving immersive technology to teach or investigate human physiology, physical performance and sports science.",
							icon: "theVRHive",
						},
						{
							title: "Suicide Prevention and Assessment - 360 Video",
							date: "Mar 2023",
							shortDescription:
								"An immersive educational environment commissioned by NHS Education for Scotland to support learning about suicide prevention and assessment.",
							icon: "theVRHive",
						},
						{
							title: "Endoscopic Training",
							date: "Feb 2023",
							shortDescription:
								"A virtual reality endoscopy-room simulation commissioned by NHS Education for Scotland, intended to support rehearsal of non-technical skills.",
							icon: "theVRHive",
						},
						{
							title: "Arisaig Isle",
							date: "Aug 2022",
							shortDescription: `An immersive virtual environment designed to support the mental health and emotional wellbeing of young people aged 11–17. Developed in collaboration with Redhill High School in Wales, it provides customisable experiences involving relaxation, therapeutic activities, STEM and personal, social and health education (PSHE).`,
							icon: "theVRHive",
						},
						{
							title: "Wound Dressing Training - UWS Nursing & Midwifery",
							date: "Jun 2022",
							shortDescription:
								"An immersive training experience for degree-level nursing students. Learners practise wound-dressing procedures in a simulated hospital environment, with AI-assisted assessment identifying mistakes, omissions and incorrect equipment use.",
							icon: "theVRHive",
						},
						{
							title: "End Of Life Conversations - NHS",
							date: "Mar 2022",
							shortDescription:
								"Developed with NHS clinicians to allow healthcare professionals to practise sensitive end-of-life conversations with simulated patients and relatives in a safe virtual environment.",
							icon: "theVRHive",
						},
						{
							title: "360 Simulation Training Video App",
							date: "Jan 2022",
							shortDescription:
								"Released in June 2022 for iOS and Android, the application delivers immersive training through mobile devices and compatible mobile VR headsets. It includes 360-degree interactive simulations, scenario-based learning, performance feedback and opportunities to practise skills.",
							icon: "theVRHive",
						},
						{
							title: "Website Development",
							date: "Dec 2021",
							shortDescription: "",
							icon: "theVRHive",
						},
						{
							title: "Planet Pollinate",
							date: "Nov 2021",
							shortDescription:
								"An innovative multiplayer virtual reality team-building and educational experience designed to teach participants about ecosystems and pollinators.",
							icon: "theVRHive",
						},
						{
							title: "Scottish Crannog Centre – Immersive Heritage Experience",
							date: "Nov 2021",
							shortDescription:
								"A collaboration involving the University of the West of Scotland and The VR Hive to design an immersive gallery using augmented reality. The original concept explored connecting visitors with historical crannog dwellers and linking the reconstructed site to other crannogs across Scotland.",
							icon: "theVRHive",
						},
					]}
				/>

				<Timeline
					title="Work History"
					subTitle="See Where I've Worked"
					projects={[
						{
							title: "Frontend Games Developer - Ziyx",
							date: "August 2025",
							icon: "ziyxApp",
						},
						{
							title: "Frontend Games Developer - Ziyx",
							date: "December 2023",
							icon: "ziyxApp",
						},
						{
							title: "Frontend Developer - The VR Hive",
							date: "Feburary 2023",
							icon: "theVRHive",
							shortDescription: `Humans are born learners and play is one of the most powerful tools available to help us learn. We’re re-imagining education, training and assessment.  Just think … what would it be like if you could gain nationally accredited qualifications from playing video games?

							We don't do one-dimensional.  Join us on our journey in virtual reality. `,
						},
						{
							title: "Junior Frontend Developer - The VR Hive",
							date: "March 2022",
							icon: "theVRHive",
							shortDescription: `Humans are born learners and play is one of the most powerful tools available to help us learn. We’re re-imagining education, training and assessment.  Just think … what would it be like if you could gain nationally accredited qualifications from playing video games?

							We don't do one-dimensional.  Join us on our journey in virtual reality. `,
						},
						{
							title: "Graduate Frontend Developer - The VR Hive",
							date: "November 2021",
							icon: "theVRHive",
							shortDescription: `Humans are born learners and play is one of the most powerful tools available to help us learn. We’re re-imagining education, training and assessment.  Just think … what would it be like if you could gain nationally accredited qualifications from playing video games?

							We don't do one-dimensional.  Join us on our journey in virtual reality. `,
						},
					]}
				/>

				<div className="ticks"></div>
				<section id="spacer"></section>
			</section>
		</>
	);
}

export default App;
