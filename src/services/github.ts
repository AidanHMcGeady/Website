import { octokit } from "../lib/octokit";

const GITHUB_USERNAME = "AidanHMcGeady";

export async function getGitHubProfile() {
	const { data } = await octokit.rest.users.getByUsername({
		username: GITHUB_USERNAME,
	});

	return data;
}

export async function getGitHubRepositories() {
	const { data } = await octokit.rest.repos.listForUser({
		username: GITHUB_USERNAME,
		type: "owner",
		sort: "updated",
		direction: "desc",
		per_page: 100,
	});

	return data;
}
