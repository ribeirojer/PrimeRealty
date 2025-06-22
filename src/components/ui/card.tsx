import type { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
}

export function Card({ children, className }: CardProps) {
	return (
		<div className={`rounded-2xl border shadow-sm bg-white ${className}`}>
			{children}
		</div>
	);
}

export function CardHeader({ children, className }: CardProps) {
	return <div className={`${className} p-4 border-b`}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
	return <h2 className={`${className} text-lg font-semibold`}>{children}</h2>;
}

export function CardDescription({ children, className }: CardProps) {
	return <p className={`${className} text-sm text-gray-500`}>{children}</p>;
}

export function CardContent({ children, className }: CardProps) {
	return <div className={`${className} p-4`}>{children}</div>;
}
