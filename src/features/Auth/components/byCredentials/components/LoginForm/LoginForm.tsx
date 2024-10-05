"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { useAuth } from "@/entities/User";

import { getAuthUrl } from "@/shared/config/api.config";
import { useActions } from "@/shared/hooks/useActions";

import { getEmailRules, getPasswordRules } from "../../../../helpers/rules";
import { FormLinkText } from "../../../FormLinkText";
import { ILoginForm } from "../../type";

import { Button, Input } from "@mui/material";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ILoginForm>({ mode: "onChange" });
	const { login } = useActions();
	const { isLoading } = useAuth();

	const onSubmit: SubmitHandler<ILoginForm> = data => {
		login(data);
		reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register("email", getEmailRules())}
				placeholder="e-mail"
				err={errors.email}
			/>
			<Input
				{...register("password", getPasswordRules())}
				type="password"
				placeholder="password"
				err={errors.password}
			/>
			<Button type="submit" disabled={isLoading}>
				вход
			</Button>
			<FormLinkText
				text="Ещё нет акаунта?"
				linkText="Sign Up"
				href={getAuthUrl("register")}
			/>
		</form>
	);
};
