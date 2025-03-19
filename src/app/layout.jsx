import { UserProvider } from "@auth0/nextjs-auth0/client";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "JP Furniture",
  description: "Beautiful custom made furniture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
