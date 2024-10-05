import { createMetadata } from "@/shared/config/seo/meta.config";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import "./globals.css";
import theme from "./theme";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});

export const metadata = createMetadata({
	title: "Подработка",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.variable}>
				<AppRouterCacheProvider>
					{<ThemeProvider theme={theme}>{children}</ThemeProvider>}
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
