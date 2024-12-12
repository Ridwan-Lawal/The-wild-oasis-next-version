import { Sono } from "next/font/google";

export const sono = Sono({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "Arial"],
});
