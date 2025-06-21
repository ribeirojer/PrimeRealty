import { useRouter } from "next/router";
import { type ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	}, [router]);

	return (
		<div
			className={`layout ${loading ? "loading" : ""} flex flex-col min-h-screen`}
		>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
