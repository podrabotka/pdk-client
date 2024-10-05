import {
	FormControl,
	FormControlOwnProps,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React from "react";

import { IOption, SelectValueType } from "../../../types/form.type";

interface IProps {
	name: string;
	label: string;
	options: IOption[] | undefined;
	multiple?: boolean;
	value: SelectValueType;
	onChange: (e: SelectChangeEvent<SelectValueType>) => void;
	variant?: FormControlOwnProps["variant"];
	defaultValue?: SelectValueType;
}

export const FormSelect = React.forwardRef<HTMLSelectElement, IProps>(
	({ options, value, onChange, label, variant, ...props }, ref) => {
		return (
			<FormControl fullWidth variant={variant}>
				<InputLabel>{label}</InputLabel>
				<Select
					inputRef={ref}
					value={value}
					onChange={onChange}
					label={label}
					{...props}
				>
					{options &&
						options.map(({ name, value }) => (
							<MenuItem key={value} value={value}>
								{name}
							</MenuItem>
						))}
				</Select>
			</FormControl>
		);
	}
);
