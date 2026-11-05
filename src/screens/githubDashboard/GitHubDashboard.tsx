import "./GitHubDashboard.css";
import { useEffect, useMemo, useState } from "react";
import { getGitHubProfile, getGitHubRepositories } from "../../services/github";

type GitHubProfile = Awaited<ReturnType<typeof getGitHubProfile>>;

type GitHubRepository = Awaited<
	ReturnType<typeof getGitHubRepositories>
>[number];

export default function GitHubDashboard() {
	const [profile, setProfile] = useState<GitHubProfile | null>(null);
	const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
	const [search, setSearch] = useState("");
	const [language, setLanguage] = useState("All");

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function loadGitHubData() {
			try {
				setLoading(true);
				setError(null);

				const [profileData, repositoryData] = await Promise.all([
					getGitHubProfile(),
					getGitHubRepositories(),
				]);

				setProfile(profileData);
				setRepositories(repositoryData);
			} catch (err) {
				console.error("GitHub API error:", err);
				setError("Unable to load GitHub data. Please try again later.");
			} finally {
				setLoading(false);
			}
		}

		loadGitHubData();
	}, []);

	const languages = useMemo(() => {
		const uniqueLanguages = repositories
			.map((repo) => repo.language)
			.filter((value): value is string => Boolean(value));

		return ["All", ...Array.from(new Set(uniqueLanguages)).sort()];
	}, [repositories]);

	const filteredRepositories = useMemo(() => {
		return repositories.filter((repo) => {
			const matchesSearch =
				repo.name.toLowerCase().includes(search.toLowerCase()) ||
				(repo.description ?? "").toLowerCase().includes(search.toLowerCase());

			const matchesLanguage = language === "All" || repo.language === language;

			return matchesSearch && matchesLanguage;
		});
	}, [repositories, search, language]);

	if (loading) {
		return <div className="github-status">Loading GitHub dashboard...</div>;
	}

	if (error) {
		return <div className="github-status github-error">{error}</div>;
	}

	if (!profile) {
		return <div className="github-status">GitHub profile not found.</div>;
	}

	return (
		<main className="github-dashboard">
			<header className="github-header">
				<div>
					<p className="github-eyebrow">DEVELOPER PROFILE</p>
					<h1>GitHub Dashboard</h1>
					<p className="github-subtitle">
						Live overview of my GitHub activity and projects.
					</p>
				</div>

				<a
					className="github-button"
					href={profile.html_url}
					target="_blank"
					rel="noreferrer">
					View GitHub Profile ↗
				</a>
			</header>

			<section className="github-profile">
				<img
					className="github-avatar"
					src={profile.avatar_url}
					alt={`${profile.login}'s GitHub avatar`}
				/>

				<div className="github-profile-info">
					<h2>{profile.name ?? profile.login}</h2>
					<a href={profile.html_url} target="_blank" rel="noreferrer">
						@{profile.login}
					</a>

					<p>{profile.bio ?? "No profile bio available."}</p>

					<div className="github-location">
						{profile.location ?? "Location not specified"}
					</div>
				</div>
			</section>

			<section className="github-stats">
				<StatCard label="Public Repositories" value={profile.public_repos} />
				<StatCard label="Followers" value={profile.followers} />
				<StatCard label="Following" value={profile.following} />
				<StatCard label="Repositories Loaded" value={repositories.length} />
			</section>

			<section className="github-projects">
				<div className="github-section-heading">
					<div>
						<h2>Repositories</h2>
						<p>{filteredRepositories.length} projects found</p>
					</div>
				</div>

				<div className="github-filters">
					<input
						type="search"
						placeholder="Search repositories..."
						value={search}
						onChange={(event) => setSearch(event.target.value)}
						aria-label="Search repositories"
					/>

					<select
						value={language}
						onChange={(event) => setLanguage(event.target.value)}
						aria-label="Filter by programming language">
						{languages.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>

				<div className="github-repository-grid">
					{filteredRepositories.map((repo) => (
						<article className="github-repository" key={repo.id}>
							<div className="repository-heading">
								<a href={repo.html_url} target="_blank" rel="noreferrer">
									{repo.name} ↗
								</a>

								{repo.fork && <span className="repository-badge">Fork</span>}
								{repo.archived && (
									<span className="repository-badge">Archived</span>
								)}
							</div>

							<p className="repository-description">
								{repo.description ?? "No description provided."}
							</p>

							<div className="repository-meta">
								{repo.language && <span>{repo.language}</span>}

								<span>★ {repo.stargazers_count}</span>
								<span>⑂ {repo.forks_count}</span>
							</div>

							<p className="repository-updated">
								Updated{" "}
								{repo.updated_at
									? new Date(repo.updated_at).toLocaleDateString()
									: "Unknown"}
							</p>
						</article>
					))}
				</div>

				{filteredRepositories.length === 0 && (
					<p className="github-status">No repositories match your search.</p>
				)}
			</section>
		</main>
	);
}

function StatCard({ label, value }: { label: string; value: number }) {
	return (
		<article className="github-stat-card">
			<p>{label}</p>
			<strong>{value}</strong>
		</article>
	);
}
