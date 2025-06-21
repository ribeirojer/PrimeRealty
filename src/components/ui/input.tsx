import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			className={cn(
				"w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-500",
				className,
			)}
			{...props}
		/>
	);
}
