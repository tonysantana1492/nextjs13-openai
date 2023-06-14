import { Metadata, NextPage } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jokes Generator",
  description: "App that use chatGPT for generate jokes",
};

interface Iprop {
  children: React.ReactNode;
}

const RootLayout: NextPage<Iprop> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
