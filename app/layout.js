import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

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
      <body className="bg-primary-950 text-primary-100 min-h-dvh">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
