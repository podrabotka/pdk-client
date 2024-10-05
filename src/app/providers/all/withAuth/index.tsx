import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "@/entities/User";

import { useActions } from "@/shared/hooks/useActions";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const { user } = useAuth();
	const { logout, checkAuth } = useActions();

	useEffect(() => {
		if (localStorage.getItem("accessToken")) checkAuth();
	}, []);

	useEffect(() => {
		if (!localStorage.getItem("refreshToken") && user) logout();
	}, [pathname]);

	return <>{children}</>;
};

export default AuthProvider;
