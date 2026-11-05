import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import Timeline from "./Timeline";

describe("Timeline", () => {
	it("renders project cards with titles and dates", () => {
		render(
			createElement(Timeline, {
				title: "Projects",
				subTitle: "Explore my work",
				projects: [
					{
						title: "Example project",
						date: "2025-01-15T00:00:00.000Z",
						icon: "ziyxApp",
					},
				],
			}),
		);

		const cards = screen.getAllByRole("article");
		expect(cards).toHaveLength(1);
		expect(screen.getByRole("heading", { name: "Projects" })).toBeInTheDocument();
		expect(screen.getByText("Example project")).toBeInTheDocument();

		cards.forEach((card) => {
			expect(card).not.toBeEmptyDOMElement();
			expect(card.querySelector("time")?.getAttribute("datetime")).toMatch(
				/^\d{4}-\d{2}-\d{2}T/,
			);
		});
	});
});
