import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CartSidebar from "@/components/CartSidebar/CartSidebar";
import Notification from "@/components/Notification/Notification";

export const metadata = {
  title: "LUXE — Premium Lifestyle Store",
  description:
    "Discover curated premium products for the modern lifestyle. From audio to accessories, LUXE delivers excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <Notification />
          <main style={{ paddingTop: "var(--nav-height)" }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
