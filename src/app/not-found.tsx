"use client";

import { createMetadata } from "@/shared/config/seo/meta.config";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const metadata = createMetadata({
	title: "Page not found",
});

export default function NotFound() {
	const router = useRouter();

	return (
		<main>
			<Typography variant="h1" gutterBottom>
				Could not find requested resource
			</Typography>
			<Button onClick={() => router.back()}>go back</Button>
		</main>
	);
}
