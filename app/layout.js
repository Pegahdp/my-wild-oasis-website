import { Josefin_Sans } from "next/font/google";

import Header from "./_components/Header";
import "@/app/_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome to the Wild Oasis",
  },
  description: "Here's the description",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} antialiased flex flex-col bg-primary-950 text-primary-100 min-h-dvh`}
      >
        <Header />
        <div className="flex-1">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
