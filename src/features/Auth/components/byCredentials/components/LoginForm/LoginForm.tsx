'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '@/entities/User';

import { getAuthUrl } from '@/shared/config/api.config';
import { useActions } from '@/shared/hooks/useActions';

import { getEmailRules, getPasswordRules } from '../../../../helpers/rules';
import { FormLinkText } from '../../../FormLinkText';
import { ILoginForm } from '../../type';

import { Box, Button, Typography } from '@mui/material';
import { Input } from '@/shared/UI/form-elements';
import { useStyles } from './useStyles';

export const LoginForm = () => {
	const styles = useStyles();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ILoginForm>({ mode: 'onChange' });
	const { login } = useActions();
	const { isLoading } = useAuth();

	const onSubmit: SubmitHandler<ILoginForm> = data => {
		login(data);
		reset();
	};

	return (
		<Box onSubmit={handleSubmit(onSubmit)} component='form' sx={styles.form}>
			<Box sx={styles.formWrapper}>
				<Typography sx={{ fontSize: '32px' }} variant='h1'>
					Вход
				</Typography>
				<Input {...register('email', getEmailRules())} placeholder='e-mail' err={errors.email} />
				<Input
					{...register('password', getPasswordRules())}
					type='password'
					placeholder='Пароль'
					err={errors.password}
				/>
			</Box>
			<Box sx={{ mt: 3, mb: 2 }}>
				<Button sx={{ mb: 2 }} type='submit' variant='contained' disabled={isLoading} fullWidth>
					вход
				</Button>
				<FormLinkText
					text='Ещё нет акаунта?'
					linkText='Регистрация'
					href={getAuthUrl('register')}
				/>
			</Box>
		</Box>
	);
};
