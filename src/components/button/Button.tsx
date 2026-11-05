import "./Button.css";
import type { AnchorHTMLAttributes } from "react";

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
	appStoreUrl?: string;
};

export default function AppleButton({
	appStoreUrl = "https://www.apple.com/app-store/",
	children = "Download on the App Store",
	...props
}: ButtonProps) {
	return (
		<a
			{...props}
			href={appStoreUrl}
			target="_blank"
			rel="noopener noreferrer"
			style={{
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "flex-start",
				gap: 10,
				minHeight: 60,
				minWidth: "fit-content",
				padding: "1rem 2rem",
				border: "1px solid #a6a6a6",
				borderRadius: 12,
				backgroundColor: "#000",
				color: "#fff",
				fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
				textDecoration: "none",
				boxSizing: "border-box",
				...props.style,
			}}>
			<span aria-hidden="true" style={{ fontSize: 30, lineHeight: 1 }}>
				
			</span>
			<span
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "space-around",
					lineHeight: 1.15,
					textAlign: "start",
				}}>
				<span style={{ fontSize: 16, fontWeight: 600 }}>{children}</span>
			</span>
		</a>
	);
}
