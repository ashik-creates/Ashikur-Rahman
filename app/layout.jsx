import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export const metadata = {
  title: "Ashikur Rahman | Full Stack Developer",
  description:
    "Portfolio of Ashikur Rahman — a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  icons: {
    icon: "/projects/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
