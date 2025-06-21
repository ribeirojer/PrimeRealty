import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
	className,
	...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
	return (
		<textarea
			className={cn(
				"w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-500",
				className,
			)}
			rows={4}
			{...props}
		/>
	);
}
