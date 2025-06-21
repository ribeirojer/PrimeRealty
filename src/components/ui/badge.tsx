import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
	children: ReactNode;
	className?: string;
	variant?: "default" | "outline" | "secondary";
}
export function Badge({
	children,
	className,
	variant = "default",
}: BadgeProps) {
	if (variant === "outline") {
		return (
			<span
				className={cn(
					"inline-block text-xs font-medium border border-blue-800 text-blue-800 bg-transparent px-2.5 py-0.5 rounded",
					className,
				)}
			>
				{children}
			</span>
		);
	}
	if (variant === "secondary") {
		return (
			<span
				className={cn(
					"inline-block text-xs font-medium bg-blue-600/20 text-blue-200 border-blue-400/30 px-2.5 py-0.5 rounded",
					className,
				)}
			>
				{children}
			</span>
		);
	}

	return (
		<span
			className={cn(
				"inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded",
				className,
			)}
		>
			{children}
		</span>
	);
}
