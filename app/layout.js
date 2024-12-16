import StoreProvider from "@/app/_lib/redux/StoreProvider";
import "@/app/_styles/globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "Dashboard - The Wild Oasis",
  },
  description: "",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "Arial"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${poppins.className} antialiased`}>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                fontSize: "14px",
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingRight: "24px",
                paddingLeft: "24px",
                fontWeight: "normal",
              },
            }}
          />
        </body>
      </StoreProvider>
    </html>
  );
}
