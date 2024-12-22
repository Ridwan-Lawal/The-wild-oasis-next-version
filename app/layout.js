import StoreProvider from "@/app/_lib/redux/StoreProvider";
import { createClient } from "@/app/_lib/supabase/server";
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

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const session = await supabase.auth.getUser();

  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${poppins.className} antialiased`}>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                fontSize: "16px",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "30px",
                paddingLeft: "30px",
                fontWeight: "normal",
              },
            }}
          />
        </body>
      </StoreProvider>
    </html>
  );
}
