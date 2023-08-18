import "./globals.css";
import type { Metadata } from "next";
import Toolbar from "./components/Toolbar/Toolbar";
import { DialogProvider, UserProvider } from "../context";

export const metadata: Metadata = {
  title: "Framework Battle Royale NextJS",
  description: "Framework Battle Royale NextJS",
  keywords: ["html", "css", "javascript", "frontend", "angular", "angular 16"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DialogProvider>
          <UserProvider>
            <Toolbar />
            {children}
          </UserProvider>
        </DialogProvider>
      </body>
    </html>
  );
}
