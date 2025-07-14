import { UserProvider } from "@auth0/nextjs-auth0/client";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import { ProductsProvider } from "@/context/ProductsContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

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
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>{children}</CartProvider>
          </ProductsProvider>
        </UserProvider>
      </body>
    </html>
  );
}
