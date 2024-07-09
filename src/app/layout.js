import { MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Universal Perk",
  description: "Universal-perk landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <div className="bg-[#242424]">
          <MantineProvider withNormalizeCSS>{children}</MantineProvider>
        </div>
      </body>
    </html>
  );
}
