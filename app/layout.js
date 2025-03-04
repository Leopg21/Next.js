import "./globals.css";

  export const metadata = {
    title: "Emmanuel A. Ileogben",
    description: "",
  };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       >
        {children}
      </body>
    </html>
  );
}