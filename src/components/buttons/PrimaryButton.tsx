"use client";

import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={`${className ?? ''} text-cyan-900 bg-gradient-to-tr from-cyan-200 to-cyan-400 via-cyan-500 flex items-center flex-nowrap justify-center outline-none ring-opacity-0 px-4 py-2 font-semibold rounded-full cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed text-xs tracking-wider group`}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;
