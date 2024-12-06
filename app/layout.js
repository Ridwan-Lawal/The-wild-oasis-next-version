import "@/app/_styles/globals.css";
import { Poppins } from "next/font/google";

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
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
