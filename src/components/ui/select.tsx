interface SelectProps {
	value: string;
	onChange: (value: string) => void;
	children: React.ReactNode;
}

export function Select({ value, onChange, children }: SelectProps) {
	return (
		<div className="relative w-full">
			{children &&
			Array.isArray(
				// Clone children e passa props para os filhos conforme necessário
				children,
			)
				? children.map((child) => {
						if (child.type === SelectTrigger || child.type === SelectContent) {
							return child.props && child.type === SelectContent
								? { ...child, props: { ...child.props, value, onChange } }
								: child;
						}
						return null;
					})
				: children}
		</div>
	);
}

export function SelectTrigger({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return <div className={`mb-1 ${className}`}>{children}</div>;
}

interface SelectValueProps {
	value: string;
	placeholder?: string;
}

export function SelectValue({
	value,
	placeholder = "Selecione...",
}: SelectValueProps) {
	return (
		<div className="block truncate text-sm text-gray-900">
			{value || <span className="text-gray-400">{placeholder}</span>}
		</div>
	);
}

interface SelectContentProps {
	value: string;
	onChange: (value: string) => void;
	children: React.ReactNode;
}

export function SelectContent({
	value,
	onChange,
	children,
}: SelectContentProps) {
	return (
		<select
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-500"
		>
			{children}
		</select>
	);
}

interface SelectItemProps {
	value: string;
	children: React.ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
	return <option value={value}>{children}</option>;
}
