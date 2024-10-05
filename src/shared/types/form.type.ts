import { TextFieldProps } from '@mui/material';
import { FieldError } from 'react-hook-form';

export type InputPropsType = TextFieldProps & {
	err?: FieldError;
};

export interface IOption {
	value: string;
	name: string;
}

export type SelectValueType = number | string | string[] | undefined;
