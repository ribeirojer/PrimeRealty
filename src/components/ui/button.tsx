import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
}

export function Button({
	className,
	variant = "default",
	size,
	...props
}: ButtonProps) {
	const base =
		`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
			size === "sm" ? "text-xs" : size === "lg" ? "text-lg" : ""
		}` +
		" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
	const variants = {
		default: "bg-blue-600 text-white hover:bg-blue-700",
		outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
		ghost: "text-gray-700 hover:bg-gray-100",
	};

	return (
		<button className={cn(base, variants[variant], className)} {...props} />
	);
}
