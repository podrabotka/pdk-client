import { InputPropsType } from "@/shared/types/form.type";
import { TextField } from "@mui/material";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputPropsType>(
	({ err, variant, placeholder, label, ...props }, ref) => {
		return (
			<TextField
				error={Boolean(err)}
				helperText={err?.message}
				variant={variant ?? "outlined"}
				placeholder={placeholder}
				label={label ?? placeholder}
				inputRef={ref}
				{...props}
			/>
		);
	}
);
