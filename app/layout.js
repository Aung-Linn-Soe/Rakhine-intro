import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rakhine State | ရခိုင်ပြည်နယ်",
  description:
    "A land of stone pagodas and long, quiet shores — ラカイン州の仏塔・海・滝・食べ物・伝統衣装を紹介するサイト。",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="my">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@300;400;500;600&family=Noto+Serif+JP:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>
          <Nav />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
