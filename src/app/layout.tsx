import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ogImage from "@/assets/images/og-image.png"
import bgCity from "@/assets/images/bg-city.webp";
import Navbar from "@/components/app/Navbar";
import "animate.css/animate.compat.css";
import "swiper/css";
import BaseProvider from "@/providers/BaseProvider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900"
});

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),
	title: "Aziz Febriyanto — Full-Stack Developer & Digital Transformation Specialist",
	description:
		"Hi, I'm Aziz — Full-Stack Developer & Digital Transformation Specialist",
	openGraph: {
		type: "profile",
		images: [
			ogImage.src,
		]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
        <html lang="en">
            <BaseProvider>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased bg-no-repeat bg-center bg-cover bg-fixed overflow-x-hidden`}
					style={{
						backgroundImage: `url(${bgCity.src})`,
					}}
				>
					<main className="block min-h-screen bg-black/50">
						<Navbar />
						{children}
					</main>
				</body>
			</BaseProvider>
        </html>
    );
}
