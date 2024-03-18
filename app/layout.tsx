import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000"),

	title:  "Firefox Club",
	authors: {
		name: "firefoxclub",
	},

	description:
		"Explore the events and get to know about the latest technologies and trends.",
	openGraph: {
		title: "Firefox Club",
		description:
			"Explore the events and get to know about the latest technologies and trends.",
		url: "https://localhost:3000/",
		siteName: "Firefox Club",
		images: "/next.svg",
		type: "website",
	},
	keywords: ["daily web coding", "firefox","events" ,"dailywebcoding","tech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
