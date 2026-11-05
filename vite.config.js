import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];

// https://vite.dev/config/
export default defineConfig({
	base:
		process.env.GITHUB_ACTIONS &&
		repository &&
		repository !== `${owner}.github.io`
			? `/${repository}/`
			: "/",
	plugins: [react()],
});
