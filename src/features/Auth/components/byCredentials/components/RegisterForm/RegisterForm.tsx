"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { useAuth } from "@/entities/User";

import { getAuthUrl } from "@/shared/config/api.config";
import { useActions } from "@/shared/hooks/useActions";

import { AUTH_ERRORS } from "../../../../constants";
import { getEmailRules, getPasswordRules } from "../../../../helpers/rules";
import { FormLinkText } from "../../../FormLinkText";
import { IRegisterForm } from "../../type";

import { Input } from "@/shared/UI/form-elements";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import styles from "./RegisterForm.module.scss";

export const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		reset,
	} = useForm<IRegisterForm>({ mode: "onChange" });
	const [isApplicant, setIsApplicant] = useState(true);
	const { register: signup } = useActions();
	const { isLoading } = useAuth();

	const checkPasswordsValidation = (value: string) => {
		if (value === getValues("password")) return true;
		return AUTH_ERRORS.PASSWORD_CONFIRM;
	};

	const onSubmit: SubmitHandler<IRegisterForm> = data => {
		signup(data);
		reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Box>
				<Button onClick={() => setIsApplicant(false)}>Заказчик</Button>
				<Button onClick={() => setIsApplicant(true)}>
					Исполнитель
				</Button>
			</Box>
			<Input
				{...register("email", getEmailRules())}
				type="email"
				placeholder="e-mail"
				err={errors.email}
			/>
			<Input
				{...register("password", getPasswordRules())}
				type="password"
				placeholder="password"
				err={errors.password}
			/>
			<Input
				{...register("repeatPassword", {
					...getPasswordRules(),
					validate: checkPasswordsValidation,
				})}
				type="password"
				placeholder="confirm password"
				err={errors.repeatPassword}
			/>
			<Input
				{...register("password", getPasswordRules())}
				type="password"
				placeholder="password"
				err={errors.password}
			/>
			<Button type="submit" disabled={isLoading}>
				зарегистрироваться
			</Button>
			<FormLinkText
				text="Уже зарегистрированы?"
				linkText="Login"
				href={getAuthUrl("login")}
			/>
		</form>
	);
};
