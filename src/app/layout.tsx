// * css
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="bg-neutral-primary-bc min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
