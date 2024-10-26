import localFont from "next/font/local";
import "./globals.css";

// Load the Overpass font
const overpass = localFont({
  src: "./fonts/Overpass-VariableFont_wght.ttf",
  variable: "--font-overpass",
  // Weights can be specified for variable fonts, but usually just the range is sufficient
  weight: "400 700", // Specify the range of weights available
});

export const metadata = {
  title: "interactive-rating",
  description: "interactive-rating",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${overpass.variable}`}>{children}</body>
    </html>
  );
}
