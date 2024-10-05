import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment, { Moment } from 'moment-timezone';
import { FieldError } from 'react-hook-form';

import { EUROPEAN_DATE_FORMAT, EUROPEAN_TIMEZONE } from '@/shared/constants/date';

import { useStyles } from './useStyles';

interface IDatePickerProps {
	value: string;
	onChange: (newValue: string) => void;
	label?: string;
	err?: FieldError;
	sx?: SxProps;
}

export function DateInput({ err, value, onChange, ...props }: IDatePickerProps) {
	const styles = useStyles();

	const handleChange = (value: Moment | null) => {
		const date = moment.tz(value, EUROPEAN_TIMEZONE);
		onChange(date.isValid() ? date.toISOString() : '');
	};

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<DatePicker
				format={EUROPEAN_DATE_FORMAT}
				value={value ? moment(value) : null}
				onChange={(newValue) => handleChange(newValue)}
				{...props}
			/>
			{err && <Typography sx={styles.textError}>{err.message}</Typography>}
		</LocalizationProvider>
	);
}
