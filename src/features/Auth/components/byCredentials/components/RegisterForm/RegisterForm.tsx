'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '@/entities/User';

import { getAuthUrl } from '@/shared/config/api.config';
import { useActions } from '@/shared/hooks/useActions';

import { AUTH_ERRORS } from '../../../../constants';
import { getEmailRules, getPasswordRules, getUnpRules } from '../../../../helpers/rules';
import { FormLinkText } from '../../../FormLinkText';
import { IRegisterForm } from '../../type';

import { Input } from '@/shared/UI/form-elements';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useStyles } from './useStyles';

export const RegisterForm = () => {
	const styles = useStyles();
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		reset,
	} = useForm<IRegisterForm>({ mode: 'onChange' });
	const { register: signup } = useActions();
	const { isLoading } = useAuth();
	const [isEmployer, setIsEmployer] = useState(false);

	const checkPasswordsValidation = (value: string) => {
		if (value === getValues('password')) return true;
		return AUTH_ERRORS.PASSWORD_CONFIRM;
	};

	const onSubmit: SubmitHandler<IRegisterForm> = data => {
		signup(data);
		reset();
	};

	return (
		<Box onSubmit={handleSubmit(onSubmit)} component='form' sx={styles.form}>
			<Box sx={styles.formWrapper}>
				<Typography sx={{ fontSize: '32px' }} variant='h1'>
					Регистрация
				</Typography>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<Button
						sx={{ flex: '1 1 50%' }}
						variant={!isEmployer ? 'contained' : 'outlined'}
						onClick={() => setIsEmployer(false)}
					>
						Исполнитель
					</Button>
					<Button
						sx={{ flex: '1 1 50%' }}
						variant={isEmployer ? 'contained' : 'outlined'}
						onClick={() => {
							setIsEmployer(true);
						}}
					>
						Заказчик
					</Button>
				</Box>
				<Input
					{...register('email', getEmailRules())}
					type='email'
					placeholder='e-mail'
					err={errors.email}
				/>
				<Input
					{...register('password', getPasswordRules())}
					type='password'
					placeholder='Пароль'
					err={errors.password}
				/>
				<Input
					{...register('repeatPassword', {
						...getPasswordRules(),
						validate: checkPasswordsValidation,
					})}
					type='password'
					placeholder='Подтвердите пароль'
					err={errors.repeatPassword}
				/>

				{!isEmployer && (
					<Input {...register('unp', getUnpRules())} placeholder='УНП' err={errors.unp} />
				)}
			</Box>
			<Box sx={{ mt: 3, mb: 2 }}>
				<Button sx={{ mb: 2 }} type='submit' variant='contained' disabled={isLoading} fullWidth>
					зарегистрироваться
				</Button>
				<FormLinkText text='Уже зарегистрированы?' linkText='Вход' href={getAuthUrl('login')} />
			</Box>
		</Box>
	);
};
