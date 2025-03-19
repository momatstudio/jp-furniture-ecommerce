import { UserProvider } from "@auth0/nextjs-auth0/client";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata = {
  title: "JP Furniture",
  description: "Beautiful custom made furniture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
