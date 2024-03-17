import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000"),

	title:  "Om Mishra",
	authors: {
		name: "ommishra",
	},

	description:
		"I'm a software engineer and a passionate learner. I love to build things and share my knowledge with others.",
	openGraph: {
		title: "Om Mishra",
		description:
			"I'm a software engineer and a passionate learner. I love to build things and share my knowledge with others.",
		url: "https://localhost:3000/",
		siteName: "Om Mishra",
		images: "/next.svg",
		type: "website",
	},
	keywords: ["daily web coding", "ommishra", "dailywebcoding","portfolio","tech"],
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
